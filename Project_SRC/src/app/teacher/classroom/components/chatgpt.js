"use client";
import React from 'react';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Search,
    Sidebar,
    ConversationList,
    Conversation,
    Avatar,
    ConversationHeader, 
    MessageSeparator
} from "@chatscope/chat-ui-kit-react"; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



export default function Chatgpt() {
    const [messages1, setMessages1] = React.useState([]);
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const msg1 = JSON.parse(localStorage.getItem("messages"));
            setMessages1(msg1);
        }
    }, []);

    console.log("msg1", messages1);
    console.log("msg1", messages1[0]);
    let messages=[]
    messages1.map((msg) => {
        messages.push({
            sender: msg.role=="assistant"? "ChatGPT": msg.role,
            message: msg.content,
        });
    });
  return (
    <>
     <a href='/teacher/classroom'>
            <span class="flex text-sm" >
            <ArrowBackIcon style={{height:'20px'}}/> Classroom</span>
            </a>
    
      <div style={{height: '85vh', width: '100%', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: "relative", height:'100%', borderRadius: '10px' }}>
            <MainContainer>
                <ChatContainer>
                <ConversationHeader >
                    <Avatar
                        name="ChatGPT"
                        src="https://static.vecteezy.com/system/resources/previews/022/227/364/original/openai-chatgpt-logo-icon-free-png.png"
                    />
                    <ConversationHeader.Content 
                        userName="ChatGPT" 
                    />
                </ConversationHeader>
                <MessageList>
                {messages.map((message, index) => (
                <React.Fragment key={index}>
                    {message.sender !== "ChatGPT" ? (<Message.Header sender={message.sender}/>):null}
                    
                    {message.sender !== "ChatGPT" ? (
                    <Message
                        model={{
                        message: message.message,
                        sender: message.sender,
                        direction: "incoming"
                        }}
                    />
                    ) : (
                    <Message
                        model={{
                        message: message.message,
                        sender: message.sender,
                        }}
                    />
                    )}
                </React.Fragment>
                ))}
                </MessageList>
                {/* <Search placeholder="Search..." />
                <MessageInput sendButton='hidden' attachButton='hidden' placeholder='Search here...'/> */}
                </ChatContainer>
            </MainContainer>
            </div>
      </div>
      </>
  );
}

