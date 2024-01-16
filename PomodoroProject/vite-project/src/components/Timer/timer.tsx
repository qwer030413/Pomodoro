import { ReactElement } from "react";
import { useState, useEffect } from "react";
import './timer.css';
import { CircularProgressbar , buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { FaPauseCircle } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { FaArrowRotateLeft } from "react-icons/fa6";


export default function Timer(hr:number,min:number,sec:number): ReactElement{
    
    const [seconds, setSeconds] = useState(sec);
    const [minutes, setMinutes] = useState(min);
    const [hours, setHours] = useState(hr);
    const [start, setStart] = useState(false);
    const [id, setId] = useState(0);

    let totalsec = sec + (min * 60) + (hr * 3600);
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
        setSeconds(sec);
        setMinutes(min);
        setHours(hr);
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
                    <button className="timectrl"onClick={() => setStart(false)}><FaPauseCircle /></button>
                    <button className="timectrl"onClick={() => setStart(true)}><FaCirclePlay /></button>
                    <button className="timectrl"onClick={reset}><FaArrowRotateLeft /></button>
                </div>
            </CircularProgressbarWithChildren>
            
        </div>
        
        
    );
}
