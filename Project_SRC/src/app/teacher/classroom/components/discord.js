import React from 'react';
import Box from '@mui/material/Box';
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
export default function Discord() {
  return (
      <>
      <a href='/teacher/classroom'>
            <span class="flex text-sm" >
            <ArrowBackIcon style={{height:'20px'}}/> Classroom</span>
            </a>
      {/* <div style={{ height: '85vh', width: '100%', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
        
        <iframe
          src={`https://e.widgetbot.io/channels/1204543420148752434/1204543420148752437`}
          style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </div> */}
      <div style={{height: '85vh', width: '100%', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: "relative", height:'100%', borderRadius: '10px' }}>
            <MainContainer>
                <ChatContainer>
                <ConversationHeader >
                    {/* <Avatar
                        name="ChatGPT"
                        src="https://static.vecteezy.com/system/resources/previews/022/227/364/original/openai-chatgpt-logo-icon-free-png.png"
                    /> */}
                    <ConversationHeader.Content 
                        userName="UniChat" 
                    />
                </ConversationHeader>
                <MessageList>
                <MessageSeparator content="25 January 2024" />
                <Message.Header sender="Dheeraj"/>
                    <Message
                    model={{
                        direction: 'incoming',
                        message: "whos doing chatbot",
                        sentTime: "just now",
                        sender: "Dheeraj",
                        render: () => <IncomingWithHeaderStory />
                    }}
                    />
                    
                    <Message.Header sender="Forum"/>
                    <Message
                    model={{
                        direction: 'incoming',
                        message: `I am doing it`,
                        sentTime: "just now",
                        sender: "Forum",
                        render: () => <IncomingWithHeaderStory />
                    }}
                    />
                    <MessageSeparator content="30 January 2024" />
                    <Message.Header sender="Forum"/>
                    <Message
                    model={{
                        direction: 'incoming',
                        message: "I have a question on this chatbot thing",
                        sentTime: "just now",
                        sender: "Joe",
                        render: () => <IncomingWithHeaderStory />
                    }}
                    />
                    <Message.Header sender="Dheeraj"/>
                    <Message
                    model={{
                        direction: 'incoming',
                        message: `What is it?`,
                        sentTime: "just now",
                        sender: "Dheeraj",
                        render: () => <IncomingWithHeaderStory />
                    }}
                    />
                    <Message
                    model={{
                        direction: 'outgoing',
                        message: `Hello Students!`,
                        sentTime: "just now",
                        sender: "Professor 1",
                        render: () => <OutgoingWithHeaderStory />
                    }}
                    />
                </MessageList>
                <Search placeholder="Search..." />
                <MessageInput sendButton='hidden' attachButton='hidden' placeholder='Search here...'/>
                </ChatContainer>
            </MainContainer>
            </div>
      </div>
      </>
  );
}

