
import { useRecoilValue } from "recoil";
import authScreenAtom from "../atoms/authAtom";
import LoginCard from "../components/LoginCard";
import SignUpCard from "../components/SignUpCard";

const AuthPage = () => {
    //to read the value from atom
	const authScreenState = useRecoilValue(authScreenAtom);
    console.log(authScreenState,"atom")

	return (
        <>
        {authScreenState === 'login' ? <LoginCard/> : <SignUpCard />}
        </>
    )
};

export default AuthPage;
