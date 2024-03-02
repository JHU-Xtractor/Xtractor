import boto3
import json
DYANMO_DB_TABLE = 'Xtractor_job_file_lookup'
dynamoDB = boto3.client('dynamodb')


def checkStatus(fileName):
    """
    This function checks the status of the file
    :param fileName: the file name
    """
    # Get the item from the DynamoDB table
    response = dynamoDB.get_item(
        TableName=DYANMO_DB_TABLE,
        Key={
            'file': {
                'S': fileName
            }
        }
    )
    
    # Return the status
    return response['Item']['status']['S']

def lambda_handler(event, context):

    # Add the entry to the DynamoDB table
    response = checkStatus(event['fileName'])

    return {
        'statusCode': 200,
        'body': json.dumps(response)
    }