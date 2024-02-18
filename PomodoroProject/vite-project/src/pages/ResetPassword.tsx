
import { useEffect } from "react";
import Reset from "../components/Login/resetPwComp";
import { useNavigate } from "react-router-dom";

export default function ResetPassword(){
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
        <h1>Forgot your password?</h1>
        <Reset />
        </>
        
    );
}