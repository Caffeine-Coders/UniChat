"use client";
import React, { use } from 'react';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Sidebar, Avatar, ConversationHeader,MessageSeparator, TypingIndicator, Search, Conversation, ConversationList ,AvatarGroup} from '@chatscope/chat-ui-kit-react';
import { useState, useEffect } from 'react';
import ConvoList from "./ConvoList.jsx"
import {getStudentData} from "../../Services/Student/StudentData.js"
import logounichat from "../../Assets/UnichatLogo.png"
import {AddMessage} from "../../Services/NativeChat_Routines/MessageRoutines.js"

function Nativechat(props) {
    
    const {project} = props;
    const studentIds = project[0].studentIds;
    const projectname = project[0].projectName;
    const projectDescription = project[0].projectDescription;

 
    const [image, setImage] = useState([]);
    const [name, setName] = useState([]);
    const [info, setInfo] = useState([]);
    const [messageInputValue, setMessageInputValue] = useState("");
    const [typingIndicator, setTypingIndicator] = useState("")

    const [messageData, setMessageData] = useState([]);
    
    useEffect(() => {
        if (studentIds.length > 0) {
            Promise.all(studentIds.map(async (studentId) => {
                const studentData = await getStudentData("universityatalbanyDB", studentId);
                return studentData[0];
            })).then((students) => {
                const studentImages = students.map((student) => student.photoUrl);
                const studentNames = students.map((student) => student.name);
                const studentEmails = students.map((student) => student.email);
                setImage(studentImages);
                setName(studentNames);
                setInfo(studentEmails);
            }).catch((error) => {
                console.error("Error fetching student data:", error);
            });
        }
    }, [studentIds]);

    const onSend = async() => {
        const newMessage = {
            messageData: messageInputValue,
            sender: localStorage.getItem("studentName") // Assuming the message is sent by the current user
        }; 
        setMessageData(prevMessageData => [...prevMessageData, newMessage]); // Append the new message to the messageData array
        setMessageInputValue(""); // Clear the message input value after sending
        const data =  await AddMessage("universityatalbanyDB", project[0]._id, newMessage); // Add the new message to the database
        console.log(data);
    };

    
     
    return (
        <div style={{ width: '100%', height: "100%" ,  borderRadius: 3 }}>
            <MainContainer responsive style={{ borderRadius: 3 }}>
                {/* -------------------------- sidebar work ---------------------- */}
                <Sidebar position="left" scrollable={true}>
                    <ConversationList>
                        <ConvoList image={image}
                            name={name}
                            info={info} />
                    </ConversationList>
                </Sidebar>

                {/* --------------------- Chat work ------------------------------ */}
                <ChatContainer>
                    <ConversationHeader>
                        <ConversationHeader.Back />
                        <ConversationHeader.Content userName={projectname} info={projectDescription} />
                    </ConversationHeader>

                    <MessageList>
                        <MessageSeparator content="CHAT" />
                        {
                            messageData.length>0 ? messageData.map((message, index) => {
                                return (
                                    message.sender === localStorage.getItem("studentName") ?
                            
                                        <div key={index}>
                                            <Message model={{
                                                message: message.messageData,
                                                sentTime: message.sentTime,
                                                sender: message.sender,
                                                direction: "outgoing"
                                            }}>
                                                <Avatar src={image[1]} />
                                            </Message>
                                        </div>
                                        :
                                        <div key={index} >
                                            <Message model={{
                                                message: message.messageData,
                                                sentTime: message.sentTime,
                                                sender: message.sender,
                                                direction: "incoming"
                                            }}>
                                                <Avatar src={image[0]} />
                                            </Message>
                                        </div>
                                    )
                            }):
                            <div>
                                <Message model={{
                                    message: "No message yet, Have good chat...build beautiful projects...",
                                    sentTime: new Date().toISOString(),
                                    sender: "UniChat Bot",
                                    direction: "incoming"
                                }}>
                                    <Avatar src={logounichat.src} />
                                </Message>
                            </div>
                        }
                        {/* <TypingIndicator content="Satwik Bhasin is typing" /> */}
                    </MessageList>
                    <MessageInput placeholder="Type message here" value={messageInputValue} onChange={val => setMessageInputValue(val)} onSend={onSend} />
                </ChatContainer>
            </MainContainer>
        </div>
    );
}

export default Nativechat;