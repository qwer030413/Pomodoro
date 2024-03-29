import { ReactElement, useEffect } from "react";
import SettingsContainer from "../components/settingsContainer/settingsContainer";
import { useNavigate } from "react-router-dom";

export default function Settings() : ReactElement{
    const navigate = useNavigate(); 
    useEffect(() => {
        const handleEsc = (event) => {
           if (event.key === 'Escape') {
            navigate("/")
          }
        };
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
      }, []);
    return(
        <>
        <body className="settingsPage">
            <SettingsContainer />

        </body>
        </>
        );
    
}