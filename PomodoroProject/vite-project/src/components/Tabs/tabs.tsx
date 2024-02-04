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


export default function Tabs(){
    let initialTabs = [];
    
    initialTabs = [
        {id: 1, name: "Account", address: "/pages/History.ts"},
        {id: 2, name: "Settings", address: "/pages/Settings.ts"},
        // {id: 3, name: "Login", address: "/pages/Login.ts"}
    ]
    
    const [tabs, setTabs] = useState(initialTabs);
    const [workingTab, setWorkingTab] = useState(0);

    function activeTab(id:number){
        setWorkingTab(id);
        if(id == 3 && curemail.trim() != '')
        {
            setCurUser("","");
            checkSignedIn(false)
            console.log("working")
            toast.success("Logged Out!")
        }
        
        
        
    }

    

    
    return(
        <> 
        <nav className="tab">
        <div className="tabContainer">
            <motion.div 
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
                            {TabButton(() => activeTab(tab.id), tab.address, "TabButton", tab.name)}
                            
                        </div>
                ))}
                
                
                {(TabButton(() => activeTab(3), "/pages/Login.ts", "TabButton", "Login"))}               
            </div>
            

        </div>
        <hr className='divider'/>
        </nav>
        

        
        </>
        
        
    );
}

