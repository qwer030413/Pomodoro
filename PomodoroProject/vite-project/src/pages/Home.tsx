import { ReactElement, useEffect } from "react";
import './pages.css';
import MiniTab from "../components/Tabs/animatedTabs";
import ToDoList from "../components/ToDoList/todolist";
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import toast from "react-hot-toast";
export default function Home() : ReactElement{
    const { width, height } = useWindowSize();
    // useEffect(() => {
    //     // Dismiss all active toasts
    //     toast.dismiss()
    //    }, ["/"])
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