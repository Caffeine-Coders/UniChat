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

export default function Chatgpt() {
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
                <MessageSeparator content="12 January 2024" />
                <Message.Header sender="Dheeraj"/>
                    <Message
                    model={{
                        direction: 'incoming',
                        message: "how to change font in react",
                        sentTime: "just now",
                        sender: "Dheeraj",
                        render: () => <IncomingWithHeaderStory />
                    }}
                    />
                    
                    <Message
                    model={{
                        direction: 'outgoing',
                        message: "In React, you can change the font by applying CSS styles to your components. There are several ways to do this: Global Font Change: You can change the font globally by adding a CSS file or style to your project's root HTML file. This will apply the font to all elements in your application.Component-Level Font Change: If you want to apply different fonts to specific components, you can include inline styles or CSS classes directly within your React components.",
                        sentTime: "just now",
                        sender: "ChatGPT",
                    }}
                    />
                    <Message
                    model={{
                        direction: 'outgoing',
                        message: `Here's an example of how you can change the font using inline styles in a React component:
                        import React from 'react';
                        const MyComponent = () => {
                        return (
                            console.log("Hello World")
                        );
                        };
                        export default MyComponent;
                        `,
                        sentTime: "just now",
                        sender: "Joe",
                    }}
                    />
                                    <MessageSeparator content="30 January 2024" />
                    <Message.Header sender="Forum"/>
                    <Message
                    model={{
                        direction: 'incoming',
                        message: "How to install React",
                        sentTime: "just now",
                        sender: "Joe",
                    }}
                    />
                    
                    <Message
                    model={{
                        direction: 'outgoing',
                        message: `To install React, you'll need to set up a new React project. React provides a tool called create-react-app which allows you to quickly set up a new React project with all the necessary dependencies and configuration. Here's how you can install React using create-react-app:

                        Install Node.js and npm: React requires Node.js and npm (Node Package Manager) to be installed on your system. You can download and install them from the official Node.js website: Node.js Download.
                        Create a New React Project: Open your terminal or command prompt, and run the following command to install create-react-app globally:`,
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

