import boto3
import json
import constants as const
from s3 import S3Manager
from cognito import CognitoManager

DEFAULT_PROFILE_PICTURE = "./profilePicture.PNG"

s3 = boto3.client('s3')


def lambda_handler(event,context):

    print(event)


    # get user ID 
    cognitoManager = CognitoManager()
    code, userID = cognitoManager.getClaimsUserName(event)

    print(userID)

    if code != 200:
        return {
            'headers': const.HEADERS,
            'statusCode': code,
            'body': "{" + f"\"message\": "+ userID + "}"
        }

    s3Manager = S3Manager()
    # create the folder for the user
    code, response = s3Manager.createFolder(const.BUCKET_NAME, userID)

    with open(DEFAULT_PROFILE_PICTURE, "rb") as f:
        s3Manager.uploadFile(const.BUCKET_NAME, userID + "/profilePicture.PNG", f)


    return {
        'headers': const.HEADERS,
        'statusCode': code,
        'body': "{" + f"\"message\": "+ response + "}"
    }
    

if __name__ == '__main__':

    api_call = {'resource': '/api_2/user_management/create_user', 'path': '/api_2/user_management/create_user', 'httpMethod': 'POST', 'headers': {'Accept': '*/*', 'Accept-Encoding': 'gzip, deflate, br', 'Authorization': 'eyJraWQiOiJncWE0ek80bFQ1SEowNkJpQUxEcUd6TmlhbktxR3RFTjVWNzBSZjlWOEhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwYWU2M2RlYS00MmFjLTQwMGMtYWEwYS0yMTMxYTM2YWNhZGYiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfTlFObkNBaVdBIiwiY29nbml0bzp1c2VybmFtZSI6Imp5b3VuMTI3IiwicHJlZmVycmVkX3VzZXJuYW1lIjoianlvdW4xMjciLCJnaXZlbl9uYW1lIjoiSm9uYXRoYW5fWW91bmciLCJvcmlnaW5fanRpIjoiOWVmZGU3MWQtZWMzYS00NjQzLTk5MWMtZGYzNmRkODI4ZDgyIiwiYXVkIjoiNHBwODdqOXVvdWhmN2pjczk4dXFncTk5bmoiLCJldmVudF9pZCI6IjUxZjBhYTRkLWQzZjAtNDBiZC05NzUxLTJlYWY5ODkxNWRmYiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzA2MTI4NTY0LCJleHAiOjE3MDYxMzIxNjQsImlhdCI6MTcwNjEyODU2NCwianRpIjoiNmU5MDg2N2ItY2U3ZS00YjZiLWFiODQtYTU1Y2VmM2MxMzJjIiwiZW1haWwiOiJqeW91bjEyN0BqaHUuZWR1In0.URejhgwIi4eswLKYb4M9uMgUgrZY82nbxOegvge2fdFk5pKvE6qzRLZ_UAzlFuT7css9PSYRqTzrOzsQXIJJGAeU6-PnQOqYcIO-uIC4PcSeH0EI0wr5YC5noajOjhIQWnMLaYL85UncVyDQuYceM-3vY_oAMahJV99GO2bsU1Tir_NzTu-naCq9vGtSslAk8j8wjoHj09WXmte6NnPMTX69X7IS99OOCX-v3_3GO6_-1MtZ0gz_bKm4jdT-aYMMqNCDc1bj1vBSU93c4xPhYBtK7nCmwKAbuCedZE5g_fbFWGKV1WJXucePgYi3Ey3okEMMRBJ2350oCF31ciEv6w', 'Host': '7jefwpxjkb.execute-api.us-east-1.amazonaws.com', 'Postman-Token': 'c0408bd7-ec57-4353-adc8-e7dbb3f115e6', 'User-Agent': 'PostmanRuntime/7.36.1', 'X-Amzn-Trace-Id': 'Root=1-65b176ae-2b2b2b8a602585b33b1a5a17', 'X-Forwarded-For': '192.12.14.2', 'X-Forwarded-Port': '443', 'X-Forwarded-Proto': 'https'}, 'multiValueHeaders': {'Accept': ['*/*'], 'Accept-Encoding': ['gzip, deflate, br'], 'Authorization': ['eyJraWQiOiJncWE0ek80bFQ1SEowNkJpQUxEcUd6TmlhbktxR3RFTjVWNzBSZjlWOEhNPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwYWU2M2RlYS00MmFjLTQwMGMtYWEwYS0yMTMxYTM2YWNhZGYiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfTlFObkNBaVdBIiwiY29nbml0bzp1c2VybmFtZSI6Imp5b3VuMTI3IiwicHJlZmVycmVkX3VzZXJuYW1lIjoianlvdW4xMjciLCJnaXZlbl9uYW1lIjoiSm9uYXRoYW5fWW91bmciLCJvcmlnaW5fanRpIjoiOWVmZGU3MWQtZWMzYS00NjQzLTk5MWMtZGYzNmRkODI4ZDgyIiwiYXVkIjoiNHBwODdqOXVvdWhmN2pjczk4dXFncTk5bmoiLCJldmVudF9pZCI6IjUxZjBhYTRkLWQzZjAtNDBiZC05NzUxLTJlYWY5ODkxNWRmYiIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNzA2MTI4NTY0LCJleHAiOjE3MDYxMzIxNjQsImlhdCI6MTcwNjEyODU2NCwianRpIjoiNmU5MDg2N2ItY2U3ZS00YjZiLWFiODQtYTU1Y2VmM2MxMzJjIiwiZW1haWwiOiJqeW91bjEyN0BqaHUuZWR1In0.URejhgwIi4eswLKYb4M9uMgUgrZY82nbxOegvge2fdFk5pKvE6qzRLZ_UAzlFuT7css9PSYRqTzrOzsQXIJJGAeU6-PnQOqYcIO-uIC4PcSeH0EI0wr5YC5noajOjhIQWnMLaYL85UncVyDQuYceM-3vY_oAMahJV99GO2bsU1Tir_NzTu-naCq9vGtSslAk8j8wjoHj09WXmte6NnPMTX69X7IS99OOCX-v3_3GO6_-1MtZ0gz_bKm4jdT-aYMMqNCDc1bj1vBSU93c4xPhYBtK7nCmwKAbuCedZE5g_fbFWGKV1WJXucePgYi3Ey3okEMMRBJ2350oCF31ciEv6w'], 'Host': ['7jefwpxjkb.execute-api.us-east-1.amazonaws.com'], 'Postman-Token': ['c0408bd7-ec57-4353-adc8-e7dbb3f115e6'], 'User-Agent': ['PostmanRuntime/7.36.1'], 'X-Amzn-Trace-Id': ['Root=1-65b176ae-2b2b2b8a602585b33b1a5a17'], 'X-Forwarded-For': ['192.12.14.2'], 'X-Forwarded-Port': ['443'], 'X-Forwarded-Proto': ['https']}, 'queryStringParameters': None, 'multiValueQueryStringParameters': None, 'pathParameters': None, 'stageVariables': None, 'requestContext': {'resourceId': 'dydr70', 'authorizer': {'claims': {'sub': '0ae63dea-42ac-400c-aa0a-2131a36acadf', 'email_verified': 'true', 'iss': 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_NQNnCAiWA', 'cognito:username': 'jyoun127', 'preferred_username': 'jyoun127', 'given_name': 'Jonathan_Young', 'origin_jti': '9efde71d-ec3a-4643-991c-df36dd828d82', 'aud': '4pp87j9uouhf7jcs98uqgq99nj', 'event_id': '51f0aa4d-d3f0-40bd-9751-2eaf98915dfb', 'token_use': 'id', 'auth_time': '1706128564', 'exp': 'Wed Jan 24 21:36:04 UTC 2024', 'iat': 'Wed Jan 24 20:36:04 UTC 2024', 'jti': '6e90867b-ce7e-4b6b-ab84-a55cef3c132c', 'email': 'jyoun127@jhu.edu'}}, 'resourcePath': '/api_2/user_management/create_user', 'httpMethod': 'POST', 'extendedRequestId': 'SD97VGsToAMEs8Q=', 'requestTime': '24/Jan/2024:20:44:30 +0000', 'path': '/v2/api_2/user_management/create_user', 'accountId': '214775916492', 'protocol': 'HTTP/1.1', 'stage': 'v2', 'domainPrefix': '7jefwpxjkb', 'requestTimeEpoch': 1706129070648, 'requestId': '5280857a-b057-44c0-a591-5826bbedd395', 'identity': {'cognitoIdentityPoolId': None, 'accountId': None, 'cognitoIdentityId': None, 'caller': None, 'sourceIp': '192.12.14.2', 'principalOrgId': None, 'accessKey': None, 'cognitoAuthenticationType': None, 'cognitoAuthenticationProvider': None, 'userArn': None, 'userAgent': 'PostmanRuntime/7.36.1', 'user': None}, 'domainName': '7jefwpxjkb.execute-api.us-east-1.amazonaws.com', 'deploymentId': '3oyoj9', 'apiId': '7jefwpxjkb'}, 'body': None, 'isBase64Encoded': False}

    output = lambda_handler(api_call, None)

