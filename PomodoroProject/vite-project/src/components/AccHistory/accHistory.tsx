import { MdAccessTime } from "react-icons/md";
import { getTotalHistorySec } from "../Timer/timer";
import './acchist.css'
export default function AccountHistory() {
    
    return(
        <>
            <div className='accountHistory'>
                <h1 className="settingTitle">Time Completed <MdAccessTime /></h1>
                <p className='totalsec'>Total Seconds Worked: {getTotalHistorySec()}</p>
                <p className='totalsec'>Total Minutes Worked:</p>
                <p className='totalsec'>Total Hours Worked:</p>
            </div>
            
        </>

    );
}