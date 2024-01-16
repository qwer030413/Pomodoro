import { ReactElement } from 'react';
import { useState } from 'react';
import Timer from '../Timer/timer';
import {motion} from "framer-motion";
import '../css/implements.module.css';
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
    function updateTabs(id: number)
    {
        setTabs(id);
        
    }
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
                            
                            <motion.div layoutId='index' className="indicator"/>
                        )}
                        <span className='highlight'>{tab.label}</span>
                        

                    </div>
                ))}
            </div>
            
            
            <div className='minicontent'>
                <div className={tabs === 1? "showPomodoro" : "content"}>
                    {Timer(0,1,3)}
                </div>
                <div className={tabs === 2? "showShortBreak" : "content"}>
                    {Timer(0,5,1)}
                </div>
                <div className={tabs === 3? "showLongBreak" : "content"}>
                    {Timer(0,15,1)} 
                </div>
            </div>
            
            
           

        </div>
    );
}