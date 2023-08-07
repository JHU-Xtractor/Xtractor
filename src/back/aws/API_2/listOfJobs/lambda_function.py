"""
    Lambda function to check if there is a job within the database with the same name. 
"""

import boto3
import json

dynamodb = boto3.resource('dynamodb',
                          region_name="us-east-1")
TABLENAME = 'listOfJobs'


def lambda_handler(event,context):
    
    #event = json.loads(event['body'])
    dynamoDB = dynamodb.Table(TABLENAME)

    # for the response of the lambda function
    response = "Job Already Exists"

    # check if the table contains that job ID
    if not checkIfUserExists(dynamoDB,event):
        # parse the event for fields
        response = "Job Does Not Exist"
    
    return {
        "statusCode":200,
        "body": response
    }

def checkIfUserExists(dynamoDB,jobID):

    # first attempt to fetch the item
    response = dynamoDB.get_item(
        Key={
            'JOB_ID': jobID
        }
    )
    print(response)

    #if the item exists, return true
    try:
        if response['Item'] != None:
            return True
    except:
    #else return false
        return False



