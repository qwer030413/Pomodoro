import { Link } from 'react-router-dom';



interface tabbtn {
    text?: string;
    address: string;
}


// function TabButton(t: tabbtn) {

//     return(
//         <Link to ={t.address}>
//         <button>{t.text}</button>
//         </Link>
        
//     );
// }

const TabButton = (t: tabbtn) =>{
    
    return(
        <Link to ={t.address}>
        <button>{t.text}</button>
        </Link>
        
    );
}
export default TabButton;