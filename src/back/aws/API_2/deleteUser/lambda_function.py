import boto3
import json

dynamodb = boto3.resource('dynamodb')
s3 = boto3.client('s3')
BUCKET = 'xtractor-main'
table = dynamodb.Table('xtractor_users')
cognito = boto3.client('cognito-idp', region_name='us-east-1')
USER_POOL_ID = 'us-east-1_NQNnCAiWA'
CLIENT_ID = '4pp87j9uouhf7jcs98uqgq99nj'


def lambda_handler(event, context):
    """
    This function is triggered by API Gateway and will delete the user both in the database and their corresponding s3 files
    :param: event: dictionary containing username only
    :param: context: lambda context (not used)
    """
    print(event)

   # first check if user exists
    if 'username' not in event.keys() or 'password' not in event.keys():
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
        deleteUserFromCognito(event['username'], event['password'])

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
        # delete from congito 


def deleteUserFromCognito(username: str, password:str):
    """
    This function will delete the user from cognito
    :param: username: username to delete
    :param: password: password to delete
    """
    # first get authentication token
    auth = cognito.admin_initiate_auth(
        UserPoolId=USER_POOL_ID,
        ClientId=CLIENT_ID,
        AuthFlow='ADMIN_NO_SRP_AUTH',
        AuthParameters={
            "USERNAME": username,
            "PASSWORD": password
        }
    )
    access_token = auth['AuthenticationResult']['AccessToken']
    try:
        response = cognito.delete_user(

            AccessToken=access_token        
        )
        print(response)
    except Exception as e:
        print(e)


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


#if __name__ == '__main__':
#    event = {
#        'username': 'pualJones2',
#        'password': '72]0Y\'5~T?b]'
#    }
#    lambda_handler(event, None)