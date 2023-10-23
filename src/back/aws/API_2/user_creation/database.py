import boto3
import botocore.exceptions
import constants as const
dynamoDB = boto3.resource('dynamodb')



def create_user(event: dict) -> tuple:
    """
    Creates a new user in the database
    :param event: The event that triggered this function
    :return: True if the user was created successfully, False otherwise
    """
    table = dynamoDB.Table(const.XTRACTOR_USERS_TABLE)

    # response codes
    code, message = 200, "User Created Successfully"

    # attempt to place into database
    try:
        try:
            # Cognito Errors
            table.put_item(
                Item={
                    'username': event['username'],
                    'email': event['email'],
                    'name':{
                        'first_name': event['name']['first_name'],
                        'last_name': event['name']['last_name']
                    }
                },
                ConditionExpression='attribute_not_exists(username)'
            )
        except botocore.exceptions.ClientError as e:
            if e.response['Error']['Code'] == "ConditionalCheckFailedException":
                code, message = 400, "Username Already Exists"
            else:
                code,message =  400, e.response['Error']['Message']
    except Exception as e:
        code, message = 400, const.formatError("Databse: " + str(e))
        
    return code, message

