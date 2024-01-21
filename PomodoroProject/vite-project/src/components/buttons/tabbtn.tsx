import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'


interface tabbtn {
    text: string;
    address: string;
}


// function TabButton(t: tabbtn) {

//     return(
//         <Link to ={t.address}>
//         <button>{t.text}</button>
//         </Link>
        
//     );
// }

const TabButton = (t: tabbtn) : ReactElement=>{
    
    return(
        <Link to ={t.address}>
        <motion.button
        className='TabButton'
        whileHover={{ 
            y:-10,

            textShadow: "0px 0px 8px rgb(255, 255, 255)",
            
         }}
         whileTap={{
           scale:0.9,
            
         }}
        transition={{duration:0.5, type: "spring", stiffness: 600, damping: 13}}
        >{t.text}</motion.button>
        </Link>
        
    );
}

export default TabButton;