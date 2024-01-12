import TabButton from "../buttons/tabbtn";
import './tabs.css';
import { Link } from 'react-router-dom';

export default function Tabs(){
    return(
        <> 
        <nav className="tab">
        <div className="tabContainer">
            {/* <h1 className="title">Pomorodo</h1> */}
            <Link className = "title" to= "/">Pomodoro</Link>

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