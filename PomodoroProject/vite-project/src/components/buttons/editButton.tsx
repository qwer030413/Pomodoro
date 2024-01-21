import { ReactElement } from "react";
import {motion} from "framer-motion";
import './buttons.css'

export default function EditButton(event: any, text:string):ReactElement{
    return(
        <motion.button 
        
        initial = {{opacity:0, y: -20}}
        animate = {{opacity:1, y: 0}}
        transition={{type: "spring", stiffness: 400, damping: 17 }}
        whileHover={{ 
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255, 255, 255)",
         }}
         whileTap={{
            scale:1,
         }}
        className={text === "Done"? "editbtn":"cancelbtn"}
        type="submit"
        onClick={event}
        
        >{text}
        </motion.button>
    );
}
