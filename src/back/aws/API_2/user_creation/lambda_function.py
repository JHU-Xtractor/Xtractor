# lambda function to create a database entry for a new user

import json
import boto3
dynamodb = boto3.resource('dynamodb',
                          region_name="us-east-1")
TABLENAME = 'xtractor_users'

def lambda_handler(event,context):
    dynamoDB = dynamodb.Table(TABLENAME)
    # for the response of the lambda function
    response = "Username Already Exists"

    # check if the table contains that user
    if not checkIfUserExists(dynamoDB,json.loads(event['body'])['username']):
        # parse the event for fields
        bodyText = event['body']
        response = putIntoDynamoDB(dynamoDB, bodyText)

        # create folder for s3``
        if response == "User Successfully Inputted into Database\n":
            response = response + createFolder(json.loads(bodyText)['username'])
            
    # return the lambda processes's response
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
    dictionary = json.loads(bodyText)
    try:
        # putting the item
        dynamoDB.put_item(
            Item={
                'username': dictionary['username'],
                'fields':{
                    'first_name': dictionary['name']['first_name'],
                    'last_name': dictionary['name']['last_name'],
                    'email': dictionary['email'],
                    'security_question': dictionary['security']['security_question'],
                    'security_answer': dictionary['security']['security_answer'],
                    'email_verified': {'BOOL':False}
                    }
                }
        )
        response = "User Successfully Inputted into Database\n"
    except Exception as e:
        # in case something goes wrong
        response = str(e)
    return response
    
def createFolder(username):
    try:
        s3 = boto3.client('s3')
        s3.put_object(Bucket='xtractor-main',Body='./utilities/userFile.txt',Key=(username+'/userFile.txt'))
        return "Object Successfully Inserted into S3\n"
    except Exception as e:
        print(e)
    return "Object Not Inserted into S3\n"

if __name__ == "__main__":
    response = createFolder('test')
    print(response)