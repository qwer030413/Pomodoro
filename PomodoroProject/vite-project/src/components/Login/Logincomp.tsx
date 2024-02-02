import './login.css'
import SignInButton from '../buttons/SignInButton';
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion'
import Axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

var curuser = '';
export default function LoginComp(){
    const [tempEmail, settempEmail] = useState("");
    const [tempPassword, settempPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [currentUser, setCurrentUser] = useState("");
    const [userSignedIn, setUserSignedIn] = useState(false);
    const navigate = useNavigate(); 

    
  
    function redirect(){
        navigate('/SignUp');
    }
    function SignUserIn(event: { preventDefault: () => void; }){
        event.preventDefault();
        
        if((document.getElementById("emailval") as HTMLInputElement).value.trim() != '' && (document.getElementById("pwval") as HTMLInputElement).value.trim() != ''){
            
            
            Axios.post("http://localhost:5172/login", {
                email: tempEmail,
                password: tempPassword
            }).then(res => {
                setCurrentUser(res.data[0].userName);
                curuser = res.data[0].userName;
                
                navigate('/')
                toast.success("Successfully Logged In!!", {id:"loginSuccess!"});
                
                
                
            }).catch(err => {
                    toast.error("Account does not exist...", {id:"logindne!"});
                
            });
            
            (document.getElementById("emailval") as HTMLInputElement).value = "";
            (document.getElementById("pwval") as HTMLInputElement).value = "";
            
        }

        else{
            toast.error("Please Enter Your Email And Passowrd", {id:"pwemailBlank!"});
        }
        
        
    }
    function setCurUser(user:string){
        curuser = user;
    }
    
    

    return(
        <>
        <div className="LoginContainer" onSubmit={SignUserIn}>
            <h1 className='loginTitle'>Login</h1>
            <form className='loginForm'>
                
                <input id = "emailval"type='email' className='SignIn' required= {true} onChange={(e) => settempEmail(e.target.value)} placeholder='Email'/>
                <input id = "pwval" type='password' className='SignIn' required = {true} onChange={(e) => settempPassword(e.target.value)}placeholder='Password'/>
                {SignInButton("Sign In",SignUserIn)}
                
            </form>
            
            
        </div>
        {SignInButton("Dont have an account? Sign Up",redirect)}


       
        </>
    );
}
export {curuser};


