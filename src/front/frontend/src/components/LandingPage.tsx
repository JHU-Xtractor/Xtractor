import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    let navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/application');
        }, 5000);
        
        return () => clearTimeout(timer);

    }, [navigate]);

    return (
        <div>
            <h1> Landing Page </h1>
        </div>
    )

}

export default LandingPage;