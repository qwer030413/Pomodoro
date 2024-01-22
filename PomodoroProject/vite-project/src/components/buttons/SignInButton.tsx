import './buttons.css'
import {motion} from 'framer-motion'
export default function SignInButton(){

    return(
            <motion.input 
            type='submit' className='SignInBtn'
            whileHover={{ 
                scale: 1.05,
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
             }}
             whileTap={{
                scale:1,
             }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            
            value={"Sign In"}
            
            />
        
    );
}