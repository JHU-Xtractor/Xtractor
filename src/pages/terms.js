

import React from 'react';
import Terms from '../components/Terms';
import {useNavigate} from 'react-router-dom';

//css styling
 
const TermsPage = () => {


    const history = useNavigate();
    const onAcknowledge = () => {
        history('/signup');
    }

    return (
        <div className="App-header">
            <Terms onClick={onAcknowledge}/>
        </div>
    );
}

export default TermsPage;