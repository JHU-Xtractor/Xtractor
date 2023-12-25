import React, { useState,useEffect } from 'react';
import { Button, Text, TextField, Divider,Alert} from "@aws-amplify/ui-react";
import { checkIfPasswordsMatch,checkValidPassword,modifyUserPassword } from '../resources/congito';



export default function SettingsComp({props}) {
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [passwordSet, setPasswordSet] = useState(false);
    const handlePasswordChange = async () => {

        //reset
        setPasswordError(false);
        setPasswordSet(false);

        //first check if its a valid password
        if(!checkValidPassword(newPassword)){
            setPasswordError(true);
            return;
        }
        //then check if the passwords match
        if(!checkIfPasswordsMatch(newPassword, confirmNewPassword)){
            setPasswordError(true);
            return;
        }
        //
        try {
            await modifyUserPassword(newPassword);
            setPasswordSet(true);
        } catch (error) {
            console.error(error);
            // Handle error here
        }
    }

    return(
        <div style={{ 
            display: 'flex', 
            alignItems: 'flex-start', 
            justifyContent: 'flex-start', 
            flexDirection: "column", // Stack children vertically
            alignContent: 'flex-start' // Aligns children along the cross axis
        }}>
            <Text
                marginTop="10vh"
                marginLeft={"100px"}
                fontWeight={500}
                color="rgba(66,106,220)"
                width="120px"
                height="50px"
                display="block"
                fontSize={"30px"}
                gap="unset"
                alignItems="left"
                justifyContent="bottom"
                overflow="hidden"
                children= "Settings"
            >
            </Text>
            <Text
                marginTop="10px"
                marginLeft={"105px"}
                fontWeight={500}
                color="rgba(0,0,0)"
                width="200px"
                height="30px"
                display="block"
                fontSize={"20px"}
                gap="unset"
                alignItems="left"
                justifyContent="bottom"
                overflow="hidden"
                children= "Account Information"
            >
            </Text>
            <Text
                marginTop="10px"
                marginLeft={"100px"}
                fontWeight={500}
                color="rgba(0,0,0)"
                width="250px"
                height="20px"
                display="block"
                fontSize={"12px"}
                gap="unset"
                alignItems="left"
                justifyContent="bottom"
                overflow="hidden"
                children= "Note, this information cannot be changed."
            >
            </Text>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Text
                    marginTop="10px"
                    marginLeft={"108px"}
                    fontWeight={500}
                    color="rgba(0,0,0)"
                    width="80px"
                    height="20px"
                    display="block"
                    fontSize={"14px"}
                    gap="unset"
                    alignItems="left"
                    justifyContent="bottom"
                    overflow="hidden"
                >
                    Username: 
                </Text>
                <Text
                    marginTop="10px"
                    fontWeight={500}
                    color="rgba(66,106,220)"
                    width="200px"
                    height="20px"
                    display="block"
                    fontSize={"14px"}
                    gap="unset"
                    alignItems="left"
                    justifyContent="bottom"
                    overflow="hidden"
                >
                    {props[2].Value}
                </Text>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Text
                    marginLeft={"113px"}
                    marginTop="10px"
                    fontWeight={500}
                    color="rgba(0,0,0)"
                    width="40px"
                    height="20px"
                    display="block"
                    fontSize={"14px"}
                    gap="unset"
                    alignItems="left"
                    justifyContent="bottom"
                    overflow="hidden"
                >
                    Email: 
                </Text>
                <Text
                    marginTop="10px"
                    fontWeight={500}
                    color="rgba(66,106,220)"
                    width="200px"
                    height="20px"
                    display="block"
                    fontSize={"14px"}
                    gap="unset"
                    alignItems="left"
                    justifyContent="bottom"
                    overflow="hidden"
                >
                    {props[4].Value}
                </Text>
            </div>
            <Divider marginTop="20px" marginLeft={"110px"} width="400px" height="1px" color="rgba(0,0,0)" />

            <Text
                marginTop="10px"
                marginLeft={"100px"}
                fontWeight={500}
                color="rgba(0,0,0)"
                width="180px"
                height="34px"
                display="block"
                fontSize={"20px"}
                gap="unset"
                alignItems="left"
                justifyContent="bottom"
                overflow="hidden"
                children= "Change Pasword"
            >
            </Text>
            <Text
                marginLeft={"117px"}
                fontWeight={500}
                color="rgba(0,0,0)"
                width="500px"
                height="50px"
                display="block"
                fontSize={"15px"}
                gap="unset"
                alignItems="left"
                justifyContent="bottom"
                overflow="hidden"
                children= "Password must be at least 8 characters long containing at least one number, one lowercase letter, one uppercase letter, and one special character."
                style={{ textAlign: 'left' }}
            >
            </Text>
            <TextField
                type = "password"
                onChange={e => setNewPassword(e.target.value)}
                marginTop="0px"
                marginLeft={"115px"}
                fontWeight={500}
                color="rgba(0,0,0)"
                width="400px"
                height="50px"
                display="block"
                fontSize={"20px"}
                gap="unset"
                alignItems="left"
                justifyContent="bottom"
                overflow="hidden"
                placeholder="New Password"
                style={{ color: '#aaa' , textAlign: 'left'}}
            />
            <TextField
                type='password'
                onChange={e => setConfirmNewPassword(e.target.value)}
                marginTop="0px"
                marginLeft={"115px"}
                fontWeight={500}
                color="rgba(0,0,0)"
                width="400px"
                height="50px"
                display="block"
                fontSize={"20px"}
                gap="unset"
                alignItems="left"
                justifyContent="bottom"
                overflow="hidden"
                placeholder="Confirm New Password"
                style={{ color: '#aaa' , textAlign: 'left'}}
            />
            <Button
                style = {{marginTop: "5px"}}
                marginLeft={"115px"}
                width="400px"
                height="35px"
                shrink="0"
                size="large"
                isDisabled={false}
                variation="primary"
                children="Change Password"
                onClick={handlePasswordChange}
            />

            <div style={{ marginLeft: '115px', width: '400px', marginTop: '20px' }}>
                {passwordError && <Alert variation="error" dismissible={true} children="Password does not meet requirements or passwords do not match."/>}
                {passwordSet && <Alert variation="success" dismissible={true} children="Password successfully changed."/>}
            </div>
      
        </div>
    );
}