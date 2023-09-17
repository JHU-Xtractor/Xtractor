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

def lambda_handler(event,context):
    """
    This function is triggered by API Gateway and will create a new user entry in the database
    :param: event: dictionary containing username, name, email, and security (all fields required)
    :param: context: lambda context (not used)
    """
    
    print(event)
    bodyText = (event)

    dynamoDB = dynamodb.Table(TABLENAME)
    # for the response of the lambda function
    response = "Username Already Exists"

    # check if the table contains that user
    if not checkIfUserExists(dynamoDB,bodyText['username']):
        # parse the event for fields
        response = putIntoDynamoDB(dynamoDB, bodyText)

    #create folder for s3
    if response == "User Successfully Inputted into Database\n":
        response = response + createFolder(bodyText['username'])
            
    # return the lambda processes's response
    print(response)
    return response

def checkIfUserExists(dynamoDB,username):
    """
    This function will check if the user exists in the database
    :param: dynamoDB: dynamoDB resource
    :param: username: username to check
    """
    try:
        # getting the item
        response = dynamoDB.get_item(
            Key={
                'username': username
            }
        )
        if response['Item'] != None:
            return True
    except Exception as e:
        # in case something goes wrong
        print(e)
    return False


def putIntoDynamoDB(dynamoDB, bodyText):
    """
    This function will put the user into the database
    :param: dynamoDB: dynamoDB resource
    :param: bodyText: body of the request (parse through for user fields)
    """
    try:
        # check if email is a edu account
        if 'edu' not in bodyText['email'] :
            response = "User attempted to put in a non edu account into the database."
        else: 
        # putting the item
        
            dynamoDB.put_item(
                Item={
                    'username': bodyText['username'],
                    'first_name': bodyText['name']['first_name'],
                    'last_name': bodyText['name']['last_name'],
                    'email': bodyText['email'],
                    'security_question': bodyText['security']['security_question'],
                    'security_answer': bodyText['security']['security_answer'],
                    'email_verified': False,
                    'password':bodyText['security']['password']
                    
                    }
            )
            verifyEmail(bodyText['email'])
            response = "User Successfully Inputted into Database\n"
    except Exception as e:
        # in case something goes wrong
        response = str(e)
    return response
    
def createFolder(username):
    """
    This function will create a folder for the user in S3
    :param: username: username to create folder for in S3 (this is where all the files for that user will be stored)
    """
    try:
        print("finished")
        s3.put_object(Bucket='xtractor-main',Body='utilities/userFile.txt',Key=(username+'/userFile.txt'))
        return "Object Successfully Inserted into S3\n"
    except Exception as e:
        print("insertion unsuccessful")
        print(e)
        return "Object Not Inserted into S3\n"

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