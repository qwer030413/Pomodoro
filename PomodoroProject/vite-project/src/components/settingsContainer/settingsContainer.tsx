import './stcontainer.css';

import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SaveSettingBtn from '../buttons/SaveSettingsbtn';
let pMinute = 0;
let pHour = 0;
let b1Minute = 0;
let b1Hour = 0;
let b2Minute = 0;
let b2Hour = 0;


export default function SettingsContainer(){
const[pmin, setpMin] = useState(pMinute); 
const[pHr, setpHr] = useState(pHour); 
const[b1Min, setb1Min] = useState(b1Minute); 
const[b1Hr, setb1Hr] = useState(b1Hour); 
const[b2Min, setb2Min] = useState(b2Minute); 
const[b2Hr, setb2Hr] = useState(b2Hour); 

function savetime(){
    if(pmin < 59 && pmin >= 0 && b1Min < 59 && b1Min >= 0 && b2Min < 59 && b2Min >= 0 && pHr >= 0&& b1Hr >= 0&& b2Hr >= 0)
    {
        pMinute = pmin;
        pHour = pHr;
        b1Minute = b1Min;
        b1Hour = b1Hr;
        b2Minute = b2Min;
        b2Hour = b2Hr;
        toast.success("Saved!", {id:"saved!"});
    }
    else{
        toast.error("Invalid value!", {id:"invalid!"});
    }
        
}

function a(){

}
    return(
        <>
        <div><Toaster /></div>
        <div className='scontainer'>
            <p className='SettingsTab'>Settings</p>
            <hr className='settingdivider'/>
            <div className='allsettings'>
                <div className='timersettings'>
                    <p className='tstitle'>Timer Settings</p>
                    <label className='timerlabels'>Pomodoro</label>
                    <div className='timerSetter'>
                    <input type='number' className='pomodoroinput' onChange={(e) => setpHr(Number(e.target.value))} placeholder="Hours"  ></input>
                    <input type='number' className='pomodoroinput' onChange={(e) => setpMin(Number(e.target.value))} placeholder="Minutes" ></input>
                    </div>
                    <label className='timerlabels'>Short Break</label>
                    <div className='timerSetter'>
                    <input type='number' className='pomodoroinput' onChange={(e) => setb1Hr(Number(e.target.value))} placeholder="Hours" ></input>
                    <input type='number' className='pomodoroinput' onChange={(e) => setb1Min(Number(e.target.value))} placeholder="Minutes" ></input>
                    </div>
                    <label className='timerlabels'>Long Break</label>
                    <div className='timerSetter'>
                    <input type='number' className='pomodoroinput' onChange={(e) => setb2Hr(Number(e.target.value))} placeholder="Hours" ></input>
                    <input type='number' className='pomodoroinput' onChange={(e) => setb2Min(Number(e.target.value))} placeholder="Minutes" ></input>
                    </div>
                    
                    {/* <SaveSettingBtn event ={{a}} text = "save"/> */}
                    {SaveSettingBtn(savetime, "save")}
                </div>
            </div>
            
        </div>
        </>
        
    );

}

export {pMinute, pHour, b1Minute, b1Hour, b2Minute, b2Hour};

