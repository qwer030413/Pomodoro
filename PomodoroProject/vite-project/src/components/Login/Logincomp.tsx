import './login.css'
import SignInButton from '../buttons/SignInButton';
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion'
import Axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import { checkSignedIn } from '../buttons/tabbtn';
import TabButton from '../buttons/tabbtn';
import { BiSolidShow } from "react-icons/bi";
import { updateData } from '../Tabs/animatedTabs';

var curuser = '';
var curemail = '';
export function setCurUser(user: string, email:string){
    curuser = user;
    curemail = email;
    
}

export default function LoginComp(){
    const [tempEmail, settempEmail] = useState("");
    const [tempPassword, settempPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [currentUser, setCurrentUser] = useState("");
    const [userSignedIn, setUserSignedIn] = useState(false);
    const navigate = useNavigate(); 

    

  
    function redirect(){
        navigate("/SignUp");
    }
    function forgotPW(){
        navigate("/PwReset")
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
                curemail = res.data[0].email;
                navigate('/')
                toast.success("Successfully Logged In!!", {id:"loginSuccess!"});
                checkSignedIn(true);
                updateData();
                
                
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
   
    
    

    return(
        <>
        <div className="LoginContainer" onSubmit={SignUserIn}>
            <h1 className='loginTitle'>Login</h1>
            <form className='loginForm'>
                
                <input id = "emailval"type='email' className='SignIn' required= {true} onChange={(e) => settempEmail(e.target.value)} placeholder='Email'/>
                <input id = "pwval" type={showPassword? "text":"password"} className='SignIn' required = {true} onChange={(e) => settempPassword(e.target.value)}placeholder='Password' />
                {/* <BiSolidShow className='showPW'/> */}

                {SignInButton("Sign In",SignUserIn)}
                
                
            </form>
            
            
        </div>
        {SignInButton("Don't have an account? Sign Up",redirect)}
        {SignInButton("Reset your Password",forgotPW)}
        


       
        </>
    );
}
export {curuser,curemail};


