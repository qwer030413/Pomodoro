import SignInButton from "../buttons/SignInButton";
import './login.css'
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion'
import Axios from 'axios'
import toast from "react-hot-toast";


export default function SignUpComp(){

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("")
    const [signUpSuccess, setSignUpSuccess] = useState(false);
    const [Name, setName] = useState("");


    function SignUserIn(event: { preventDefault: () => void; }){
        if((document.getElementById("emailval") as HTMLInputElement).value.trim() != '' &&
        (document.getElementById("pwval") as HTMLInputElement).value.trim() != '' && 
        (document.getElementById("repeatpw") as HTMLInputElement).value.trim() != '' &&
        (document.getElementById("UserName") as HTMLInputElement).value.trim() != ''
        ){

            if(Password != secondPassword)
            {
                toast.error("Password do not match!", {id:"pwdontMatch!"});
            }
            else{
                setEmail(Email);
                setPassword(Password);
                Axios.post("http://localhost:5172/signUp", {
                    newEmail: Email,
                    newPassword: Password,
                    newName: Name
                });
                (document.getElementById("emailval") as HTMLInputElement).value = "";
                (document.getElementById("pwval") as HTMLInputElement).value = "";
                (document.getElementById("repeatpw") as HTMLInputElement).value = "";
                (document.getElementById("UserName") as HTMLInputElement).value = "";
                
                setSignUpSuccess(true);
                toast.success("Account Created!", {id:"accreated!"});
            }
        }
        else if(signUpSuccess){
            toast.success("Going To Sign In Page", {id:"redirect!"});
        }
        else{
            toast.error("Enter your Email And Password!", {id:"enterep!"});
        }
        console.log(signUpSuccess)
        
        
       
    }
    return(

        <>
         <div className="SignUpContainer" onSubmit={SignUserIn}>
            <h1 className='loginTitle'>Sign Up</h1>
            <form className='loginForm'>
                <input id = "UserName"type='text' className='SignIn' required= {true} onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                <input id = "emailval"type='email' className='SignIn' required= {true} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                <input id = "pwval" type='text' className='SignIn' required = {true} onChange={(e) => setPassword(e.target.value)}placeholder="Password"/>
                <input id = "repeatpw" type='text' className='SignIn' required = {true} onChange={(e) => setSecondPassword(e.target.value)} placeholder="Repeat Password"/>
                {SignInButton("Sign Up", "/pages/Login.ts", SignUserIn, signUpSuccess, "Go To Sign In")}
                
            </form>
            
            
        </div>
        </>
    );
}