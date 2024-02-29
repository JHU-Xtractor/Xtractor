import boto3

class Cognito:

    def __init__(self, userPool: str, clientId: str, region="us-east-1"):
        self.userPool = userPool
        self.clientId = clientId
        self.region = region

        self.client = boto3.client('cognito-idp', region_name=self.region)


    def getToken(self, username: str, password: str):
        
        response = self.client.initiate_auth(
            AuthFlow='USER_PASSWORD_AUTH',
            AuthParameters={
                'USERNAME': username,
                'PASSWORD': password
            },
            ClientId=self.clientId
        )

        return response['AuthenticationResult']['IdToken']
    
    def resetPasswordAdmin(self, username: str, password: str):
        response = self.client.admin_set_user_password(
            UserPoolId=self.userPool,
            Username=username,
            Password=password,
            Permanent=True
        )
        return response
    
if __name__ == "__main__":
    userPool = "us-east-1_NQNnCAiWA"
    clientID = "4pp87j9uouhf7jcs98uqgq99nj"

    cognito = Cognito(userPool, clientID)
    
    userName = "katrubinetti"
    newPassword = "Password123!"

    print(cognito.resetPasswordAdmin(userName, newPassword))

