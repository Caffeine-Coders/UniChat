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
// import Search from '@mui/icons-material/Search';

export default function Chat() {
    const chats = [
        { id: 1, title: 'Forum Dipen Shah', lastMessage: 'Hello there!' },
        { id: 2, title: 'Dheeraj Kumar Thanda', lastMessage: 'How are you?' },
        // Add more chat data here...
    ];
  return (
    <>
    <a href='/teacher/classroom'>
            <span class="flex text-sm" >
            <ArrowBackIcon style={{height:'20px'}}/> Classroom</span>
            </a>
    
      <div style={{height: '85vh', width: '100%', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: "relative", height:'100%', borderRadius: '10px' }}>
            <MainContainer>
            <Sidebar position="left" scrollable>
                <ConversationHeader style={{backgroundColor:"#fff"}}>
                    {/* <ConversationHeader.Content>
                        
                    </ConversationHeader.Content> */}
                    </ConversationHeader>
                    <ConversationList>
                    {chats.map((chat) => (
                        <Conversation key={chat.id} name={chat.title} lastMessage={chat.lastMessage}>
                        <Avatar><AccountCircleIcon/></Avatar>
                        <div>{chat.title}</div>
                        </Conversation>
                    ))}
                    </ConversationList>
            </Sidebar>
                <ChatContainer>
                <ConversationHeader>
    <Avatar
      name="Emily"
      src="https://chatscope.io/storybook/react/assets/emily-xzL8sDL2.svg"
    />
    <ConversationHeader.Content
      userName="Forum Dipen Shah"
    />

  </ConversationHeader>
                <MessageList>
                <MessageSeparator content="12 January 2024" />
                    <Message
                    model={{
                        direction: 'incoming',
                        message: "Hello my friend",
                        sentTime: "just now",
                        sender: "Joe",
                    }}
                    />
                    
                    <Message
                    model={{
                        direction: 'incoming',
                        message: "Hello my friend",
                        sentTime: "just now",
                        sender: "Joe",
                    }}
                    />
                    <Message
                    model={{
                        direction: 'incoming',
                        message: "Hello my friend",
                        sentTime: "just now",
                        sender: "Joe",
                    }}
                    />
                                    <MessageSeparator content="30 January 2024" />
                    <Message
                    model={{
                        direction: 'incoming',
                        message: "Hello my friend",
                        sentTime: "just now",
                        sender: "Joe",
                    }}
                    />
                    
                    <Message
                    model={{
                        direction: 'incoming',
                        message: "Hello my friend",
                        sentTime: "just now",
                        sender: "Joe",
                    }}
                    />
                    <Message
                    model={{
                        direction: 'incoming',
                        message: "Hello my friend",
                        sentTime: "just now",
                        sender: "Joe",
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

