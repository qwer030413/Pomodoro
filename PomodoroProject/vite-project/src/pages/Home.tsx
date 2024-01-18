import { ReactElement } from "react";
import './pages.css';
import MiniTab from "../components/Tabs/animatedTabs";
import ToDoList from "../components/ToDoList/todolist";
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
export default function Home() : ReactElement{
    const { width, height } = useWindowSize()
    return(
        <>
        
        <div className="homeContainer">
        {/* {(congrats === 0? (
                        <Confetti
                    width={width}
                    height={height}
                    /> 
            ):
            (<div></div>)
            
            )} */}
            <div className="timerContainer">
                {/* <Timer /> */}
                <MiniTab />
            </div>
            <ToDoList />
            
        </div>
            
        
        
        </>
    
    
    );
}