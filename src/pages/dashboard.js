import React, { useState,useEffect } from 'react';
import "../App.css";
import {getFile} from '../resources/s3';
import NavBar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [profilePictureURL, setProfilePictureURL] = useState(null);
    const history = useNavigate();
    let token = localStorage.getItem('token');

    let username = sessionStorage.getItem('username');
    let profilePictureFile = username + "/profilePicture";

    useEffect(() => {
        if (!token) {
            history('/pageNotfound');
        }

        const getProfilePicture = async () => {
            const profilePictureURL = await getFile(profilePictureFile);
            sessionStorage.setItem('profilePicture', profilePictureURL);
            setProfilePictureURL(profilePictureURL);
        };
        getProfilePicture();
    }, [profilePictureFile]);

    return (
        <NavBar className=".navbar-left" username={username} profilePicture={profilePictureURL}></NavBar>
    );
}

export default Dashboard;