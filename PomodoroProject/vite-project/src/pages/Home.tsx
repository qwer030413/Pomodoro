import { ReactElement } from "react";
import './pages.css';
import MiniTab from "../components/Tabs/animatedTabs";
import ToDoList from "../components/ToDoList/todolist";
export default function Home() : ReactElement{
    
    return(
        <>
        <div className="homeContainer">
            <div className="timerContainer">
                {/* <Timer /> */}
                <MiniTab />
            </div>
            <ToDoList />
            
        </div>
            
        
        
        </>
    
    
    );
}