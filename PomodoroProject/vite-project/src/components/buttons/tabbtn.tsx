import React, { MouseEventHandler, ReactElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import { curemail } from '../Login/Logincomp';
import './buttons.css';
import { MdAccountCircle } from "react-icons/md";
import ReactDOM, { render } from 'react-dom';
import { createRoot } from 'react-dom/client';

let signedIn = false;
let buttontxt = "";
let testcount = 0;
export function checkSignedIn(value:boolean){
    signedIn = value;
}
export function setButtonText(value:string)
{
    buttontxt = value;
}
export function setTest(value:number)
{
    
    testcount = 100
}

function TabButton(click:MouseEventHandler,address:string, classname:string, text:any){
    const[LoggedIn, setLoggedIn] = useState(false)
    const[count, setCount] = useState(testcount)
    useEffect(()=>{
        setLoggedIn(signedIn)
    }, [signedIn])
    if(text == "Login" && curemail.trim() != '')
    {
        return(
        <motion.button
            id = "root"
            className={classname}
            whileHover={{ 
                y:-10,

                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                
            }}
            whileTap={{
            scale:0.9,
                
            }}
            transition={{duration:0.5, type: "spring", stiffness: 600, damping: 13}}
            onClick={click}
            >Log Out</motion.button>
    );
    }
    else{
        return(
            <Link to ={address}>
            <motion.button
            className={classname}
            whileHover={{ 
                y:-10,

                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                
            }}
            whileTap={{
            scale:0.9,
                
            }}
            transition={{duration:0.5, type: "spring", stiffness: 600, damping: 13}}
            onClick={click}
            >{text}
            </motion.button>
            </Link>
        );
            
        
    }
    return(

        <button onClick={() => setCount(count => count + 1)}>{count}</button>
    )
}
export{signedIn, buttontxt}
export default TabButton;