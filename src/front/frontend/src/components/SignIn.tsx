
import AuthLayout from './AuthLayout';


interface SignInProps {
        setUser: (user: object | null) => void;
        user: object | null;
        setIsHuman: (isHuman: boolean) => void;
}

const SignIn = ({user, setUser, setIsHuman}: SignInProps) => {
    return (
        <AuthLayout user={user} setUser={setUser} setIsHuman={setIsHuman} signIn={true}/>
    )
}

export default SignIn;