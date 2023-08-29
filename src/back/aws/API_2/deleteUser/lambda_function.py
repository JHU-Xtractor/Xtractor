import boto3
import json

dynamodb = boto3.resource('dynamodb')
s3 = boto3.client('s3')
BUCKET = 'xtractor-main'
table = dynamodb.Table('xtractor_users')

def lambda_handler(event, context):
    """
    This function is triggered by API Gateway and will delete the user both in the database and their corresponding s3 files
    :param: event: dictionary containing username only
    :param: context: lambda context (not used)
    """
    print(event)

   # first check if user exists
    if 'username' not in event.keys():
        return {
            'statusCode': 400,
            'body': json.dumps('key error')
        }
   
    if checkIfUserExists(event['username']) == False:
        return {
            'statusCode': 400,
            'body': json.dumps('User does not exist')
        }
    else: 
        # remove user
        table.delete_item(
            Key={
                'username': event['username']
            }
        )
        # remove user contents
        deleteUserContents(event['username'])
        return {
            'statusCode': 200,
            'body': json.dumps('User deleted')
        }


def checkIfUserExists(username):
    """
    This function will check if the user exists in the database
    :param: username: username to check
    """
    try:
        # getting the item
        response = table.get_item(
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

def deleteUserContents(username):
    """
    This function will delete all the user's contents from the S3 bucket
    :param: username: username prefix for all files to delete
    """
    
    response = s3.list_objects_v2(Bucket=BUCKET, Prefix=username)

    for object in response['Contents']:
        print('Deleting', object['Key'])
        s3.delete_object(Bucket=BUCKET, Key=object['Key'])
