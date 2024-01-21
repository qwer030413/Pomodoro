import TabButton from "../buttons/tabbtn";
import './tabs.css';
import { Link } from 'react-router-dom';
import { FcOvertime } from "react-icons/fc";
import {motion} from 'framer-motion';
import { useState } from "react";
export default function Tabs(){
    let initialTabs = [
        {id: 1, name: "History", address: "/pages/History.ts"},
        {id: 2, name: "Settings", address: "/pages/Settings.ts"},
        {id: 3, name: "Login", address: "/pages/Login.ts"}
    ]
    const [tabs, setTabs] = useState(initialTabs);
    const [workingTab, setWorkingTab] = useState(0);

    function activeTab(id:number){
        setWorkingTab(id);
    }

    
    return(
        <> 
        <nav className="tab">
        <div className="tabContainer">
            <motion.div 
            className="home"
            whileHover={{ 
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
             }}
             whileTap={{
                scale:1,
             }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <Link className = "title" to= "/">
                    Pomodoro
                    <FcOvertime className="homeicon"/>
                    </Link>
                
            </motion.div>   
            

            <div className="buttonContainer">
                

                {tabs.map((tab:any) => (
                    // <TabButton 
                    // text = {tab.name} 
                    // address={tab.address} 
                    // classname="TabButton"
                    // classname={tab.id == workingTab? "TabButton selected":"TabButton"}
                    // click = {activeTab(tab.id)}
                    // /> 
                    <div>
                         {TabButton(() => activeTab(tab.id), tab.address, "TabButton", tab.name)}
                    </div>
                   
                ))}

            </div>
            

        </div>
        <hr className='divider'/>
        </nav>
        

        
        </>
        
        
    );
}