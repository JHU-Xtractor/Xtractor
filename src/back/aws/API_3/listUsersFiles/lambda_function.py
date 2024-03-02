import boto3
import json
s3 = boto3.client('s3')
BUCKET_NAME = "xtractor-main-v2"

def listFiles(user: str) -> list:
    """
    List the files for a user
    :param user: The user to list the files for
    """
    # Get the files for the user
    response = s3.list_objects_v2(
        Bucket=BUCKET_NAME,
        Prefix=user
    )

    # Get the files
    files = response['Contents']

    cleanedFiles = []
    for file in files:
        
        # check if that's not under a subdirectory
        if file['Key'].count('/') == 1:
            cleanedFiles.append(file['Key'].split('/')[1])

        # remove empty strings
        cleanedFiles = list(filter(None, cleanedFiles))

    return cleanedFiles

def lambda_handler(event, context):

    user = event['queryStringParameters']['user']

    # Get the files for the user
    files = listFiles(user)

    # Return the files
    return {
        'statusCode': 200,
        'body': json.dumps(files)
    }


if __name__ == "__main__":
    event = {
        'body': json.dumps({
            'user': 'jyoun127'
        })
    }
    context = None
    print(lambda_handler(event, context))
