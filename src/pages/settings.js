import React, { useState,useEffect } from 'react';
import "../App.css";
import {getFile} from '../resources/s3';
import NavBar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import SettingsComp from '../components/SettingsComp';
import { getUserInfo } from '../resources/congito';
import DropZoneUpload from '../components/DropZoneUpload';

function Settings() {
    const [profilePictureURL, setProfilePictureURL] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const history = useNavigate();
    let token = localStorage.getItem('token');

    let username = sessionStorage.getItem('username');
    let profilePictureFile = username + "/profilePicture";


    useEffect(() => {
        if (!token) {
            history('/pageNotfound');
        }

        const getProfilePicture = async () => {
            let profilePictureURL = await getFile(profilePictureFile);
            setProfilePictureURL(profilePictureURL);
            console.log(userInfo);
        };

        const fetchUserInfo = async () => {
            let userInfo = await getUserInfo();
            setUserInfo(userInfo.message);
            console.log(userInfo.message);
        }
        getProfilePicture();
        fetchUserInfo();
    }, [profilePictureFile]);

    return (
        <div className='container'>
        <NavBar className="navbar-left" username={username} profilePicture={profilePictureURL}></NavBar>
        <div className=".bodyWithBar">
        <div className = "leftHalf">
            {userInfo && <SettingsComp props={userInfo}></SettingsComp>}
        <div/>
        <div className = "rightHalf">
            <DropZoneUpload></DropZoneUpload>
        </div>
        </div>
        </div>  
        </div>
    );
}

export default Settings;