import React from 'react'
import "./Home.css"
import Logo from "../img/logo.png"

function Home() {
  
  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div>
      <div className='header'>
        <div className='navbar'>
          <img src={Logo} alt="Logo" />
            <button onClick={logout} className='logOutbtn'>LogOut</button>
        </div>
      </div>

      <div className='imgItem'>
        <div className="container">
          <div className="imgItemLeft">
            <p className='headingInformatik'>About computer science</p>
            <div className="animation">
                <div class="msg">Scanning</div>
            </div>
            <p className="headingStatus"></p>
          </div>
        </div>
      </div>
      <div className="sidebar">
          <div className="container">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT</a>
            <a href="#">POST</a>
          </div>
      </div>
      <div className="info">
        <div className="container1">
          <div className="category">
            <h4 className='headingCategory'>Category:</h4>
            <div className="item">
              <a href='#'>Matematika</a>
            </div>
          </div>
          <div className="blog">
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home