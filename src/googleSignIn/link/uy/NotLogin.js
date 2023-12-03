import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./all.css"

function NotLogin() {
  const notify = () => toast.error("Hamma ma'lumotlardan foydalanish uchun ro'yxatdan o'ting");
  return (
    <div className='container'>
        <h3>Hamma ma'lumotlardan foydalanish uchun ro'yxatdan o'ting</h3>
        <button className="btn" onClick={notify}>Bosing</button>
        <ToastContainer />
    </div>
  )
}

export default NotLogin