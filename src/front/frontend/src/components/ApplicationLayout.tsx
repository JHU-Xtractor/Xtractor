import '../App.css';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


interface ApplicationProps {
    setAuth: (authVal: boolean) => void;
    isAuth: boolean;
}

const ApplicationLayout = ({setAuth, isAuth}: ApplicationProps) => {
    const navigate = useNavigate();

    const handleSignout = () => {
        setAuth(false);
    }

    return (
        <div> 
            <h1> Application Layout </h1>
            {isAuth ? 
                <Button onClick={handleSignout} > Sign Out </Button> : 
                <Button onClick={() => navigate('/')} > Sign In </Button>
            }
        </div>
    )
}

export default ApplicationLayout;