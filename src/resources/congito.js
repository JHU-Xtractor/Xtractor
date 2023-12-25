import {
    SignUpCommand,
    CognitoIdentityProviderClient,
    AdminGetUserCommand,
} from "@aws-sdk/client-cognito-identity-provider";

const AWSCognito = require('amazon-cognito-identity-js');

export const checkIfPasswordsMatch = (password, confirmPassword) => {
    console.log("password: " + password);
    console.log("confirmPassword: " + confirmPassword);
    return password === confirmPassword;
}

export const checkValidPassword = (password) => {
    //password contains at least one number
    const hasNumber = /\d/.test(password);
    console.log("hasNumber: " + hasNumber);

    //password contains at least one lowercase letter
    const hasLowercase = /[a-z]/.test(password);
    console.log("hasLowercase: " + hasLowercase);

    //password contains at least one uppercase letter
    const hasUppercase = /[A-Z]/.test(password);
    console.log("hasUppercase: " + hasUppercase);

    //password contains at least one special character
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    console.log("hasSpecial: " + hasSpecial);

    //password contains at least 8 characters
    const hasLength = password.length >= 8;
    console.log("hasLength: " + hasLength);

    return hasNumber && hasLowercase && hasUppercase && hasSpecial && hasLength;
}



const poolData = {
    UserPoolId: 'us-east-1_NQNnCAiWA',
    ClientId: '4pp87j9uouhf7jcs98uqgq99nj'
};

const userPool = new AWSCognito.CognitoUserPool(poolData);

function fetchToken(username, password) {
    const authenticationDetails = new AWSCognito.AuthenticationDetails({
        Username: username,
        Password: password
    });

    const userData = {
        Username: username,
        Pool: userPool
    };

    const cognitoUser = new AWSCognito.CognitoUser(userData);

    return new Promise((resolve, reject) => {
        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                resolve(result.getIdToken().getJwtToken());
            },
            onFailure: function (err) {
                reject(err);
            }
        });
    });
}

export const signUpCognito = (username, email, password, firstName, lastName) => {

    const client = new CognitoIdentityProviderClient({region: "us-east-1"});

    //strip email
    email = email.replace(/\s/g, '');

    try{
        const command = new SignUpCommand({
            ClientId: poolData.ClientId,
            Username: username,
            Password: password,
            UserAttributes: [
                {
                    Name: 'email',
                    Value: email
                },
                {
                    Name: "preferred_username",
                    Value: username
                },
                {
                    Name: "given_name",
                    Value: firstName + "_" + lastName
                }
            ],
       
          });
          return client.send(command);
    }catch(err){
        console.log(err);
    }
}

export default fetchToken;

export const getUserInfo = async () => {
    let accessToken = localStorage.getItem('token');
    const response = await fetch('https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/user_management', {
      method: 'GET',
      headers: {
        'Authorization': accessToken,
      }
    });
    
    const data = await response.json();
    return data;
  }

export const modifyUserPassword = async (newPassword) => {
    let accessToken = localStorage.getItem('token');
    const response = await fetch('https://7jefwpxjkb.execute-api.us-east-1.amazonaws.com/v2/api_2/user_management/update_user', {
      method: 'POST',
      headers: {
        'Authorization': accessToken,
      },
      body: JSON.stringify({
        "newPassword": newPassword
      })
    });
    
    const data = await response.json();
    return data;
  }
