import boto3
import json
import datetime as dt
from boto3.dynamodb.conditions import Attr

table = boto3.resource('dynamodb').Table('listOfJobs')
s3 = boto3.client('s3')
BUCKET = 'xtractor-main'
EXPIRATION_TIME = 25 # in days

def lambda_handler(event, context):
    """
    This function is triggered by a CloudWatch event and will delete all jobs
    that are older than the specified time in the EXPIRATION_TIME constant
    :param: event: an eventBridge activation
    :param: context: lambda context (not used)
    """

    # get today's time and date
    now = dt.datetime.utcnow()
    # date three months ago
    three_months_ago = now - dt.timedelta(days=EXPIRATION_TIME)
    three_months_ago_string = str(three_months_ago).split(" ")[0]

    #log the date
    print("Three months ago: "+ str(three_months_ago_string))

    # get all jobs that are older than three months
    response = table.scan(
        IndexName='time',
        FilterExpression=Attr('time').lt(three_months_ago_string)
    )
    print("DynamoDB response: "+ str(response))

    # loop through all jobs and delete them
    for item in response['Items']:  
        jobId = item['JOB_ID']
        userName = item['username']


        # Deletion process, please not ordering
        # We delete from s3 first, as S3 is more volatile than dynamodb

        # delete job files from s3
        response = s3.list_objects_v2(Bucket=BUCKET, Prefix=userName)
        # log the response
        print("S3 response: "+ str(response))

        # loop through all objects and note which ones to delete
        objects_to_delete = []
        for obj in response['Contents']:
            if jobId in obj['Key']:
                objects_to_delete.append({'Key': obj['Key']})
        
        # delete the files
        s3.delete_objects(Bucket=BUCKET, Delete={'Objects': objects_to_delete})

        # delete job from dynamodb
        table.delete_item(
            Key={
                'JOB_ID': jobId
            }
        )


# Debugging only
#if __name__ == '__main__':
#    lambda_handler(None, None)