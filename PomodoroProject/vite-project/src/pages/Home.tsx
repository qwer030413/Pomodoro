import { ReactElement, useEffect, useState } from "react";
import './pages.css';
import MiniTab from "../components/Tabs/animatedTabs";
import ToDoList from "../components/ToDoList/todolist";
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import toast from "react-hot-toast";
import { curuser } from "../components/Login/Logincomp";
export let a = "";
export default function Home() : ReactElement{
    const { width, height } = useWindowSize();
    
    return(
        <>
        
        <div className="homeContainer">
            <h1 className="UserNameDisplay">{'Welcome ' + curuser}</h1>
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