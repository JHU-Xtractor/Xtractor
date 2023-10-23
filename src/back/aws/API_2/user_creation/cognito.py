import boto3
import botocore.exceptions
import constants as const

cognito = boto3.client('cognito-idp')

USER_POOL_ID = "us-east-1_NQNnCAiWA"
CLIENT_ID = "4pp87j9uouhf7jcs98uqgq99nj"

def create_user(event: dict) -> tuple:

    code, message = 200, "User Created Successfully"

    try:
        # For General Errors
        try:
            # For Cognito Errors
            cognito.sign_up(
                ClientId = CLIENT_ID,
                Username = event['username'],
                Password = event['password'],
                UserAttributes=[
                    {
                        'Name': 'email',
                        'Value': event['email']
                    },
                    {
                        'Name': 'given_name',
                        'Value': event['name']['first_name']+" "+event['name']['last_name']
                    },
                    {
                        'Name': 'preferred_username',
                        'Value': event['username']
                    }
                ]


            )
        except botocore.exceptions.ClientError as e:
            if e.response['Error']['Code'] == "UsernameExistsException":
                code, message = 400, "Username Already Exists"
            else:
                code,message =  400, e.response['Error']['Message']
    except Exception as e:
        code, message = 400, const.formatError("Cognito: "+str(e))

    return code, message