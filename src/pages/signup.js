import React from 'react';
import '../App.css';
import SignUp from '../components/SignUp';
import { createFolder } from '../resources/s3.js';
import { checkIfPasswordsMatch, checkValidPassword, signUpCognito } from '../resources/congito.js';
import ErrorMsgSignUp from '../components/ErrorMsgSignUp.jsx';

const SignUpPage = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [passwordMatch, setPasswordMatch] = React.useState(false);
    const [validPassword, setValidPassword] = React.useState(false);
    const [userNameAlreadyExists, setUserNameAlreadyExists] = React.useState(false);
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const [cognitoError, setCognitoError] = React.useState(false);
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    const uponSignUp = async (username, email, password, confirmPassword,firstName,lastName) => {
        try {
            setValidPassword(true);
            setPasswordMatch(true);
            setUserNameAlreadyExists(false);
            setCognitoError(null);
            setFormSubmitted(true);

            // Check if password is valid
            const isValidPassword = await checkValidPassword(password);
            setValidPassword(isValidPassword);

            // Check if passwords match
            const doPasswordsMatch = await checkIfPasswordsMatch(password, confirmPassword);
            setPasswordMatch(doPasswordsMatch);

            console.log("email: " + email)
            console.log("username: " + username)

            // Issue the command to sign up
            if (isValidPassword && doPasswordsMatch) {
                let output = await signUpCognito(username, email, password,firstName,lastName);
                if (output === 'Username already exists') {
                    setUserNameAlreadyExists(true);
                    return;
                } else {
                    setUserNameAlreadyExists(false);
                }
            }

            //no other errors
            createFolder();

        } catch (error) {
            setCognitoError(error.message);
        }
    };

    const signUp = {
        TextField38623774: {
            onChange: (e) => {
                setUsername(e.target.value);
            },
        },
        TextField38623782: {
            onChange: (e) => {
                setEmail(e.target.value);
            },
        },
        TextField38623783: {
            onChange: (e) => {
                setPassword(e.target.value);
            },
        },
        TextField38623836: {
            onChange: (e) => {
                setConfirmPassword(e.target.value);
            },
        },
        Button: {
            onClick: () => {
                uponSignUp(username, email, password, confirmPassword, firstName, lastName);
            },
        },
        First_name: {
            onChange: (e) => {
                setFirstName(e.target.value);
            },
        },
        Last_name: {
            onChange: (e) => {
                setLastName(e.target.value);
            },
        },
    };

    return (
        <div>
        <div className="App-header">
          <SignUp overrides={signUp} />
          <div style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', paddingTop: '80px' }}>
            {formSubmitted && !validPassword ? <ErrorMsgSignUp errormessage='Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character' /> : null}
            {formSubmitted && !passwordMatch ? <ErrorMsgSignUp errormessage='Passwords do not match' /> : null}
            {formSubmitted && userNameAlreadyExists ? <ErrorMsgSignUp errormessage='Username already exists' /> : null}
            {formSubmitted && cognitoError != null? <ErrorMsgSignUp errormessage={cognitoError} /> : null}
          </div>
        </div>
      </div>
    );
};

export default SignUpPage;
