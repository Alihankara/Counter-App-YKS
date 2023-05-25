import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Form, Button } from "react-bootstrap";
import '../css/chat.css';
import {  useNavigate } from "react-router-dom";
import { sendChat } from "../axios/index";

export default function Chat() {
  const [sender, setSender] = useState('');
  const [message, setMessage] = useState('');
  // const [output, setOutput] = useState('');
  // const [feedback, setFeedback] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const users = localStorage.getItem("user");
  const user = JSON.parse(localStorage.getItem("user")); 
  const navigate = useNavigate(); 

  
  // const sen = user ? user.userName.toUpperCase() : '';
  const [data, setData] = useState({
    message: message,
    sender:user?user.userName.toUpperCase():null
    
  });

  

  useEffect(() => {
    const socket = io.connect('http://localhost:5000');
  
    socket.on('chat', data => {
      setChatMessages(prevMessages => [...prevMessages, data]);
    });
  
    return () => {
      socket.disconnect();
    };
  }, [setChatMessages]);
  

  

  return (
    <div id="chat-wrap">
      <h2>Yorumlar</h2>
      <div id="chat-window">
        
        {
        
        chatMessages.map((chatMessage, index) => (
          <p key={index} id='outputp'>
            <strong>{chatMessage.sender}:&nbsp; </strong>
              {chatMessage.message}
          </p>
        ))}
      </div>

      <Form
      
        onSubmit={(e) => {
          e.preventDefault();
          if(user){
              
              sendChat(data);
              setData({ ...data, message: '' });
          }else{
              window.alert('Yorum yapmak için önce giriş yap.');
          }
            
          
          
            
        }}
      >

        <Form.Group  id="sender"  >
          <Form.Control
            onChange={(e) =>
              setData({ ...data, sender: user?user.userName.toUpperCase():'' })
            }
            onClick={()=> user ? null :window.alert('Yorum yapmak için önce giriş yap.')}
            type="text"
            placeholder="Ad"
            value={user?user.userName.toUpperCase():null}
            id="sender"
          />
        </Form.Group>
        <Form.Group  id="message" >
          <Form.Control
            onChange={(e) =>
              setData({ ...data, message: e.target.value })
            }
            onClick={()=> user ? null :window.alert('Yorum yapmak için önce giriş yap.')}
            type="text"
            placeholder="Mesaj"
            value={data.message}
            id="message"
          />
        </Form.Group>
        <Form.Group >
          <Button type="submit"   id="submitBtn" >
            Gönder
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
