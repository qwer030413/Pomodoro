import TabButton from "../buttons/tabbtn";
import './tabs.css';
import { Link } from 'react-router-dom';
import { FcOvertime } from "react-icons/fc";
import {motion} from 'framer-motion';
import { useEffect, useState } from "react";
import { curemail } from "../Login/Logincomp";
import { setCurUser } from "../Login/Logincomp";
import { checkSignedIn } from "../buttons/tabbtn";
import { signedIn } from "../buttons/tabbtn";
import toast from "react-hot-toast";
import { MdAccountCircle } from "react-icons/md";
export function activeTab(id:number){
    // const [workingTab, setWorkingTab] = useState(0);
    // setWorkingTab(id)
    console.log(id)
    if(id == 3 && curemail.trim() != '')
    {
        setCurUser("","");
        checkSignedIn(false)
        console.log("working")
        toast.success("Logged Out!")
    }
    
    
    
}

export default function Tabs(){
    let initialTabs = [];
    const [login, setLogin] = useState("Login");
    let a = "a"
    initialTabs = [
        {id: 1, name: "Account", address: "/pages/History.ts"},
        {id: 2, name: "Settings", address: "/pages/Settings.ts"},
        // {id: 3, name: {login}, address: "/pages/Login.ts"}
    ]
    
    const [tabs, setTabs] = useState(initialTabs);
    
    
    if(curemail.trim() != ''){
        console.log(login)
        setLogin("Log Out")
    }
    

    
    return(
        <> 
        <nav className="tab">
        <div className="tabContainer">
            <motion.div 
            onClick={() => activeTab(0)}
            className="home"
            whileHover={{ 
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                y:-10,
             }}
             whileTap={{
                scale:0.9,
             }}
            transition={{ type: "spring", stiffness: 600, damping: 13 }}
            >
                <Link className = "title" to= "/">
                    Pomodoro
                    <FcOvertime className="homeicon"/>
                    </Link>
                
            </motion.div>   
            

            <div className="buttonContainer">
                

                {tabs.map((tab:any) => (
                    
                        <div key = {tab.id}>
                            {TabButton(() => activeTab(tab.id), tab.address, "TabButton", tab.name )}
                            
                        </div>
                ))} 
                {(TabButton(() => activeTab(3), "/pages/Login.ts", "TabButton", "Login/Out" ))} 
                {/* {(TabButton(() => activeTab(1), "/pages/History.ts", "TabButton", "Account"))}  
                {(TabButton(() => activeTab(2), "/pages/Settings.ts", "TabButton", "Settings"))}  
                {(TabButton(() => activeTab(3), "/pages/Login.ts", "TabButton", "Login" ))}                */}
            </div>
            

        </div>
        <hr className='divider'/>
        </nav>
        

        
        </>
        
        
    );
}

