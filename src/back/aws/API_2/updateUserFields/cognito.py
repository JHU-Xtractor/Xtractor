import boto3


USER_POOL_ID = "us-east-1_NQNnCAiWA"
CLIENT_ID = "4pp87j9uouhf7jcs98uqgq99nj"


class CognitoManager:

    def __init__(self):
        self.cognito = boto3.client('cognito-idp')

    def getClaimsUserName(self, event):
        """
        Returns the username from the claims in the event.
        """
        try:
            claims = event['requestContext']['authorizer']['claims']
            return 200, claims['cognito:username']
        except:
            return 404, "Not Authorized - Error getting username from claims."
    
    def checkIfClaimsMatchesUsername(self, event, userName: str):
        """
        Checks if the username in the claims matches the username provided.
        """
        claims = event['requestContext']['authorizer']['claims']
        if claims['cognito:username'] == userName:
            return 200, "Username matches."
        else:
            return 400, "Username does not match."
        
    def getInformationAboutUser(self, userName: str):
        """
        Returns information about the user.
        """
        try:
            response = self.cognito.admin_get_user(
                UserPoolId=USER_POOL_ID,
                Username=userName
            )
            return 200, response
        except:
            return 404, "Error getting information about user."
        
    def changeUserPassword(self, userName: str, password: str):
        """
        Changes the password of the user.
        """
        try:
            response = self.cognito.admin_set_user_password(
                UserPoolId=USER_POOL_ID,
                Username=userName,
                Password=password,
                Permanent=True
            )
            return 200, response
        except:
            return 404, "Error changing password."