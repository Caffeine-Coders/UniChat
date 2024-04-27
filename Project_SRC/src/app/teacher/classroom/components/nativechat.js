"use client";
import React, { use } from 'react';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, Sidebar, Avatar, ConversationHeader,MessageSeparator, TypingIndicator, Search, Conversation, ConversationList ,AvatarGroup} from '@chatscope/chat-ui-kit-react';
import { useState, useEffect } from 'react';
import ConvoList from "../../../../Components/NativeChat/ConvoList.jsx"
import {getStudentData} from "../../../../Services/Student/StudentData.js"
import ShortcutIcon from '@mui/icons-material/Shortcut';
import Chatbot from '../../components/chatbot.js';
import {sendMessage} from "../../dbconnections/appendMessage.js"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import Tooltip from '@mui/material/Tooltip';

// import { AddMessage } from '../../../../Services/NativeChat_Routines/MessageRoutines.js';
function Nativechat() {
    let studentIds = [];
    let projectname;
    const [selname, setSelname] = React.useState('All');
    let snames = localStorage.getItem("studentnames");
    if (snames){
    snames = snames.split(",").map((name) => name.trim());
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = () => {
        
        // setAnchorEl(event.currentTarget);
    };
    const filterClick = (event) => { 
        // open = true;
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleFilter = (name) => {
        setSelname(name);
        console.log("name", name);
    }
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
       
    ]);
    let localmsgs = localStorage.getItem("nativemessages")
    let formattedmsgs=[]
    if (localmsgs !== undefined && localmsgs !== null && Array.isArray(localmsgs)){
        // localmsgs = JSON.parse(localmsgs)
        formattedmsgs = localmsgs.map(msg => ({
            message: msg.content,
            sender: msg.role
        }))
    }
    let currentuser = localStorage.getItem("Tname")
    if (currentuser){
        currentuser = currentuser.replace(/"/g,"")
    }
    // console.log("current user",currentuser)
    useEffect(() => {
       
        // console.log("formated ",formattedmsgs)
        setMessageData(formattedmsgs)
        const messageAdded = localStorage.getItem("messageAdded");

    if (messageAdded === "false") {
        // Check if "sharedmsg" exists in localStorage
        const sharedMsg = localStorage.getItem("sharedmsg");
        if (sharedMsg) {
            // Create a new message object with the shared message
            const newMessage = {
                message: sharedMsg,
                sentTime: new Date().toISOString(), // Assuming the current time
                sender: currentuser // Set the sender to Anudeep Sai
            };
            // Append the new message to the messageData array
            setMessageData(prevMessageData => [...prevMessageData, newMessage]);
            // Set messageAdded flag in localStorage to indicate that the message has been added
            localStorage.setItem("messageAdded", "true");
            sendMessage("universityatalbanyDB",localStorage.getItem("projectid").replace(/"/g,""),newMessage)

        }
    }
        // if (studentIds.length > 0) {
        //     Promise.all(studentIds.map(async (studentId) => {
        //         const studentData = await getStudentData("universityatalbanyDB", studentId);
        //         return studentData[0];
        //     })).then((students) => {
        //         const studentImages = students.map((student) => student.photoUrl);
        //         const studentNames = students.map((student) => student.name);
        //         const studentEmails = students.map((student) => student.email);
        //         setImage(studentImages);
        //         setName(studentNames);
        //         setInfo(studentEmails);
        //     }).catch((error) => {
        //         console.error("Error fetching student data:", error);
        //     });
        // }
    }, [studentIds]);

    const onSend = async() => {
        const currentTime = new Date().toISOString(); // Get the current time
        const newMessage = {
            content: messageInputValue,
            sentTime: currentTime,
            role: currentuser // Assuming the message is sent by the current user
        };
        setMessageData(prevMessageData => [...prevMessageData, newMessage]); // Append the new message to the messageData array
        setMessageInputValue(""); // Clear the message input value after sending
        await sendMessage("universityatalbanyDB",localStorage.getItem("projectid").replace(/"/g,""),newMessage)
    };
    const [chatgpt,togglechatgpt] = React.useState(false)
    const[selectedmessage,setselectedmessage] = React.useState("")
    const[selectedindex1,setselectedindex1] = React.useState(0)
    const [trial, setTrial] = React.useState(0);
    const clickHandler = async(clickedIndex) =>{
        setTrial(clickedIndex);
        console.log("clicked: index ->",clickedIndex)
        console.log("message is ",messageData[clickedIndex].message)
        if (typeof window !== 'undefined') {
            localStorage.setItem("sendmessage", messageData[clickedIndex].message);
        }
        setselectedmessage(messageData[clickedIndex].message)
        setselectedindex1(clickedIndex)
        togglechatgpt(!chatgpt)
        console.log("here msg",selectedmessage, trial)
        console.log("state",chatgpt)
    }
    return (
        <>
<dialog 
open={chatgpt}
style={{ zIndex: chatgpt ? 9999 : -1, backgroundColor:'transparent' }}
>

                   <Chatbot isOpen={chatgpt} />
                  
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
                        <ConversationHeader.Content userName={projectname} info={projectDescription}  />
                        <ConversationHeader.Actions>
                        <Tooltip title="Filter">

                            <FilterListIcon style={{ cursor: 'pointer' }} onClick={filterClick}/>
                            </Tooltip>
                            {/* <ShortcutIcon onClick={() => filterClick(event)}/> */}
                    {/* <Tooltip title="Filter">
                        <IconButton color="black" 
                        onClick={() => filterClick()}
                        // aria-label="filter list" 
                        // aria-controls={open ? 'account-menu' : undefined}
                        // aria-haspopup="true"
                        // aria-expanded={open ? 'true' : undefined}>
                        >
                            <FilterListIcon />
                        </IconButton>
                        </Tooltip> */}
                    </ConversationHeader.Actions>
                    </ConversationHeader>
                    
                    <MessageList>
                        
                        <MessageSeparator content="CHAT" />
                        
                        {selname==="All" ? (
                            
                            messageData.map((message, index) => {
                                
                                return (

                                    message.sender === currentuser ? 

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
                                        <>
                                        <Message.Header sender={message.sender}/>
                                        <div key={index} style={{display:'flex', width:'fit-content'}} >
                                            {/* <span style={{fontSize: '12px', marginBottom: '5px'}}>{message.sender}</span> */}
                                            <Message model={{
                                                message: message.message,
                                                sentTime: message.sentTime,
                                                sender: message.sender,
                                                direction: "incoming"
                                            }}
                                         
                                            >

                                                {/* <Avatar src={image[0]} /> */}

                                            </Message>
                                            <ShortcutIcon style={{marginTop:'15px', fontSize:'20px',cursor:'pointer', float:'left'}} onClick = {() => clickHandler(index)}/>  
                                        </div>
                                        </>
                                    )
                            })
                        ):(
                            messageData.filter(message => message.sender === selname).map((message, index) => {
                                return (

                                    message.sender === currentuser ? 

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
                                        <>
                                        <Message.Header sender={message.sender}/>
                                        <div key={index} style={{display:'flex', width:'fit-content'}} >
                                            {/* <span style={{fontSize: '12px', marginBottom: '5px'}}>{message.sender}</span> */}
                                            <Message model={{
                                                message: message.message,
                                                sentTime: message.sentTime,
                                                sender: message.sender,
                                                direction: "incoming"
                                            }}
                                         
                                            >

                                                {/* <Avatar src={image[0]} /> */}

                                            </Message>
                                            <ShortcutIcon style={{marginTop:'15px', fontSize:'20px',cursor:'pointer', float:'left'}} onClick = {() => clickHandler(index)}/>  
                                        </div>
                                        </>
                                    )
                            })
                        )}
                        {/* <TypingIndicator content="Satwik Bhasin is typing" /> */}
                    </MessageList>
                    <MessageInput placeholder="Type message here" value={messageInputValue} onChange={val => setMessageInputValue(val)} onSend={onSend} />
                </ChatContainer>
            </MainContainer>
        </div>
        <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={()=>handleFilter("All")}>
            All
        </MenuItem>
        {snames.map((name, index) => (
            <MenuItem key={index} onClick={() => handleFilter(name)}>
                {name}
            </MenuItem>
        ))}
      </Menu>

            </>
    );
}

export default Nativechat;