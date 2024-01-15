import { ReactElement } from 'react';
import { useState } from 'react';
import Timer from '../Timer/timer';
export default function MiniTab(): ReactElement{
    const [tabs, setTabs] = useState(1);
    function updateTabs(id: number)
    {
        setTabs(id);
    }
    return(
        <div className={'minicontainer' + tabs}>
            <div className='minitab'>
                <div className = "minitabbtn" onClick={()=>updateTabs(1)}>Pomodoro</div>
                <div  className = "minitabbtn" onClick={()=>updateTabs(2)}>Short Break</div>
                <div  className = "minitabbtn" onClick={()=>updateTabs(3)}>Long Break</div>
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