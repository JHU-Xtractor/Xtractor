import React from 'react';
import Login from '../components/Login';
import '../App.css';
import LandscapeLogo from '../components/LogoLandscape';
import fetchToken from '../resources/congito';
import LoginFailed from '../components/LoginFailed';
import {useNavigate} from 'react-router-dom';


const LoginPage = () => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [incorrectPassword, setIncorrectPassword] = React.useState(false);

    const history = useNavigate();

    // submit the username and password for a token
    const submitForToken = (username, password) => {
        fetchToken(username, password)
            .then((token) => {
                console.log(token);
                localStorage.setItem('token', token);
                sessionStorage.setItem('username', username);
                history(`/dashboard/${username}`)
            })
            .catch((err) => {
                setIncorrectPassword(true);
                console.log(err);
            });
    }
    

    // handle the button click for submission
    const handleSubmit = () => {
        submitForToken(username, password);
    }

    // user input
    const checkUsrPwd = {
        //reset
        setIncorrectPassword: () => {
            setIncorrectPassword(false);
        },
        
        Button: {
            onClick: () => {
                handleSubmit();
            }
        },
        TextField29766939: {
            onChange: (e) => {
                setUsername(e.target.value);
            }
        },
        TextField38474616: {
            onChange: (e) => {
                setPassword(e.target.value);
            }
        },

        "Forgot Password":{
            onClick: () => {
                history('/passwordReset')
            }
        },

        "Sign Up":{
            onClick: () => {
                history('/terms')
            }
        }
    };

    return (
        <div className="App-header">
            <span> <LandscapeLogo/> </span>
            <span> <Login overrides={checkUsrPwd}/></span>
            <span> {incorrectPassword ? <LoginFailed/> : null}</span>
        </div>
    );
}

export default LoginPage;