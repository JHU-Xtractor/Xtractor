import boto3

def authenticate_and_get_token(username: str, password: str, 
                               user_pool_id: str, app_client_id: str) -> None:
    """
    This function will authenticate the user and return the access token
    :param: username: username to authenticate
    :param: password: password to authenticate
    :param: user_pool_id: user pool id
    :param: app_client_id: app client id
    """
    
    client = boto3.client('cognito-idp')

    resp = client.admin_initiate_auth(
        UserPoolId=user_pool_id,
        ClientId=app_client_id,
        AuthFlow='ADMIN_NO_SRP_AUTH',
        AuthParameters={
            "USERNAME": username,
            "PASSWORD": password
        }
    )

    print("Log in success")
    #print(resp)
    #print("Access token:", resp['AuthenticationResult']['AccessToken'])
    #print("ID token:", resp['AuthenticationResult']['IdToken'])
    return resp

def changePassword(username: str, new_password: str, 
                               user_pool_id: str, app_client_id: str,auth_response: list,given_name: str,preferred_username: str) -> None:
        """
        This function will change the password of the user
        :param: username: username to authenticate
        :param: new_password: new password to authenticate
        :param: user_pool_id: user pool id
        :param: app_client_id: app client id
        :param: auth_response: authentication response

        """
        
        client = boto3.client('cognito-idp')

        challenge_response = client.admin_respond_to_auth_challenge(
        UserPoolId=user_pool_id,
        ClientId=app_client_id,
        ChallengeName=auth_response['ChallengeName'],
        Session=auth_response['Session'],
        ChallengeResponses={
            'given_name': given_name,
            'preferred_username': preferred_username,
            'NEW_PASSWORD': new_password,
            'USERNAME': username
        }
    )
        print('Password changed!')
        print(f'USERNAME={username}')
        print(f'PASSWORD={new_password}')

if __name__ == '__main__':
    username = 'pualJones2'
    password = 'U3FY37Q1.MrX'
    newPwd = '72]0Y\'5~T?b]'
    user_pool_id = 'us-east-1_NQNnCAiWA'
    app_client_id = '4pp87j9uouhf7jcs98uqgq99nj'
    preferred_username = 'pualJones2'
    given_name = 'pualJones2'
    # acquire the authentication token - note that for AWS CLI you must have the proper credentials
    response = authenticate_and_get_token(username,password,user_pool_id,app_client_id) 
    #accessToken = response['AuthenticationResult']['AccessToken']
    #print(accessToken)

    # in the event that the user needs to change their password prior to using their token
    #changePassword(username,newPwd,user_pool_id,app_client_id,response,given_name,preferred_username)