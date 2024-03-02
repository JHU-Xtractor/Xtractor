import boto3
import json

BUCKET = "xtractor-main-v2"
DYANMO_DB_TABLE = 'Xtractor_job_file_lookup'

s3 = boto3.resource('s3')
textract = boto3.client('textract')
dynamoDB = boto3.client('dynamodb')
sqs = boto3.client('sqs')

SNS_URL = "arn:aws:sns:us-east-1:214775916492:xtractor_api_3_start_textract_job"
SQS_URL = "https://sqs.us-east-1.amazonaws.com/214775916492/xtractor_process_table.fifo"


def addEntryToDynamoDB(file, jobId):
    """
    This function adds an entry to the DynamoDB table
    :param file: the file to be added
    :param jobId: the jobId to be added
    """
    # Add the entry to the DynamoDB table
    response = dynamoDB.put_item(
        TableName=DYANMO_DB_TABLE,
        Item={
            'file': {
                'S': file
            },
            'job_id': {
                'S': jobId
            },
            'status': {
                'S': 'IN_PROGRESS'
            }
        }
    )
    
    # Return the response
    return response

def beginTextractAsync(file):
    """
    This function begins the Textract job asynchronously
    :param file: the file to be processed
    """    
    # Begin the Textract job
    response = textract.start_document_analysis(
        DocumentLocation={
            'S3Object': {
                'Bucket': BUCKET,
                'Name': file
            }
        },
        FeatureTypes=[
            'TABLES'
        ],
        NotificationChannel={
            'SNSTopicArn': SNS_URL,
            'RoleArn': 'arn:aws:iam::214775916492:role/xtractor_api_3_textract_sns'
        },
    )
    
    # Return the response
    return response

def deleteMessageFromSQS(receiptHandle):
    """
    This function deletes a message from the SQS queue
    :param receiptHandle: the receiptHandle of the message to be deleted
    """
    # Delete the message from the SQS queue
    response = sqs.delete_message(
        QueueUrl=SQS_URL,
        ReceiptHandle=receiptHandle
    )
    
    # Return the response
    return response

def lambda_handler(event, context):
    """
    This function begins the Textract job asynchronously
    :param event: the event for the lambda (using proxy integration)
    """

    print(event)

    # Get the file via sqs
    file = event['Records'][0]['body']
    receiptHandle = event['Records'][0]['receiptHandle']

    # file must be in the form of output
    fileLookup = file.split('/')[-1]
    if "output_" not in fileLookup:
        return {
            'statusCode': 400,
            'body': json.dumps('Invalid file')
        }
    
    # Begin the Textract job
    response = beginTextractAsync(file)

    # Get job ID
    jobId = response['JobId']

    # Add the entry to the DynamoDB table
    addEntryToDynamoDB(file, jobId)

    # Delete
    deleteMessageFromSQS(receiptHandle)

if __name__ == "__main__":
    # Test the function
    print(beginTextractAsync("jyoun127/702825010004/output_1.pdf"))


