import boto3
import database
import cognito
import json
import constants as const

def lambda_handler(event,context):

    event = json.loads(event['body'])

    # create in cogntio
    code, response = cognito.create_user(event)


    if code == 200:
        # create in database
        code, response = database.create_user(event)


    return {
        'headers': const.HEADERS,
        'statusCode': code,
        'body': "{" + f"\"message\": "+ response + "}"
    }
    

