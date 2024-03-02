import boto3
import json

BUCKET = "xtractor-main-v2"
DYNAMO_DB_TEXTRACT_TABLE = 'Xtractor_job_file_lookup'
DYNAMO_DB_FILE_TABLE = "xtractor_api_3_lookup_file_uuid"


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
        TableName=DYNAMO_DB_TEXTRACT_TABLE,
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

def addListOfAssociatedJobsToDynamoDB(uuid,jobID):
    """
    This function adds an entry to the DynamoDB table
    :param file: the file to be added
    :param jobId: the jobId to be added
    """

    # First check if there are already existing jobs for a given file 
    response = dynamoDB.get_item(
        TableName=DYNAMO_DB_FILE_TABLE,
        Key={
            'uuid': {
                'S': uuid
            }
        }
    )

    if 'job_ids' in response['Item']:
        # If there are existing jobs, append the new job to the list
        response = dynamoDB.update_item(
            TableName=DYNAMO_DB_FILE_TABLE,
            Key={
                'uuid': {
                    'S': uuid
                }
            },
            UpdateExpression="SET job_ids = list_append(job_ids, :i)",
            ExpressionAttributeValues={
                ':i': {
                    'L': [
                        {
                            'S': jobID
                        }
                    ]
                }
            }
        )
    else:
        # If there are no existing jobs, create a new entry
        response = dynamoDB.update_item(
            TableName=DYNAMO_DB_FILE_TABLE,
            Key = {
                'uuid': {
                    'S': uuid
                }
            },
            ExpressionAttributeValues={
                ':i': {
                    'L': [
                        {
                            'S': jobID
                        }
                    ]
                }
            },
            UpdateExpression="SET job_ids = :i"
        )
    
   

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

    print("Creating job for file: ", file)
    
    # Begin the Textract job
    response = beginTextractAsync(file)

    # Get job ID
    jobId = response['JobId']

    # Add the entry to the DynamoDB table
    addEntryToDynamoDB(file, jobId)

    # get the uuid associated with the file 
    fileUUID = file.split("/")[1]

    # Add the job to the list of associated jobs
    addListOfAssociatedJobsToDynamoDB(fileUUID,jobId)

    # Delete
    deleteMessageFromSQS(receiptHandle)

if __name__ == "__main__":
    # Test the function
    print(beginTextractAsync("jyoun127/702825010004/output_1.pdf"))


