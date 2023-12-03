import React,{useState, useEffect, useRef} from 'react'
import "../Home.css"
import Message from './Message'
import {  collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../config'
import SendMessage from './SendMessage'
import { auth } from '../config'




function Izoh({message}) {
  const scroll = useRef()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = []
      querySnapshot.forEach((doc) => {
        messages.push({...doc.data() , id: doc.id})
      })
      setMessages(messages)
    })
    return () => unsubscribe()
  })
  // const main1 = message.uid === auth.currentUser.uid ? `main` : `main1`

  return (
    <div className='info'>
        <div className="container1">
          <main className={``}>
            {messages && messages.map((message) => (
              <Message key={message.id}  message={message}/>
            ))}
          </main>
          <span ref={scroll}>
            <SendMessage />
          </span>
              
        </div>
    </div>

  )
}

export default Izoh
