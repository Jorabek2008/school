import React, { useState, useEffect } from 'react'
import "../Home.css"
import {Link} from "react-router-dom"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Informatika from './uy/Informatika';
import Math from './uy/Math'
import NotLogin from './uy/NotLogin';


function Uy() {
  const [sideBar,setSideBar] = useState("informatika")


  const handleSidebarClick = (side) => {
    if(side === "informatika"){
      setSideBar("informatika")
    }else if(side === "matematika"){
      setSideBar("matematika")
    }
  }



  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const today = new Date();
   
  const year = (`${today.getFullYear()}-yil ${today.getDate()}-sana ${  today.getMonth()+1}-oy`);

  const user = localStorage.getItem("email")

  return (
    <div className="info">
        <div className="container1">
          <div className="category">
            <h4 className='headingCategory'>Bo'limlar:</h4>
                {!user ? (
                  <NotLogin />
                ) : (
                  <div className='item'>
                    <button onClick={() => handleSidebarClick("informatika")} className='informatika'>Informatika</button>
                    <button onClick={() => handleSidebarClick("matematika")}  className='matematika'>Matematika</button>
                  </div>
                )}
                {/* {user(
                )} */}
          </div>
          <div className="blog">
          {sideBar === "informatika" && (
            <Informatika />
          )}
          {sideBar === "matematika" && (
            <Math/>
          )}
          
          </div>
          <div className="clock">
          <div>Hozirgi vaqt: <span className='span'>{time.toLocaleTimeString()}</span></div>
          <div className='calendar'>Kalendar : <span className='span'>{year}</span></div>
          </div>
        </div>
      </div>
  )
}

export default Uy