import './login.css'
import SignInButton from '../buttons/SignInButton';
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion'
import Axios from 'axios'
let signedIn = false;

export default function LoginComp(){
    const [tempEmail, settempEmail] = useState("");
    const [tempPassword, settempPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [currentUser, setCurrentUser] = useState("");
    const [userSignedIn, setUserSignedIn] = useState(false);


    function SignUserIn(event: { preventDefault: () => void; }){
        if((document.getElementById("emailval") as HTMLInputElement).value.trim() != '' || (document.getElementById("pwval") as HTMLInputElement).value.trim() != ''){
            setEmail(tempEmail);
            setPassword(tempPassword);
            Axios.post("http://localhost:5172/login", {
                email: tempEmail,
                password: tempPassword
            });
            setCurrentUser(tempEmail);
            (document.getElementById("emailval") as HTMLInputElement).value = "";
            (document.getElementById("pwval") as HTMLInputElement).value = "";
            event.preventDefault();
            console.log(currentUser)
        }
        
       
    }
    
    useEffect(() => {
        console.log(currentUser)
      },[currentUser]);

    return(
        <>
        <div className="LoginContainer" onSubmit={SignUserIn}>
            <h1 className='loginTitle'>Login</h1>
            <form className='loginForm'>
                
                <input id = "emailval"type='email' className='SignIn' required= {true} onChange={(e) => settempEmail(e.target.value)}/>
                <input id = "pwval" type='text' className='SignIn' required = {true} onChange={(e) => settempPassword(e.target.value)}/>
                {SignInButton(SignUserIn, "Sign In")}
                
            </form>
            
            
        </div>
        {SignInButton(SignUserIn, "Dont have an account? Sign Up")}
        </>
    );
}

