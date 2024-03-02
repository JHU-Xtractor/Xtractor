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
        ExpressionAttributeNames={
            '#S': 'status'
        },
        ExpressionAttributeValues={
            ':s': 'COMPLETED'
        },
        UpdateExpression='SET #S = :s'
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
    jobID = "865a387cdc571503f931dc20bdfde39205a3a542001a5e3fe6802834cdcd65ad"
    mockDict = {
        "Records": [
            {
                "Sns": {
                    "Message": json.dumps({
                        "JobId": jobID,
                        "DocumentLocation": {
                            "S3ObjectName": "jyoun127/a6b13a0a-8507-4041-b6ad-f1aaa382fbe5/output_1.pdf"
                        }
                    })
                }
            }
        ]
    }
    file = getJobCorrespondingFile(mockDict)
    
    tableDetection.detectTablesTextract(jobID, file)
    
