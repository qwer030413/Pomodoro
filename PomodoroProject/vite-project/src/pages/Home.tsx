import { ReactElement } from "react";
import Timer from "../components/Timer/timer";
import './pages.css';
import MiniTab from "../components/Tabs/animatedTabs";
import Minitab from "../components/minitab/minitab";
export default function Home() : ReactElement{
    
    return(
        <>
            <div className="timerContainer">
                {/* <Timer /> */}
                <MiniTab />
            </div>
            
        
        
        </>
    
    
    );
}