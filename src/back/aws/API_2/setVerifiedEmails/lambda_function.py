import boto3

ses = boto3.client('ses')
dynamoDB = boto3.resource('dynamodb')
TABLE_NAME = 'xtractor-users'
table = dynamoDB.Table(TABLE_NAME)

def lambda_handler(event, context):

    # get all verified email addresses 
    response = ses.list_verified_email_addresses()

    # loop through all verified email addresses
    for email in response['VerifiedEmailAddresses']:

        # modify existing user in dynamodb and mark email as verified
        table.update_item(
            Key={
                'email': email
            },
            UpdateExpression="set emailVerified=:e",
            ExpressionAttributeValues={
                ':e': True
            }
        )