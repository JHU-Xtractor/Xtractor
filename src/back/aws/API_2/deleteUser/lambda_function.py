import boto3
import json

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('xtractor_users')

def lambda_handler(event, context):
    """
    This function is triggered by API Gateway and will update the user's fields
    :param: event: dictionary containing username, email, password, and security (not all fields required, only username)
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