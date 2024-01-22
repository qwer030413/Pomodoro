import { ReactElement } from "react";
import { useState, useEffect } from "react";
import './timer.css';
import { CircularProgressbar , buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { FaPauseCircle } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { FaArrowRotateLeft } from "react-icons/fa6";
import {motion} from 'framer-motion';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
import FlipNumbers from 'react-flip-numbers';

// export let congrats = 0;

export default function Timer(hr:number,min:number,sec:number): ReactElement{
   
    
    const [seconds, setSeconds] = useState(sec);
    const [minutes, setMinutes] = useState(min);
    const [hours, setHours] = useState(hr);
    const [start, setStart] = useState(false);
    const [id, setId] = useState(0);
    
    let totalsec = Number(sec) + (min * 60) + (hr * 3600);
    let remainsec = Number(seconds) + (minutes * 60) + (hours * 3600);
    let percentage = (remainsec / totalsec) * 100;
    
    
    useEffect(() => {
        let intervalID;
        if(start){
            intervalID = setInterval(() => {
                setSeconds(seconds => seconds - 1);
                

            }, 1000);
            setId(intervalID);
        }
        else{
            clearInterval(id);
        }
    }, [start])
    
    const reset = () => {
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
    const { width, height } = useWindowSize()
//   if(remainsec == 0)
//   {
//     const { width, height } = useWindowSize()
//     return (
//         <Confetti
//         width={width}
//         height={height}
//         /> 
//     );
//   }

    

    return(
        <div className="timer"  style={{ width: 400, height: 400 }}>
             
            
            <CircularProgressbarWithChildren value={percentage}
             styles={buildStyles({

                

             })}
            >
                <h1>{hours < 10? "0" + hours:hours}:{minutes< 10? "0" + minutes:minutes}:{seconds< 10? "0" + seconds:seconds}</h1> 
                <div className="startstop">
                    <motion.div 
                    whileHover={{ 
                        scale: 1.2,
                        textShadow: "0px 0px 8px rgb(255, 255, 255)",
                     }}
                     whileTap={{
                        scale:1,
                     }}
                     transition={{ type: "spring", stiffness: 400, damping: 17 }}

                    className="timectrl"onClick={() => setStart(false)}><FaPauseCircle /></motion.div>
                    <motion.div 
                    whileHover={{ 
                        scale: 1.2,
                        textShadow: "0px 0px 8px rgb(255, 255, 255)",
                     }}
                     whileTap={{
                        scale:1,
                     }}
                     transition={{ type: "spring", stiffness: 400, damping: 17 }}

                    className="timectrl"onClick={() => setStart(true)}><FaCirclePlay /></motion.div>
                    <motion.div 
                    whileHover={{ 
                        scale: 1.2,
                        textShadow: "0px 0px 8px rgb(255, 255, 255)",
                     }}
                     whileTap={{
                        scale:1,
                     }}
                     transition={{ type: "spring", stiffness: 400, damping: 17 }}

                    className="timectrl"onClick={reset}><FaArrowRotateLeft /></motion.div>
                </div>
            </CircularProgressbarWithChildren>
            
        </div>
        
        
    );
}
