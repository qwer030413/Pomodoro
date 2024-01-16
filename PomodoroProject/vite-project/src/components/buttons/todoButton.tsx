import { ReactElement } from "react";
import { FaPlus } from "react-icons/fa";
import {motion} from "framer-motion";
import './buttons.css'


export default function ToDoButton(event: any):ReactElement{
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
        className="addbtn"
        type="submit"
        onClick={event}
        
        >
            
            <FaPlus />
        </motion.button>
    );
}