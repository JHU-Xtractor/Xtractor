import boto3
import requests
s3 = boto3.client('s3')

def getPresignedS3URL(bucket: str, key: str, expiration: int) -> str:
    """
    This function will return the presigned URL for the S3 object
    :param: bucket: S3 bucket name
    :param: key: S3 object key
    :param: expiration: expiration time for the presigned URL
    """

    url = s3.generate_presigned_url(
        'put_object',
        Params={
            'ContentType': 'application/pdf',
            'Bucket': bucket,
            'Key': key
        },
        ExpiresIn=expiration
    )
    return url

def uploadFileToS3(bucket: str, key: str, file_path: str, sample = None) -> None:
    """
    This function will upload the file to the S3 bucket
    :param: bucket: S3 bucket name
    :param: key: S3 object key

    :param: file_path: file path to upload
    """
    response = requests.put(getPresignedS3URL(bucket, key, 60), data=open(file_path, 'rb'))

    if response.status_code == 200:
        print("File uploaded successfully")
    else:
        print(response.status_code)
        print("File upload failed")

    if sample is not None:
        response = requests.put(sample)
        print(response.status_code)

if __name__ == '__main__':
    bucket = 'xtractor-main'
    key = 'jyoun127/profilePicture.JPG'

    uploadFileToS3(bucket, key, 'profilePicture.JPG')

    sample = "https://xtractor-main.s3.amazonaws.com/profilePicture.png?AWSAccessKeyId=ASIATEANEM7GGOXMGHDK&Signature=NXCZ0%2FwSSswWG6CFz6Y3tCvBCUQ%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIBvPA6%2F8O%2B94Q6PQ1boQlSthS9Or8ckeOOupDiNtxNSNAiEAmw5Rd5VWNALBRpqoo85sKeZy8BdAZ%2BMxM7tQK9Lj74kqiwMITxAAGgwyMTQ3NzU5MTY0OTIiDI%2FSYBng0LlvEy8axiroAilirKBaCs5EzMftTy0IcUUWUpEbzcncCuRVDQFgezU4hK9BH9kW5B3nFOHXAAkme0khE%2Bw%2BKQQYAxxcg%2F0sK44CrSBoFs6bqGliErisZlwD7KG9LBXXPagYaq%2B9B%2BWI9N4WG50MTsW8D%2F%2FVcXxX%2FaqCzb0t37%2BfJpc2ZtdSzQwdImfxzhgibkg7wY8YrGPf8snh6jki8zB7lPQaRfFTxNAi2VhHFlzxAMYwe2Aha0EFmDfB7FlLwHzVGS%2FNAHSl9DnruH016yzt8mB3TA0eXihLe8wBX6t7dkSFEchttQvhhiXnsbEF4cdgK0sDGI%2FKppfFtWoPAnDTorgpPwUXMjBSKZy2tMLHo6YnAxCZLleWixda9CfAyszVT9QfWLennNfhAO1NJsdZQhcgdZTTuM2p7Zs6uKgJR9d%2FBlVFwzAvBWMewRDfy7Cge%2B4viOCzsFRVo77D9rbnbv7r%2Bw%2Bpv6cS%2BDA9Y2r9VDDcqPCtBjqdAYNDuBcf7HdlSGhM7PqCRrfPUqlhRXupllLZ9uG3hoHcpsien38NmOI57Y0cnQJam45z8GWiTtYXT2Ay2grY12ldydj8Yg%2FR3nvEfklZHmu2g8gr2xq6kR6Q6R0mgFwINKRqxUNTRIPPseaN15HNntoyRXtvPcxBWeflGWbHSAyBsvtWU1BZgGHcx4tJf6Isew3lJelK0OOvSRGNN%2Bs%3D&Expires=1706828500"

    uploadFileToS3(bucket, key, 'profilePicture.JPG', sample)
    
    
    