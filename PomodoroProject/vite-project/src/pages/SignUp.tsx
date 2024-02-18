
import { useEffect } from "react";
import SignUpComp from "../components/Login/SignUpcomp";
import { useNavigate } from "react-router-dom";

export default function SignUp(){
    const navigate = useNavigate(); 
    useEffect(() => {
        const handleEsc = (event) => {
           if (event.key === 'Escape') {
            navigate("/pages/Login.ts")
          }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
      }, []);
    return(
        <>
        <h1>Create A New Account!</h1>
            <SignUpComp />
        </>
    );
}