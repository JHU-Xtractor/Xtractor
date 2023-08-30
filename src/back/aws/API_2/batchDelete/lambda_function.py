import boto3
import json
import datetime as dt
from boto3.dynamodb.conditions import Attr

dynamodb = boto3.resource('dynamodb')
s3 = boto3.client('s3')
BUCKET = 'xtractor-main'
table = dynamodb.Table('listOfJobs')
EXPIRATION_TIME = 90 # in days

def lambda_handler(event, context):

    # get today's time and date
    now = dt.now()

    # date three months ago
    three_months_ago = now - dt.timedelta(days=EXPIRATION_TIME)

    # get all jobs that are older than three months
    response = table.scan(
        FilterExpression=table.scan(
            FilterExpression=Attr('date').lt(three_months_ago)
        )
    )

    # loop through all jobs and delete them
    for item in response['Items']:  
        jobId = item['jobId']
        userName = item['userName']

        # delete job from dynamodb
        table.delete_item(
            Key={
                'jobId': jobId
            }
        )

        # delete job files from s3
        response = s3.list_objects_v2(Bucket=BUCKET, Prefix=userName)

        # loop through all objects and note which ones to delete
        objects_to_delete = []
        for obj in response['Contents']:
            if jobId in obj['Key']:
                objects_to_delete.append({'Key': obj['Key']})
        
        # delete the files
        s3.delete_objects(Bucket=BUCKET, Delete={'Objects': objects_to_delete})
