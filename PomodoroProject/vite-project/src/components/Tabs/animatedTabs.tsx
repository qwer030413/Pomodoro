import { ReactElement, useEffect } from 'react';
import { useState } from 'react';
import Timer from '../Timer/timer';
import {motion, useAnimationControls } from "framer-motion";
import SettingsContainer from '../settingsContainer/settingsContainer';
import { pMinute, pHour, b1Minute, b1Hour, b2Minute, b2Hour} from '../settingsContainer/settingsContainer';

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
export default function MiniTab(): ReactElement{
    const [tabs, setTabs] = useState(1);
    const [initialTab, setInitialTab] = useState(1);
    const [direction, setDirection] = useState(0);
    const left = useAnimationControls()
    let a = 1;
    function updateTabs(id: number)
    {
        setTabs(id);
        
        
        
        
    }
    
    
   
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
                // initial = {{opacity:0, x: -20}} 
                animate = {left}
                // transition={{duration:0.5, type: "spring", stiffness: 400, damping: 17}}
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