import '../App.css';
import { useNavigate, Outlet } from 'react-router-dom';


interface ApplicationProps {
    setUser: (user: object | null) => void;
    user: object | null;
}

const ApplicationLayout = ({user, setUser}: ApplicationProps) => {
    const navigate = useNavigate();

    const handleSignout = () => {
        setUser(null);
    }

    return (
        //TODO: <Navbar user={user} setUser={user}/>
        <Outlet />
        //TODO: <Footer />
    )
}

export default ApplicationLayout;