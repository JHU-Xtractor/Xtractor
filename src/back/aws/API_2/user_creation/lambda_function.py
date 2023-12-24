import boto3
import json
import constants as const
from s3 import S3Manager
from cognito import CognitoManager

s3 = boto3.client('s3')


def lambda_handler(event,context):

    print(event)


    # get user ID 
    cognitoManager = CognitoManager()
    code, userID = cognitoManager.getClaimsUserName(event)

    if code != 200:
        return {
            'headers': const.HEADERS,
            'statusCode': code,
            'body': "{" + f"\"message\": "+ userID + "}"
        }

    s3Manager = S3Manager()
    # create the folder for the user
    code, response = s3Manager.createFolder(const.BUCKET_NAME, userID)

    return {
        'headers': const.HEADERS,
        'statusCode': code,
        'body': "{" + f"\"message\": "+ response + "}"
    }
    

