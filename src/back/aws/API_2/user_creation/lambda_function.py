# lambda function to create a database entry for a new user

import json
import boto3
dynamodb = boto3.resource('dynamodb',
                          region_name="us-east-1")
s3 = boto3.client('s3')
ses = boto3.client('ses')

TABLENAME = 'xtractor_users'

def lambda_handler(event,context):
    
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
    try:
        # check if email is a edu account
        if 'edu' not in bodyText['email'] :
            response = "User attempted to put in a non edu account into the database."
        else: 
        # putting the item
            dynamoDB.put_item(
                Item={
                    'username': bodyText['username'],
                    'fields':{
                        'first_name': bodyText['name']['first_name'],
                        'last_name': bodyText['name']['last_name'],
                        'email': bodyText['email'],
                        'security_question': bodyText['security']['security_question'],
                        'security_answer': bodyText['security']['security_answer'],
                        'email_verified': {'BOOL':False},
                        'password':bodyText['security']['password']
                        }
                    }
            )
            verifyEmail(bodyText['email'])
            response = "User Successfully Inputted into Database\n"
    except Exception as e:
        # in case something goes wrong
        response = str(e)
    return response
    
def createFolder(username):
    try:
        print("finished")
        s3.put_object(Bucket='xtractor-main',Body='utilities/userFile.txt',Key=(username+'/userFile.txt'))
        return "Object Successfully Inserted into S3\n"
    except Exception as e:
        print("insertion unsuccessful")
        print(e)
        return "Object Not Inserted into S3\n"

def verifyEmail(email):
    try:
        response = ses.verify_email_identity(
            EmailAddress=email
        )
        return response
    except Exception as e:
        print(e)
        return e