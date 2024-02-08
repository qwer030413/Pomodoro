import { MdAccessTime } from "react-icons/md";
// import { getTotalHistorySec } from "../Tabs/animatedTabs";
import './acchist.css'
import { secChange } from "../Timer/timer";
import { curemail } from "../Login/Logincomp";
import Axios from "axios";
import { useEffect, useState } from "react";
import { getTotalHistorySec } from "../Tabs/animatedTabs";


export default function AccountHistory() {
   

    return(
        <>
            <div className='accountHistory'>
                <h1 className="settingTitle">Time Completed <MdAccessTime /></h1>
                <p className='totalsec'>Total Seconds Worked: {getTotalHistorySec()}</p>
                <p className='totalsec'>Total Minutes Worked: {Math.round(getTotalHistorySec() / 60 * 100) / 100}</p>
                <p className='totalsec'>Total Hours Worked: {Math.round(getTotalHistorySec() / 3600 * 100) / 100}</p>
            </div>
            
        </>

    );
}

