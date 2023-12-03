import React from 'react'
import Home from './googleSignIn/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Test from './googleSignIn/link/Test';
import Nazorat from './googleSignIn/link/Nazorat';
import Izoh from './googleSignIn/link/Izoh';
import Uy from './googleSignIn/link/Uy';
import Informatika from "./googleSignIn/link/uy/Informatika"
import Math from "./googleSignIn/link/uy/Math"

function App() {
  return (
    <div>
        <Router>
        <Home/>
            <Routes>
                <Route path='/' element={<Uy/>}/>
                <Route path='/test' element={<Test/>}/>
                <Route path='/nazorat' element={<Nazorat/>}/>
                <Route path='/izoh' element={<Izoh/>}/>
            </Routes>
        </Router>
    </div>

  )
}

export default App