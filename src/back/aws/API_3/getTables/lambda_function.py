import boto3
import json
import tableDetection
s3 = boto3.resource('s3')
dynamodb = boto3.resource('dynamodb')
textract = boto3.client('textract')

XTRACTOR_BUCKET = "xtractor-main-v2"
DYNAMO_DB_TABLE = 'Xtractor_job_file_lookup'

def markJobAsCompleted(jobID):
    """
    This function marks the job as completed in the DynamoDB
    :param jobID: the jobID of the Textract job
    """

    # Get the DynamoDB table
    table = dynamodb.Table(DYNAMO_DB_TABLE)

    # Update the item in the table
    table.update_item(
        Key={
            'job_id': jobID
        },
        UpdateExpression="set status = :s",
        ExpressionAttributeValues={
            ':s': "COMPLETED"
        },
        ReturnValues="UPDATED_NEW"
    )


def getJobCorrespondingFile(event):
    """
    This function gets the file corresponding to the jobID
    :param jobID: the jobID of the Textract job
    """

    return json.loads(event['Records'][0]['Sns']['Message'])['DocumentLocation']['S3ObjectName']


def getTextractResults(jobID):
    """
    This function gets the Textract results
    :param jobID: the jobID of the Textract job
    """
    # Get the Textract results
    response = textract.get_document_analysis(
        JobId=jobID
    )
    
    # Return the response
    return response

def lambda_handler(event, context):
    """
    This function gets all the tables from an image
    :param event: the event for the lambda (using proxy integration)
    """

    print(event)

    ################# GET jobID From SNS #################
    # Get the message from the event
    jobId = json.loads(event['Records'][0]['Sns']['Message'])['JobId']

    # get the corresponding file
    file = getJobCorrespondingFile(event)

    ################# GET Textract Results #################

    tableDetection.detectTablesTextract(jobId, file)

    # mark the job as finished
    markJobAsCompleted(jobId)

if __name__ == "__main__":
    jobID = "e712746f6dee7f2adc78a4d0d15f95f07551cd9f20005d26c9546f0058a32367"
    mockDict = {
        "Records": [
            {
                "Sns": {
                    "Message": json.dumps({
                        "JobId": jobID,
                        "DocumentLocation": {
                            "S3ObjectName": "jyoun127/9a3acc14-9107-4d23-a555-73ce47e910f8.png"
                        }
                    })
                }
            }
        ]
    }
    file = getJobCorrespondingFile(mockDict)
    
    tableDetection.detectTablesTextract(jobID, file)
    
