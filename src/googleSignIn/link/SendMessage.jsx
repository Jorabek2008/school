import React, { useState } from 'react'
import "./uy/all.css"
import { auth } from '../config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from './../config';

function SendMessage() {
    const [input, setInput] = useState('')

    const sendMessage= async (e) => {
        e.preventDefault()
        
        if(input === ''){
            alert('Iltimos matn yozing')
            return
        }
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db , 'messages'),{
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })   
        setInput('')    
    }
  return (
    <form onSubmit={sendMessage}>
        <input className='inp' value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Message'/>
        <button className='btn1' type='submit'>Send</button>
    </form>
  )
}

export default SendMessage