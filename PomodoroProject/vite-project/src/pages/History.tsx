import { ReactElement, useEffect } from "react";
import AccountHistory from "../components/AccHistory/accHistory";
import AccountInformation from "../components/AccHistory/accInfo";
import { curemail } from "../components/Login/Logincomp";
import SignInButton from "../components/buttons/SignInButton";
import { useNavigate } from "react-router-dom";
import { getTotalHistorySec } from "../components/Tabs/animatedTabs";
export default function History(): ReactElement{
    const navigate = useNavigate(); 
    //esc
    useEffect(() => {
        const handleEsc = (event: { key: string; }) => {
           if (event.key === 'Escape') {
            navigate("/")
          }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
      }, []);
    function clicked(event: { preventDefault: () => void; }){
        navigate('/pages/Login.ts');
        event.preventDefault();
    }
    useEffect(() => {
      getTotalHistorySec();
      console.log("parent working")
    },[])
    return(
        <>
        <body>
            {(curemail.trim() != ''?
            (<><h1>Account</h1><AccountHistory seconds = {getTotalHistorySec()}/><AccountInformation /></>):
            (
                <>
                    <h1>Create an Account to track your time!</h1>
                    {SignInButton("Sign In", clicked )}
                </>
            

            
            )
            
            )}
            
            
            
             


        </body>
        </>
        
        );
    
}