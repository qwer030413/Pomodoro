import { MdAccessTime } from "react-icons/md";
// import { getTotalHistorySec } from "../Tabs/animatedTabs";
import './acchist.css'
import { secChange } from "../Timer/timer";
import { curemail } from "../Login/Logincomp";
import Axios from "axios";
import { useEffect, useState } from "react";
import { getTotalHistorySec } from "../Tabs/animatedTabs";
import { MdAccountBox } from "react-icons/md";
import { setTotalHistorySec } from "../Tabs/animatedTabs";
import { updateData } from "../Tabs/animatedTabs";
function AccountHistory(props){
    const [a, setA] = useState(0);

   useEffect(() => {
        setA(getTotalHistorySec())
        console.log("email changed")
        // {() => this.setState({email: curemail})}
   }, [curemail])

   console.log(a)
    return(
        <>
            <div className='accountHistory'>
                <div className="timeCompleted">   
                    <h1 className="settingTitle">Time Completed <MdAccessTime /></h1>
                    <p className='totalsec'>Total Seconds Worked: {props.seconds}</p>
                    <p className='totalsec'>Total Minutes Worked: {Math.round(getTotalHistorySec() / 60 * 100) / 100}</p>
                    <p className='totalsec'>Total Hours Worked: {Math.round(getTotalHistorySec() / 3600 * 100) / 100}</p>

                </div>
                <hr className="accDivider"></hr>
                <div className="AccountInfo">
                    <h1 className="settingTitle">Account Settings<MdAccountBox /></h1>
                    <p className="totalsec">Email: {curemail}</p>
                    
                </div>
                
            </div>
            
        </>

    );
}

export default AccountHistory