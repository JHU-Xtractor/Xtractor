import boto3
import cognito as cognitoManager
import constants as const


def lambda_handler(event, context):

    cognito = cognitoManager.CognitoManager()

    # Get the username from the claims in the event.
    status, userName = cognito.getClaimsUserName(event)

    if status != 200:
        return {
            'headers': const.HEADERS,
            'statusCode': status,
            'body': "{" + f"\"message\": "+ userName + "}"
        }
    
    # get information about the user
    status, response = cognito.getInformationAboutUser(userName)


    if status != 200:
        return {
            'headers': const.HEADERS,
            'statusCode': status,
            'body': "{" + f"\"message\": "+ str(response) + "}"

        }
    else:
        stringResponse = str(response["UserAttributes"]).replace("\'", "\"")
        
        # return in json format
        return {
            'headers': const.HEADERS,
            'statusCode': status,
            'body': "{" + f"\"message\": "+ stringResponse + "}"
        }