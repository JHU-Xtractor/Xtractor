

import React from 'react';
import {Terms} from '../ui-components';
import {ProductDetail} from '../ui-components';
 
const TermsPage = () => {
    return (
        <div className="Parent">
            <span class = 'App-header'> <Terms /> </span>
            <span class = 'App-header'> <ProductDetail /> </span>
        </div>
    );
}

export default TermsPage;