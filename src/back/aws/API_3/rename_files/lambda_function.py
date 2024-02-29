import boto3
import json
import uuid

s3 = boto3.resource('s3')
dynamodb = boto3.resource('dynamodb')

XTRACTOR_BUCKET = "xtractor-main-v2"
DYNAMO_DB_TABLE = "xtractor_api_3_lookup_file_uuid"


def addFileToDynamoDB(uuid,file):
    """
    This function adds the file to the DynamoDB table
    :param uuid: the uuid of the file
    :param file: the file
    """

    # Add the file to the DynamoDB table
    table = dynamodb.Table(DYNAMO_DB_TABLE)
    table.put_item(
        Item={
            'uuid': uuid,
            'file_name': file
        }
    )

def createCopyOfFileWithUUIDName(file,uuid):
    """
    This function creates a copy of the file with the uuid as the name
    :param file: the file
    :param uuid: the uuid
    """

    # Get the file from the S3 bucket
    bucket = s3.Bucket(XTRACTOR_BUCKET)
    obj = bucket.Object(file)
    response = obj.get()

    # Get the user
    user = file.split('/')[0]

    # Get the file extension
    fileExtension = file.split('.')[-1]

    # Create the new file name
    newFileName = f"{user}/{uuid}.{fileExtension}"

    # Write the file to the S3 bucket
    response = bucket.put_object(
        Body=response['Body'].read(),
        Key=newFileName
    )

    print(response)

def checkIfFileIsUUID(file):
    """
    This function checks if the file is a UUID
    :param file: the file
    """

    # Split the file Get Actual File
    fileSplit = file.split('/')

    # Get the last part of the file
    fileLastPart = fileSplit[-1]

    # Split the file 0 File Extension
    fileLastPartSplit = fileLastPart.split('.')

    # Get the first part
    firstPart = fileLastPartSplit[0]

    # Check if the first part is a UUID
    try:
        uuid.UUID(firstPart)
        return True
    except ValueError:
        return False

def lambda_handler(event,context):

    # From SNS
    file = event['Records'][0]['Sns']['Message']

    # Check if the file is a UUID
    if checkIfFileIsUUID(file):
        return {
            'statusCode': 200,
            'body': json.dumps('File is a UUID')
        }

    # Generate a UUID
    fileUUID = str(uuid.uuid4())

    # Add the file to the DynamoDB table
    addFileToDynamoDB(fileUUID,file)

    # Create a copy of the file with the UUID as the name
    createCopyOfFileWithUUIDName(file,fileUUID)

    return {
        'statusCode': 200,
        'body': json.dumps('File added to DynamoDB and copied to S3')
    }


if __name__ == "__main__":
    event = {
        "Records": [
            {
                "Sns": {
                    "Message": "jyoun127/example.pdf"
                }
            }
        ]
    }
    response = lambda_handler(event, None)

    print(response)