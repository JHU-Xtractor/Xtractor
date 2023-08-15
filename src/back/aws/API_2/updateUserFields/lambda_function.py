import boto3
import json
import userEntry as user

dynamodb = boto3.resource('dynamodb')

def lambda_handler(event, context):

    # setup infrastructure
    userEntry = user.UserEntry(dynamodb)

    # check if user is in database
    if not userEntry.checkIfUserExists(event['username']):
        return {
            'statusCode': 400,
            'body': json.dumps('User does not exist')
        }
    
    #check if username mandatory field is there
    if "username" not in event:
        return {
            'statusCode': 400,
            'body': json.dumps('Username not provided - Required Field')
        }

    response = ""
    for modification in event:
        if modification == 'email':
            # modify email value
            if userEntry.updateEmail(event['username'],event['email']) is False:
                response = response + "Email update failed\n"
                return {
                    'statusCode': 400,
                    'body': response
                }
            else:
                response = response + "Email updated\n"
        elif modification == 'password':
            # modify password
            if userEntry.updatePassword(event['username'],event['password']) is False:
                response = response + "Password update failed\n"
                return {
                    'statusCode': 400,
                    'body': response
                }
            else:
                response = response + "Password updated\n"
        elif modification == 'security':
            # update security question and answer
            if userEntry.updateSecurityQuestion(event['username'],event['security']['security_question']) is False:
                response = response + "Security update failed\n"
                return {
                    'statusCode': 400,
                    'body': response
                }
            else:
                response = response + "Security updated\n"

            if userEntry.updateSecurityAnswer(event['username'],event['security']['security_answer']) is False:
                response = response + "Security update failed\n"
                return {
                    'statusCode': 400,
                    'body': response
                }
            else:
                response = response + "Security updated\n"
        
    return {
        'statusCode': 200,
        'body': json.dumps(response)
    }

# COMMENT OUT FOR TESTING

# if __name__ is "__main__":
#     event = {
#         'username': "USERNAME",
#         'email': 'test@jhu.edu',
#         'password': 'test'
#     }
#     print(lambda_handler(event, None))
#     print("Testing updateUserFields")
