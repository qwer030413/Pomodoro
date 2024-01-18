import { ReactElement } from "react";
import {motion} from "framer-motion";
import './buttons.css'

export default function EditButton(event: any, text:string):ReactElement{
    return(
        <motion.button 
        whileHover={{ 
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255, 255, 255)",
         }}
         whileTap={{
            scale:1,
         }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={text === "Done"? "editbtn":"cancelbtn"}
        type="submit"
        onClick={event}
        
        >{text}
        </motion.button>
    );
}
