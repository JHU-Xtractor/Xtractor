import boto3
s3 = boto3.client('s3')
import botocore 
from botocore.exceptions import ClientError
import logging
import requests

def get_presigned_url_upload(bucket_name, object_name, expiration=3600):
    """Generate a presigned URL to upload a file to S3
    :param bucket_name: string
    :param object_name: string
    :param expiration: Time in seconds for the presigned URL to remain valid
    :return: Presigned URL as string. If error, returns None.
    """
    try:
        response = s3.generate_presigned_url('put_object',
                                            Params={'Bucket': bucket_name,
                                                    'Key': object_name},
                                            ExpiresIn=expiration)
    except ClientError as e:
        logging.error(e)
        return None

    # The response contains the presigned URL
    return response

def get_presigned_url_download(bucket_name, object_name, expiration=3600):
    """Generate a presigned URL to download a file from S3
    :param bucket_name: string
    :param object_name: string
    :param expiration: Time in seconds for the presigned URL to remain valid
    :return: Presigned URL as string. If error, returns None.
    """
    try:
        response = s3.generate_presigned_url('get_object',
                                            Params={'Bucket': bucket_name,
                                                    'Key': object_name},
                                            ExpiresIn=expiration)
    except ClientError as e:
        logging.error(e)
        return None

    # The response contains the presigned URL
    return response

if __name__ == "__main__":

    bucket = "xtractor-main"
    key = "profilePicture.JPG"

    # Upload
    url = get_presigned_url_upload(bucket, key)
    if url is not None:
        print("URL to upload: " + url)


    # test upload link
    with open("profilePicture.JPG", "rb") as f:
        r = requests.put(url, data=f)
        print(r.status_code)
        print(r.text)

    # test via postman
    with open("profilePicture.JPG", "rb") as f:
        payload = f.read()
        # headers = {'content-type': 'image/JPG'}

        r = requests.request("PUT", url, data=payload)

        print(r.status_code)
        print(r.text)