import TabButton from "../buttons/tabbtn";
import './tabs.css';
import { Link } from 'react-router-dom';
import { FcOvertime } from "react-icons/fc";
import {motion} from 'framer-motion';
export default function Tabs(){
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
                <TabButton text="History" address="/pages/History.ts"/>
                <TabButton text="Settings" address="/pages/Settings.ts"/>
                <TabButton text="Login" address="/pages/Login.ts"/>

            </div>
            

        </div>
        <hr className='divider'/>
        </nav>
        

        
        </>
        
        
    );
}