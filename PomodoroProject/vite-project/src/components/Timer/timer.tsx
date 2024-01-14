import { ReactElement } from "react";
import { useState, useEffect } from "react";
import './timer.css';
export default function Timer(): ReactElement{
    const [timeleft, setTimeLeft] = useState(100);
    const [start, setStart] = useState(false);
    const [id, setId] = useState(0);
    useEffect(() => {
        let intervalID;
        if(start){
            intervalID = setInterval(() => {
                setTimeLeft(timeleft => timeleft - 1);
            }, 1000);
            setId(intervalID);
        }
        else{
            
            clearInterval(id);
        }
    }, [start])
    
    const reset = () => {
        setTimeLeft(100);
    }
    

    return(
        <div className="timer">
            <h1>{timeleft}</h1>
            <div className="startstop">
                <button onClick={() => setStart(true)}>start</button>
                <button onClick={() => setStart(false)}>stop</button>
                <button onClick={reset}>reset</button>
            </div>
            
            
        </div>
        
        
    );
}
