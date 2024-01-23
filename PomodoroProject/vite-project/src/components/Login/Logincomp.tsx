import './login.css'
import SignInButton from '../buttons/SignInButton';
import { useState } from 'react';
import {motion} from 'framer-motion'

export default function LoginComp(){
    const [tempEmail, settempEmail] = useState("");
    const [tempPassword, settempPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    function SignUserIn(event: { preventDefault: () => void; }){
        
        if((document.getElementById("emailval") as HTMLInputElement).value.trim() != '' || (document.getElementById("pwval") as HTMLInputElement).value.trim() != ''){
            (document.getElementById("emailval") as HTMLInputElement).value = "";
            (document.getElementById("pwval") as HTMLInputElement).value = "";
            setEmail(tempEmail);
            setPassword(tempPassword);
            event.preventDefault();
        }
        
       
    }


    return(
        <>
        <div className="LoginContainer" onSubmit={SignUserIn}>
            <h1 className='loginTitle'>Login</h1>
            <form className='loginForm'>
                
                <input id = "emailval"type='email' className='SignIn' required= {true} onChange={(e) => settempEmail(e.target.value)}/>
                <input id = "pwval" type='text' className='SignIn' required = {true} onChange={(e) => settempPassword(e.target.value)}/>
                <SignInButton />
            </form>
            
            
        </div>
        </>
    );
}

