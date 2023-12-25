
import boto3
cognito = boto3.client('cognito-idp')
USER_POOL_ID = "us-east-1_NQNnCAiWA"



def changeUserPassword(userName: str):

    USER_POOL_ID = "us-east-1_NQNnCAiWA"
    CLIENT_ID = "4pp87j9uouhf7jcs98uqgq99nj"

    try:
        cognito.admin_set_user_password(
            UserPoolId=USER_POOL_ID,
            Username=userName,
            Password='NewPassword123!',
            Permanent=True
        )
    except Exception as e:
        print(e)

if __name__ == '__main__':
    userName = "john_doe"
    changeUserPassword(userName)