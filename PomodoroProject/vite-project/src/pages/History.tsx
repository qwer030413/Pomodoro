import { ReactElement } from "react";
import AccountHistory from "../components/AccHistory/accHistory";
import AccountInformation from "../components/AccHistory/accInfo";
import { curemail } from "../components/Login/Logincomp";
export default function History(): ReactElement{

    return(
        <>
        <body>
            {(curemail.trim() != ''?
            (<><h1>Account History</h1><AccountHistory /><AccountInformation /></>):
            (<h1>Create an Account to track your time!</h1>
            
            )
            
            )}
            
            
            
             


        </body>
        </>
        
        );
    
}