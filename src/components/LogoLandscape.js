import React from 'react';

function LandscapeLogo() {

    const url = "https://xtractor-web.s3.amazonaws.com/Xtractor_Landscape.PNG"
    return (
        <div className="logo-landscape">
            <img src={url} alt="Xtractor Logo" style={{ width: '600', height: '100px' }} />
        </div>
    );
}

export default LandscapeLogo;