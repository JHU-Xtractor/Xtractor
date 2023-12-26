import boto3
import json

dynamodb = boto3.resource('dynamodb')
s3 = boto3.client('s3')
BUCKET = 'xtractor-main'
table = dynamodb.Table('listOfJobs')

def lambda_handler(event, context):

    jobId = event['jobId']

    # look up the user with that jobID
    response = table.get_item(
        Key={
            'jobId': jobId
        }
    )
    userName =  response['Item']['userName']

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
