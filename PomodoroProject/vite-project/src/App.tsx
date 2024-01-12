import Tabs from './components/Tabs/tabs'
import './App.css'
import Login from './pages/Login';
import Home from './pages/Home';
import Settings from './pages/Settings';
import History from './pages/History';

import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Tabs />
      <body>
      
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/pages/History.ts" element = {<History />} />
        <Route path = "/pages/Login.ts" element = {<Login />} />
        <Route path = "/pages/Settings.ts" element = {<Settings />} />
      </Routes>
      </body>
    </>
  )
}

export default App
