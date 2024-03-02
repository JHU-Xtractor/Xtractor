import boto3
import json
import authenticator as auth
DEFAULT_ORIGIN = "*"
s3 = boto3.client('s3', region_name = "us-east-1")

"""
    Generates a presigned URL for an S3 object for upload
"""
def lambda_handler(event, context):

    # get the body content
    queryContent = event["queryStringParameters"]

    authClient = auth.Authenticator(DEFAULT_ORIGIN)
    if queryContent is None:
        return authClient.getResponse(json.dumps({"error": "No query string parameters"}), 400)
    
    if "bucket" not in queryContent or "key" not in queryContent:
        return authClient.getResponse(json.dumps({"error": "Missing required query string parameters"}), 400)

    bucket = queryContent["bucket"]
    key = queryContent["key"]

    authClient = None
    try:
        authClient = auth.Authenticator(event["headers"]["origin"])
    except KeyError:
        authClient = auth.Authenticator(DEFAULT_ORIGIN)

    if "upload" in queryContent:
        # Generate the presigned URL for put requests
        contentType = queryContent["contentType"]

        presigned_url = s3.generate_presigned_url(
            'put_object',
            Params={
                'ContentType': contentType,
                'Bucket': bucket,
                'Key': key
            },
            ExpiresIn=3600
        )
        output =  authClient.getResponse(json.dumps({"url": presigned_url}), 200)
        return output


    if "download" in queryContent:
        # get all files from the bucket that start with the key

        
        presigned_url = s3.generate_presigned_url(
            'get_object',
            Params={
                'Bucket': bucket,
                'Key': key
            },
            ExpiresIn=3600
        )
        output =  authClient.getResponse(json.dumps({"url": presigned_url}), 200)

    return output
