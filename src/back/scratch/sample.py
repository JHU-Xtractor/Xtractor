# lambda function to create a database entry for a new user

import json
import boto3
dynamodb = boto3.resource('dynamodb',
                          region_name="us-east-1")
from random import randint, randrange

s3 = boto3.client('s3')
ses = boto3.client('ses',region_name="us-east-1")


SOURCE_EMAIL = "jyoun127@jhu.edu" # please change for extractor 

VERIFICATION_TABLE = "xtractor_email_verification_codes"
TABLENAME = 'xtractor_users'

def verifyEmail(email):
    """
    This function will verify the email of the user
    :param: email: email to verify
    """

    randomNumber = randint(100000,999999)

    dynamoDBVerification = dynamodb.Table(VERIFICATION_TABLE)

    print("DynamoDB")
    response = dynamoDBVerification.put_item(
        Item={
            'email': email,
            'verification_code': randomNumber
        }
    )
    print(response)

    print("SES")
    print("to" +email)

    try:
        response = ses.send_email(
            Source = SOURCE_EMAIL,
            Destination={
                'ToAddresses': [
                    email,
                ]
            },
            Message={
                'Subject': {
                    'Data': 'Xtractor Email Verification',
                    'Charset': 'UTF-8'
                },
                'Body': {
                    'Text': {
                        'Data': 'Please verify your email by entering the following code '+str(randomNumber),
                        'Charset': 'UTF-8'
                    }
                }
            }
        )
        print(response)
    except Exception as e:
        print(e)
        return e
    
if __name__ == "__main__":
    response = verifyEmail("bob@jhu.edu")
    print(response)