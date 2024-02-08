import { MdAccessTime } from "react-icons/md";

import './acchist.css'
export default function AccountHistory() {
    
    return(
        <>
            <div className='accountHistory'>
                <h1 className="settingTitle">Time Completed <MdAccessTime /></h1>
                <text className='totalsec'>Total Seconds Worked:</text>
                <text className='totalsec'>Total Minutes Worked:</text>
                <text className='totalsec'>Total Hours Worked:</text>
            </div>
            
        </>

    );
}