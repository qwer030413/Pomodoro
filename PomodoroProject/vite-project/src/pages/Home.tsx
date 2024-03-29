import { ReactElement, useEffect, useState } from "react";
import './pages.css';
import MiniTab from "../components/Tabs/animatedTabs";
import ToDoList from "../components/ToDoList/todolist";
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import toast from "react-hot-toast";
import { curuser } from "../components/Login/Logincomp";
import { curemail } from "../components/Login/Logincomp";
import { signedIn } from "../components/buttons/tabbtn";
import { setButtonText } from "../components/buttons/tabbtn";
import { buttontxt } from "../components/buttons/tabbtn";
import { setTest } from "../components/buttons/tabbtn";
import { useNavigate } from "react-router-dom";

export default function Home() : ReactElement{
    const { width, height } = useWindowSize();
    const navigate = useNavigate(); 
    console.log(signedIn)
    setButtonText("Log Out")
    useEffect(() => {
        setTest(100)
    })
    
    return(
        <>
        
        <div className="homeContainer">
            <h1 className="UserNameDisplay">{curemail != ''? ("Welcome " + curuser ): "Welcome Guest"}</h1>
        {/* {(congrats === 0? (
                        <Confetti
                    width={width}
                    height={height}
                    /> 
            ):
            (<div></div>)
            
            )} */}
            <div className="timerContainer">
                
                <MiniTab />
            </div>
            <ToDoList />
            
        </div>
            
        
        
        </>
    
    
    );
}