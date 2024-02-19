import { ReactElement, useEffect, useRef } from 'react';
import { useState } from 'react';
import Timer from '../Timer/timer';
import {motion, useAnimationControls } from "framer-motion";
import SettingsContainer from '../settingsContainer/settingsContainer';
import { pMinute, pHour, b1Minute, b1Hour, b2Minute, b2Hour} from '../settingsContainer/settingsContainer';
import { secChange } from '../Timer/timer';
import Axios from 'axios';
import { curemail } from '../Login/Logincomp';
import { startChange } from '../Timer/timer';
let totalHistorySec = 0;
let minitabs = [
    {
        label:"Pomodoro",
        id: 1
    },
    {
        label:"Short Break",
        id: 2
    },
    {
        label:"Long Break",
        id: 3
    },
];


export function getTotalHistorySec(){
    return totalHistorySec;
}
export function setTotalHistorySec(){
    MiniTab();
}


export function updateData(){
    
    
    Axios.post("http://localhost:5172/History", {
        email: curemail
        }).then(res => {
            totalHistorySec = res.data[0].sec;
            console.log(totalHistorySec)
                
        }).catch(err => {

            }); 
        
       
    }
export default function MiniTab(): ReactElement{
    const [tabs, setTabs] = useState(1);
    const firstRender = useRef(true);
    const left = useAnimationControls()
    let a = 1;
    function updateTabs(id: number)
    {
        setTabs(id);   
    }

    useEffect(() => {
        if(startChange == true)
        {
            updateData();
        }
        
    },[secChange]);

// function updateData(){
    
    
//     Axios.post("http://localhost:5172/History", {
//         email: curemail
//         }).then(res => {
//             totalHistorySec = res.data[0].sec;
//             console.log(totalHistorySec)
                
//         }).catch(err => {

//             }); 
    
   
// }

    
    
   
    useEffect(() => {
        
            left.set({
                opacity:0,
                y: 50
            })
            left.start({ 
                
                opacity:1, 
                y: 0, 
                transition: { type: "spring", stiffness: 400, damping: 22  }
            })       
    }, [tabs])
    
    return(
        <div className={'minicontainer' + tabs}>
            
            <div className='minitab'>
                
                {minitabs.map((tab) =>(
                    <div
                    key={tab.id}
                    onClick={()=>updateTabs(tab.id)}
                    className={`hi${
                        tabs === tab.id? "":"minitabbtn"
                    } `}
                    // className='minitabbtn'
                    >
                        
                        {tabs === tab.id && (
                            
                            <motion.div layoutId='index' className="indicator" transition={{duration:0.5, type: "spring", stiffness: 200, damping: 18}}/>
                        )}
                        <span className='highlight'>{tab.label}</span>
                        

                    </div>
                ))}
            </div>
            
            
            <div className='minicontent'
            >
                <motion.div 
                className={tabs === 1? "showPomodoro" : "content"}
                animate = {left}
                >
                    {Timer(pHour,pMinute,0)}
                </motion.div>
                <motion.div 
                className={tabs === 2? "showShortBreak" : "content"}
                animate = {left}
                >
                    {Timer(b1Hour,b1Minute,0)}
                </motion.div>
                <motion.div 
                className={tabs === 3? "showLongBreak" : "content"}
                animate = {left}
                >
                    {Timer(b2Hour,b2Minute,0)} 
                </motion.div>
            </div>
            
            
           

        </div>
    );
}

export {totalHistorySec}