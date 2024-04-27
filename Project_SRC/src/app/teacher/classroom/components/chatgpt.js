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
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';


export default function Chatgpt() {
    // const [messages1, setMessages1] = React.useState([]);
    let messages1 = [];
    const [selname, setSelname] = React.useState('All');
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const msg1 = localStorage.getItem("messages");
            // setMessages1(msg1);
            if (msg1 && msg1 !== undefined && msg1 !== null){
                messages1 = msg1;
            }
        }
    }, []);
    let snames = localStorage.getItem("studentnames");
    snames = snames.split(",").map((name) => name.trim());
    let messages=[]
    if (messages1 && messages1!== undefined && messages1!==null && Array.isArray(messages1) && messages1.length>0){
      messages1.map((msg) => {
          messages.push({
              sender: msg.role=="assistant"? "ChatGPT": msg.role,
              message: msg.content,
          });
      });
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleFilter = (name) => {
        setSelname(name);
        console.log("name", name);
    }
    console.log("selname", selname)
    console.log("messages", messages)
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
                    <ConversationHeader.Actions>
                    <Tooltip title="Filter">
                        <IconButton color="black" 
                        onClick={handleClick}
                        aria-label="filter list" 
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}>
                            <FilterListIcon />
                        </IconButton>
                        </Tooltip>
                    </ConversationHeader.Actions>
                </ConversationHeader>
                <MessageList>
                {selname==="All" ? (messages.map((message, index) => (
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
                ))):(
                    messages.filter((message, index) => {
                        if (message.sender === selname) {
                          console.log("message", index, message);
                          return true;
                        }
                    
                        if (index > 0 && messages[index - 1].sender === selname && message.sender === "ChatGPT") {
                          return true;
                        }
                    
                        return false;
                      }).map((message, index) => (
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
                      ))
                    )}
                </MessageList>
                {/* <Search placeholder="Search..." />
                <MessageInput sendButton='hidden' attachButton='hidden' placeholder='Search here...'/> */}
                </ChatContainer>
            </MainContainer>
            </div>
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

