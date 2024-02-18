import { ReactElement, useEffect } from "react";
import LoginComp from "../components/Login/Logincomp";
import { useNavigate } from "react-router-dom";
export default function Login(): ReactElement{
    const navigate = useNavigate(); 

    useEffect(() => {
        const handleEsc = (event) => {
           if (event.key === 'Escape') {
            navigate("/")
          }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
      }, []);
    return(
        <LoginComp />
        );
    
}