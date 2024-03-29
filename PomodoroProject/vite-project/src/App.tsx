import Tabs from './components/Tabs/tabs'
import './App.css'
import Login from './pages/Login';
import Home from './pages/Home';
import Settings from './pages/Settings';
import History from './pages/History';
import toast,{ Toaster }  from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import SignUp from './pages/SignUp';
import { curemail } from './components/Login/Logincomp';
import { checkSignedIn } from './components/buttons/tabbtn';
import { signedIn } from './components/buttons/tabbtn';
import ResetPassword from './pages/ResetPassword';
if(curemail.trim() != '')
      {
          
        checkSignedIn(true);
      }
    else{
      checkSignedIn(false);
    }

    

function App() {
 
  useEffect(() => {
    
    console.log(signedIn)
    },[signedIn])


  useEffect(() => {
    // Dismiss all active toasts
    toast.dismiss()
   })
    

  return (
    <>
    <div><Toaster/></div>
      <Tabs />
      <body>
      
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/pages/History.ts" element = {<History />} />
        <Route path = "/pages/Login.ts" element = {<Login />} />
        <Route path = "/pages/Settings.ts" element = {<Settings />} />
        <Route path = "/SignUp" element = {<SignUp />} />
        <Route path = "/PwReset" element = {<ResetPassword />} />
      </Routes>
      </body>
    </>
  )
}

export default App
