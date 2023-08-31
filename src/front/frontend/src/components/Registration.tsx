import AuthLayout from './AuthLayout';

interface RegistrationProps {
    setUser: (user: object | null) => void;
    user: object | null;
    setIsHuman: (isHuman: boolean) => void;
}

const Registration = ({user, setUser, setIsHuman}: RegistrationProps) => {
    return (
        <AuthLayout user={user} setUser={setUser} setIsHuman={setIsHuman} signIn={false}/>
    )
}

export default Registration;