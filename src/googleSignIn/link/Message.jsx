import React from 'react'
import "./uy/all.css"
import { auth } from '../config'



function Message({message}) {
    const messageClass = message.uid === auth.currentUser.uid ? `sent` : `received`
    const messageClass1 = message.uid === auth.currentUser.uid ? `sent1` : `received1`
  return (
    <div className='block'>
        <div className={` message ${messageClass1}`}>
            <p className={`name`}>{message.name}</p>
            <p className={`${messageClass}`}>{message.text}</p>
        </div>
    </div>
  )
}

export default Message