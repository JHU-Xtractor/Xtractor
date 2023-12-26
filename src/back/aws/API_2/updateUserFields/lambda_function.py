import boto3
import json
import constants as const
import cognito as cognitoManager


def lambda_handler(event, context):
    """
    This function is triggered by API Gateway and will update the user's fields
    :param: event: dictionary containing username, email, password, and security (not all fields required, only username)
    :param: context: lambda context (not used)
    """

    # get body 
    body = json.loads(event['body'])
    # get newPassword
    newPassword = body['newPassword']

    # first get the claims
    cognito = cognitoManager.CognitoManager()
    status, userName = cognito.getClaimsUserName(event)

    if status != 200:
        return {
            'headers': const.HEADERS,
            'statusCode': status,
            'body': "{" + f"\"message\": "+ userName + "}"
        }
    
    # change the password
    status, response = cognito.changeUserPassword(userName, newPassword)

    if status != 200:
        return {
            'headers': const.HEADERS,
            'statusCode': status,
            'body': "{" + f"\"message\": "+ str(response) + "}"

        }
    else:
        return {
            'headers': const.HEADERS,
            'statusCode': status,
            'body': "{" + f"\"message\":  \"Password changed successfully.\"" + "}"
        }

