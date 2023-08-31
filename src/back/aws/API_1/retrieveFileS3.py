import boto3
from botocore.exceptions import ClientError

s3 = boto3.client('s3')

def lambda_handler(event, context):

    # First parse arguments
    bucket_name = event ["pathParameters"]["bucket"]
    file_name = event ["queryStringParameters"]["file"]


    method_parameters = {'Bucket': bucket_name, 'Key': file_name}

    url = "Failed to generated presigned URL"
    try:

        # generate presigned url
        url = s3.generate_presigned_url(
            ClientMethod="get_object",
            Params=method_parameters,
            ExpiresIn=1000
        )
        messageBody = "url: "+url
        # return response
        return {
            "statusCode": 200,
            "body": messageBody
        }
    except ClientError:
        print("Couldn't get a presigned URL for client method '%s'.", "get-object")
        return {
            "statusCode": 400,
            "body": url
        }