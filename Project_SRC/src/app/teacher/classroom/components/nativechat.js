"use client";
import React, { use } from 'react';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Sidebar, Avatar, ConversationHeader,MessageSeparator, TypingIndicator, Search, Conversation, ConversationList ,AvatarGroup} from '@chatscope/chat-ui-kit-react';
import { useState, useEffect } from 'react';
import ConvoList from "../../../../Components/NativeChat/ConvoList.jsx"
import {getStudentData} from "../../../../Services/Student/StudentData.js"
import ShortcutIcon from '@mui/icons-material/Shortcut';
import Chatbot from '../../components/chatbot.js';
function Nativechat() {
    let studentIds = [];
    let projectname;
    let projectDescription;
    if (typeof window !== 'undefined') {
        const studentId = localStorage.getItem("studentId");
        projectname = localStorage.getItem("projectname");
        projectDescription = localStorage.getItem("projectgoal");
        studentIds.push(studentId);
    }
    // console.log("from native",studentIds, projectname, projectDescription);
    // const {project} = props;
    // const studentIds = project.studentIds;
    // const projectname = project.projectName;
    // const projectDescription = project[0].projectDescription;

 
    const [image, setImage] = useState([]);
    const [name, setName] = useState([]);
    const [info, setInfo] = useState([]);
    // const [messageData, setMessageData] = useState([])
    const [messageInputValue, setMessageInputValue] = useState("");
    const [typingIndicator, setTypingIndicator] = useState("")
    
    const [messageData, setMessageData] = useState([
        {
            message: "Hello!",
            sentTime: "2024-03-14T09:00:00Z",
            sender: "Satwik Bhasin"
        },
        {
            message: "Hi there!",
            sentTime: "2024-03-14T09:05:00Z",
            sender: "Anudeep Sai"
        },
        {
            message: "How are you?",
            sentTime: "2024-03-14T09:10:00Z",
            sender: "Anudeep Sai"
        },
        {
            message: "I have a question in the project you are working on. Can you help me with that?",
            sentTime: "2024-03-14T09:15:00Z",
            sender: "Satwik Bhasin"
        },
    ]);
    
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

    const onSend = () => {
        const currentTime = new Date().toISOString(); // Get the current time
        const newMessage = {
            message: messageInputValue,
            sentTime: currentTime,
            sender: "You" // Assuming the message is sent by the current user
        };
        setMessageData(prevMessageData => [...prevMessageData, newMessage]); // Append the new message to the messageData array
        setMessageInputValue(""); // Clear the message input value after sending
    };
    const [chatgpt,togglechatgpt] = React.useState(false)
    const[selectedmessage,setselectedmessage] = React.useState("")
    let trial = ""
    const clickHandler = async(clickedIndex) =>{
        console.log("clicked: index ->",clickedIndex)
        console.log("message is ",messageData[clickedIndex].message)
        setselectedmessage(messageData[clickedIndex].message)
        
        togglechatgpt(!chatgpt)
        console.log("here msg",selectedmessage)
        console.log("state",chatgpt)
    }
    // console.log(image, name, info);
    return (
        <>
<dialog 
open={chatgpt}
style={{ zIndex: chatgpt ? 9999 : -1, backgroundColor:'transparent' }}
>

                   <Chatbot isOpen={chatgpt} messageString = {selectedmessage} />
                  
</dialog>
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
                            messageData.map((message, index) => {
                                return (
                                    message.sender === "Anudeep Sai" ?
                            
                                        <div key={index} style={{display:'flex' , justifyContent:'flex-end', alignItems:'center'}}>
                                            <Message model={{
                                                message: message.message,
                                                sentTime: message.sentTime,
                                                sender: message.sender,
                                                direction: "outgoing"
                                            }}>
                                            </Message>  
                                            <ShortcutIcon style={{marginTop:'15px', fontSize:'20px', cursor:'pointer'}}  onClick = {() => clickHandler(index)}/>  
                                            
                                        </div>
                                        :
                                        <div key={index} style={{display:'flex', width:'fit-content'}} >
 
                                            <Message model={{
                                                message: message.message,
                                                sentTime: message.sentTime,
                                                sender: message.sender,
                                                direction: "incoming"
                                            }}
                                         
                                            >

                                                <Avatar src={image[0]} />

                                            </Message>
                                            <ShortcutIcon style={{marginTop:'15px', fontSize:'20px',cursor:'pointer', float:'left'}} onClick = {() => clickHandler(index)}/>  
                                        </div>
                                    )
                            })
                        }
                        <TypingIndicator content="Satwik Bhasin is typing" />
                    </MessageList>
                    <MessageInput placeholder="Type message here" value={messageInputValue} onChange={val => setMessageInputValue(val)} onSend={onSend} />
                </ChatContainer>
            </MainContainer>
        </div>

            </>
    );
}

export default Nativechat;