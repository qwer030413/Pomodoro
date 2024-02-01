import './login.css'
import SignInButton from '../buttons/SignInButton';
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion'
import Axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';


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
        else{
            toast.error("Please Enter Your Email And Passowrd", {id:"pwemailBlank!"});
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
                
                <input id = "emailval"type='email' className='SignIn' required= {true} onChange={(e) => settempEmail(e.target.value)} placeholder='Email'/>
                <input id = "pwval" type='text' className='SignIn' required = {true} onChange={(e) => settempPassword(e.target.value)}placeholder='Password'/>
                {SignInButton("", "/pages/Login.ts",SignUserIn,true, "Sign In")}
                
            </form>
            
            
        </div>
        {SignInButton("Dont have an account? Sign Up", "/SignUp",true,true, "Dont have an account? Sign Up")}


       
        </>
    );
}

