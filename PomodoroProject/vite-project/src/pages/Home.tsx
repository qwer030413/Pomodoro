import { ReactElement } from "react";
import Timer from "../components/Timer/timer";
import './pages.css';
import Minitab from "../components/minitab/minitab";
export default function Home() : ReactElement{
    
    return(
        <>
            {/* <h1>Home</h1> */}
            <div className="timerContainer">
                {/* <Minitab /> */}
                <Timer />
            </div>
            
        
        
        </>
    
    
    );
}