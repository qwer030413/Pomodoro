import { ReactElement, useRef } from "react";
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
import Axios from 'axios'
import { curemail } from "../Login/Logincomp";
import { secChange } from "../Tabs/animatedTabs";
import { setSecChange } from "../Tabs/animatedTabs";

let totalHistorySec = 0;
export default function Timer(hr:number,min:number,sec:number): ReactElement{
   
    
    const [seconds, setSeconds] = useState(sec);
    const [minutes, setMinutes] = useState(min);
    const [hours, setHours] = useState(hr);
    const [secHistory, setSecHistory] = useState(0);
    const [minHistory, setMinHistory] = useState(0);
    const [hrHistory, setHrHistory] = useState(0);
    const [start, setStart] = useState(false);
    const [id, setId] = useState(0);
    let totalsec = Number(sec) + (min * 60) + (hr * 3600);
    let remainsec = Number(seconds) + (minutes * 60) + (hours * 3600);
    let percentage = (remainsec / totalsec) * 100;
    const initialized = useRef(false)
    useEffect(() => {
        let intervalID;
        
        if(start == true){
            intervalID = setInterval(() => {
                setSeconds(seconds => seconds - 1);
                // setSecHistory(secHistory => secHistory + 1) 
                // setSecChange();
            }, 1000);
            setId(intervalID);
        }
        else{
            clearInterval(id);
        }
        
    }, [start])
    function timeout(ms:number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    let counter = 0;
    useEffect(() => {
        
    if (!initialized.current) {
            initialized.current = true
            let ignore = false;
            
            async function fetchData(){
                await timeout(5000);
                if(!ignore)
                {
                    Axios.post("http://localhost:5172/History", {
                    email: curemail
                    }).then(res => {
                        totalHistorySec = res.data[0].sec;
                        console.log(totalHistorySec)
                        
                        
                    }).catch(err => {
            
                        });
                }   
                
            }
            fetchData();
            return () => {
                ignore = true;
            };
            
            
        }
       
        
        
    }, [seconds])
    console.log(totalHistorySec)



    const reset = () => {
        setSeconds(sec);
        setMinutes(min);
        setHours(hr);
        clearInterval(id);
        setStart(false);
        // setSecStart(false)
    }

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

                    className="timectrl"
                    onClick={() => setStart(false)}
                    
                    ><FaPauseCircle /></motion.div>
                    <motion.div 
                    whileHover={{ 
                        scale: 1.2,
                        textShadow: "0px 0px 8px rgb(255, 255, 255)",
                     }}
                     whileTap={{
                        scale:1,
                     }}
                     transition={{ type: "spring", stiffness: 400, damping: 17 }}

                    className="timectrl"
                    onClick={() => setStart(true)}
                    ><FaCirclePlay /></motion.div>
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

export function getTotalHistorySec(){
    return totalHistorySec;
}
