import { ReactElement } from "react";
import { useState, useEffect } from "react";
import './timer.css';
import { CircularProgressbar , buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function Timer(): ReactElement{
    let s = 10;
    let m = 0;
    let h = 0;
    const [seconds, setSeconds] = useState(s);
    const [minutes, setMinutes] = useState(m);
    const [hours, setHours] = useState(h);
    const [start, setStart] = useState(false);
    const [id, setId] = useState(0);

    let totalsec = s + (m * 60) + (h * 3600);
    let remainsec = seconds + (minutes * 60) + (hours * 3600);
    let percentage = (remainsec / totalsec) * 100;
    
    useEffect(() => {
        let intervalID;
        if(start){
            console.log("clicked");
            console.log(start);
            intervalID = setInterval(() => {
                setSeconds(seconds => seconds - 1);
                

            }, 1000);
            setId(intervalID);
        }
        else{
            console.log(start);
            clearInterval(id);
        }
    }, [start])
    
    const reset = () => {
        console.log(start);
        setSeconds(s);
        setMinutes(m);
        setHours(h);
        clearInterval(id);
        setStart(false);
    }
    //1:00:1
    //1:1:1
    //0:1:1
    if(seconds == 0 && minutes == 0 && hours == 0)
    {
        clearInterval(id);
    }
    else{
        if(seconds < 0 && minutes > 0)
        {
            
            setSeconds(59);
            setMinutes(minutes => minutes - 1);

        }
        else if (minutes < 0 && hours > 0)
        {
            setMinutes(59);
            setHours(hours => hours - 1);
        }
       else if(seconds < 0 && minutes == 0 && hours > 0)
       {
            setHours(hours => hours - 1);
            setMinutes(59);
            setSeconds(59);
       }
    }
    
    // else if(seconds < 0 && minutes == 0 && hours > 0)
    // {
    //     setMinutes(59);
    //     setHours(hours => hours - 1);
    // }

    

    return(
        <div className="timer"  style={{ width: 400, height: 400 }}>
            
            <CircularProgressbarWithChildren value={percentage}>
                <h1>{hours < 10? "0" + hours:hours}:{minutes< 10? "0" + minutes:minutes}:{seconds< 10? "0" + seconds:seconds}</h1>
                <div className="startstop">
                    <button onClick={() => setStart(true)}>start</button>
                    <button onClick={() => setStart(false)}>stop</button>
                    <button onClick={reset}>reset</button>
                </div>
            </CircularProgressbarWithChildren>
            
        </div>
        
        
    );
}
