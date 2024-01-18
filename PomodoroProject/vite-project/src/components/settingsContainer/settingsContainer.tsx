import './stcontainer.css';

import { useState } from 'react';

let timeseconds = 0;
export default function SettingsContainer(){
const[sec, setSec] = useState(0);
const[seconds, setSeconds] = useState(1);
// timeseconds = seconds;
console.log(sec);
function savetime(){
    
    setSeconds(sec);
    timeseconds = seconds;
    // console.log(timeseconds);
}
    return(
        <div className='scontainer'>
            <text>Settings</text>
            <hr className='settingdivider'/>
            <div className='allsettings'>
                <div className='timersettings'>
                    <text className='tstitle'>Timer Settings</text>
                    <input type='number' className='pomodoroinput' onChange={(e) => setSec(e.target.value)} ></input>
                    <button onClick={savetime}>save</button>
                </div>
            </div>
            
        </div>
    );

}

export {timeseconds};

