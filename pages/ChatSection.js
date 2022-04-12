import React from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import MicIcon from '@mui/icons-material/Mic';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useState } from 'react'
import { useEffect } from 'react';
import Message from '../components/Message';




function ChatSection() {

  const [input, setInput] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    setInput('');
  }

  return (
    <div className="bg-[#0A183D] h-full min-h-screen overflow-scroll scrollbar-hide">
        <Navbar/>
        

        <MessageContainer>
          <Message message="Hello User, Welcome to SoulMusic - music for every mood. Let's start with your name" typeOfUser="bot"/>
          
          <Message message="Hussain Rampurawala" typeOfUser="user"/>

          <Message message="Hello Hussain, How Are You Feeling Today??" typeOfUser="bot"/>

          <Message message="I am extremely Angry" typeOfUser="user"/>
        </MessageContainer>

        <InputContainer>
          <InsertEmoticonIcon className="ml-4"/>
          <Input value={input} onChange={e => setInput(e.target.value)}/>
          <MicIcon className="mr-20"/>
          <button hidden disabled={!input} type="submit" onClick={sendMessage}>Send Message</button>
        </InputContainer>
    </div>
  )
}

export default ChatSection

const MessageContainer = styled.div`
  padding: 30px;
  min-height: 82vh
`;

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  padding: 10px
  position: sticky;
  bottom: 0;
  background-color: white;
  z-index: 100;
  border-radius: 50px
  `;
const Input = styled.input`
  flex: 1;
  outline: 0;
  padding: 15px;
  bottom: 0;

  margin-left: 15px;
  margin-right: 15px;
  border: none;
  
`;