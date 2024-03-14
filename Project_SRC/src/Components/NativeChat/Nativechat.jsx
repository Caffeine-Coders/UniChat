"use client";
import React from 'react';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Sidebar, Avatar, ConversationHeader,MessageSeparator, TypingIndicator, Search, Conversation, ConversationList ,AvatarGroup} from '@chatscope/chat-ui-kit-react';
import { useState, useEffect } from 'react';
import ConvoList from "./ConvoList.jsx"

function Nativechat() {
    const image = [
        "https://media.licdn.com/dms/image/D5603AQFwiIu2-6-tQQ/profile-displayphoto-shrink_800_800/0/1676321390019?e=1715817600&v=beta&t=JmHghPbCtngZyXrIKFWzhYmfjKUEaXUqWMbZ_Bd9OtM",
        "https://media.licdn.com/dms/image/D5635AQEgKAc0JMfifA/profile-framedphoto-shrink_800_800/0/1706476792797?e=1711000800&v=beta&t=e5MXQfJJuuYvbIG_bs4_giB8snxX_8acmnEg0NyxG0E",
        "https://hips.hearstapps.com/hmg-prod/images/narendra-modi-494107793-600x600.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
        "https://media.licdn.com/dms/image/D4D03AQG6nU3nrjTIag/profile-displayphoto-shrink_200_200/0/1708001222686?e=2147483647&v=beta&t=YzXO7aH34YBzmKf1gexwHk8jaiHn5a2J0UF3QVrNpJc"
    ]
    const name = ["Anudeep", "Mr.Bhasin", "NaMo", "Rajeev talvar"]
    const info = ["Hello", "Hello", "Hello", "Hello"]
    
    return (
        <div style={{ width: '100%', height: "100%" }}>
           <MainContainer responsive>   
           {/* -------------------------- sidebar work ---------------------- */}
                <Sidebar position="left" scrollable={true}>
                    <ConversationList>
                        <ConvoList image = {image} 
                                   name = {name} 
                                   info = {info}/>
                    </ConversationList>
                </Sidebar>

            {/* --------------------- Chat work ------------------------------ */}
                <ChatContainer>
                        <ConversationHeader>
                        <ConversationHeader.Back />
                        <ConversationHeader.Content userName={"ICSI 518 Project"} info={"Project for Class SE"} />
                        </ConversationHeader>

                        <MessageList>
                            <MessageSeparator content="CHAT" />
                            <Message model={{
                                message: "Hello",
                                sentTime: "Just Now",
                                sender: "Alex",
                                direction: "incoming"
                            }} />
                            <Message model={{
                                message: "Hi",
                                sentTime: "Just Now",
                                sender: "You",
                                direction: "outgoing"
                            }} />
                            <TypingIndicator content="Rajeev is typing" />
                        </MessageList>
                        <MessageInput placeholder="Type message here" />
                </ChatContainer>
            </MainContainer>
        </div>
    );
}

export default Nativechat;