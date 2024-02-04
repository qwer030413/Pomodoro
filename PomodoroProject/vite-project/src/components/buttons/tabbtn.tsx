import React, { MouseEventHandler, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import { curemail } from '../Login/Logincomp';
import './buttons.css';

let signedIn = false;

export function checkSignedIn(value:boolean){
    signedIn = value;
}



function TabButton(click:MouseEventHandler,address:string, classname:string, text:string):ReactElement{
    return(
        <>
        {(text == "Login" ? 
        (
            (signedIn == true?
                (
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
                    >{text}</motion.button>

                ):
                (
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
                    >{text}</motion.button>
                    </Link>
                )
                )
            

            ):
        (
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
            >{text}</motion.button>
            </Link>

            ))}
        
        
        </>
        
        
    );
}
export{signedIn}
export default TabButton;