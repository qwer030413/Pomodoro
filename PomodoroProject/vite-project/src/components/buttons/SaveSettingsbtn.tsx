import { ReactElement } from "react";
import {motion} from "framer-motion";
import './buttons.css'

export default function SaveSettingBtn(event: any, text:string):ReactElement{
    return(
        <motion.button 
        whileHover={{ 
            scale: 1.05,
            textShadow: "0px 0px 8px rgb(255, 255, 255)",
         }}
         whileTap={{
            scale:1,
         }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="timesavebutton"
        type="submit"
        onClick={event}
        
        >{text}
        </motion.button>
    );
}