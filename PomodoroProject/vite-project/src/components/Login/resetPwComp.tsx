import "./login.css"
import SignInButton from "../buttons/SignInButton";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export default function Reset(){
    const[checkEmail, setCheckEmail] = useState("");
    const[checkPw, setCheckPw] = useState("");
    const[newPw, setNewPw] = useState("")
    const[newPw2, setNewPw2] = useState("")
    const navigate = useNavigate(); 

    function resetpw(event: { preventDefault: () => void; }){
        event.preventDefault();
        
        if(checkEmail.trim() != '' && checkPw.trim() != '' && newPw.trim() != '' && newPw2.trim() != ''){
            
            if(newPw != newPw2)
            {
                toast.error("Password do not match!", {id:"pwdontMatch!reset"});
            }
            else{
                Axios.post("http://localhost:5172/resetPw", {
                    email: checkEmail,
                    password: checkPw,
                    newPassWord: newPw
                }).then(res => {
                    if(res.data.affectedRows > 0)
                    {
                        navigate('/pages/Login.ts')
                        toast.success("Resetted Password!", {id:"resetsuccess!"});
                        console.log(res.data)
                    }
                    else{
                        toast.error("Account does not exist...", {id:"logindne!"});
                    }
                    
                        
                    
                    
                }).catch(err => {
                        toast.error("Account does not exist...", {id:"logindne!"});
                        console.log(err.data)
                });
            }
            
            
            // (document.getElementById("emailval") as HTMLInputElement).value = "";
            // (document.getElementById("pwval") as HTMLInputElement).value = "";
            
        }

        else{
            toast.error("Please Enter All The Information", {id:"resetpwemailblank!"});
        }
        
        
    }
    return(
        <>
        <div className="resetContainer">
            <h1 className="loginTitle">Reset Password</h1>
            <input id = "EmailofReset" placeholder="Email" className="SignIn" required = {true} onChange={(e) => setCheckEmail(e.target.value)}/>
            <input id = "newPwrReset2" placeholder="Current Password" className="SignIn" required = {true} onChange={(e) => setCheckPw(e.target.value)}/>
            <input id = "newPwrReset" placeholder="New Password" className="SignIn" required = {true} onChange={(e) => setNewPw(e.target.value)}/>
            <input id = "newPwrReset2" placeholder="Repeat New Password" className="SignIn" required = {true} onChange={(e) => setNewPw2(e.target.value)}/>
            {SignInButton("Reset",resetpw)}
        </div>
        </>
    );
}