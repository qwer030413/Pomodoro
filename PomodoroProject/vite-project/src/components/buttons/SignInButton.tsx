import './buttons.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

export default function SignInButton(value: string, h:string, event?:any, success?:boolean, secondVal?: string){

    return(
        <>
        {success? 
        <Link to= {h} className='SignInLink'>
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
            
            value={secondVal}
            onClick={event}
            
            />
        
        </Link>
    :
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
            
            value={value}
            onClick={event}
            
        />
    }
    
    
    </>
           
        
    );
}