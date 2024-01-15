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
                {/* <div className = {"minitabbtn"} onClick={()=>updateTabs(1)}>Pomodoro</div>
                <div  className = {"minitabbtn"} onClick={()=>updateTabs(2)}>Short Break</div>
                <div  className = {"minitabbtn"} onClick={()=>updateTabs(3)}>Long Break</div>
                <motion.div layoutId='index' className="indicator" >{minitabs[tabs - 1].label}</motion.div> */}
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
                    <Timer />
                </div>
                <div className={tabs === 2? "showShortBreak" : "content"}>
                    <Timer />
                </div>
                <div className={tabs === 3? "showLongBreak" : "content"}>
                    <Timer />
                </div>
            </div>
            
            
           

        </div>
    );
}