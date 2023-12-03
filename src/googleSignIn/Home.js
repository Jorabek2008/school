import React, { useState } from 'react'
import "./Home.css"
import GoogleImg from "./../img/google.png"
import ExitImg from "./../img/EXIT.png"
import Logo from "../img/logo.png"
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie"
const cookies = new Cookies()

function Home() {
  
  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }

  const user = localStorage.getItem("email")

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      localStorage.setItem("email", data.user.email);
      window.location.reload()
    });
  };


  return (
    <div>
      <div className='header'>
        <div className='navbar'>
          <img src={Logo} alt="Logo" />
          {!user ? (
            <div className='googeSigin'>
            <img src={GoogleImg} alt="" />
              <button onClick={handleClick} className='logOutbtn'>Kirish</button>
            </div>
          ): (
            <div className='googeSigun'>
              <img src={ExitImg} alt="" />
              <button onClick={logout} className='logOutbtn'>Chiqish</button>
            </div>
          )}
        </div>
      </div>

      <div className='imgItem'>
        <div className="container">
          <div className="imgItemLeft">
            <p className='headingInformatik'>Informatika Haqida</p>
            <div className="animation">
                <div className="msg">Saytga Xush kelibsiz</div>
            </div>
            <p className="headingStatus">Ilm O'rganish <br/> Xar Bir Musulmon <br/> Uchun Farzdir</p>
          </div>
        </div>
      </div>
      <div className="sidebar">
          <div className="container">
            <Link className='link' to="/">Uy</Link>
            <Link className='link' to="/test">Testlar</Link>
            <Link className='link' to="/nazorat">Nazorat ishlari</Link>
            <Link className='link' to="/izoh">Izoh Qoldirish</Link>
          </div>
      </div>
    </div>
  )
}

export default Home