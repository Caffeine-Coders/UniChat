import React, { useState, useEffect } from "react";
import { Button } from '@mui/material'
import Tooltip from '@mui/material/Tooltip';
import {
    IconButton,
    Typography,
    InputBase,
    Box,
    Paper,
    InputAdornment,
    CircularProgress,
  } from "@mui/material";
  import Draggable from "react-draggable";
  import CloseIcon from "@mui/icons-material/Close";
  import SendIcon from "@mui/icons-material/Send";
  import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
  import { getChatGPTResponse } from "../../../Services/ChatGPT/ChatGPT_Routines";
  import ShortcutIcon from '@mui/icons-material/Shortcut';
export default function Chatbot({isOpen}) {
    const [isVisible, setIsVisible] = useState(isOpen);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);

    const handleCloseChatGPT = () => {
        setIsVisible(false);
    };

    const handleSendMessage = async () => {
        if (newMessage.trim() !== "") {
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: newMessage, sender: "user" },
        ]);

        setIsLoading(true);
        const response = await getChatGPTResponse(newMessage, []);
        setMessages((prevMessages) => [
            ...prevMessages,
            { text: response.data, sender: "chatgpt" },
        ]);
        setIsLoading(false);
        setNewMessage("");
        }
    };

    if (!isVisible) {
        return null;
    }
        
    return (
        <Box sx={{ zIndex: 1 }}>
      <Draggable
        bounds={{ left: 0, top: 0, right: 1090, bottom: 295 }}
        defaultPosition={{
          x: window.innerWidth / 2 - 175,
          y: window.innerHeight / 2 - 250,
        }}
      >
        <Paper
          style={{
            position: "relative",
            borderRadius: 12,
            width: 350,
            height: 500,
            backgroundColor: "#f9f9f9",
          }}
          sx={{ backgroundColor: "f9f9f9" }}
        >
        <Box
            sx={{
                position: "relative",
                display: "flex",
                justifyContent: "flex-start", // Align the text to the left
                alignItems: "center", // Vertically center the items
                backgroundColor: "#0ca37f",
                color: "#0ca37f",
                borderRadius: 3,
                borderBottomLeftRadius: 0, // Not rounded on bottom left
                borderBottomRightRadius: 0, 
                padding: "0 10px",
                textAlign: "left", // Align the text to the left
                width: "100%", // Ensure the box takes full width
                height: 50, // Set the height of the box
            }}
        >
            <img
                src="https://freelogopng.com/images/all_img/1681038628chatgpt-icon-logo.png"
                alt="chatgpt"
                style={{ height: "40px" }}
            />
            <IconButton
                onClick={handleCloseChatGPT}
                sx={{
                    position: "absolute",
                    right: 0,
                    color: "white",
                    "&:hover": {
                        backgroundColor: "transparent",
                        color: "white",
                    },
                }}
            >
                <CloseIcon />
            </IconButton>
        </Box>

          {messages.length === 0 ? (
            <Box
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column", // Add this line to make the items stack vertically
                    mt: 15,
                }}
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png"
                    alt="chatgpt"
                    width={75}
                    height={75}
                />
                <Typography variant="h5">How can I help you today?</Typography>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column-reverse",
                alignItems: "flex-end",
                overflowY: "scroll",
                mt: 2,
                maxHeight: "380px",
              }}
            >
              {[...messages].reverse().map((message, reversedIndex) => {
                const index = messages.length - 1 - reversedIndex; // calculate the index in the original array
                return (
                  <Box
                    key={index}
                    sx={{
                      backgroundColor:
                        message.sender === "user"
                          ? "#c3e8df"
                          : "transparent",
                      p: 1,
                      borderRadius: 2,
                      m: 1,
                      alignSelf:
                        message.sender === "user" ? "flex-end" : "flex-start",
                      maxWidth: "80%",
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        color: (theme) => theme.palette.primary.whites,
                        fontSize: 15,
                      }}
                      onMouseOver={(e) => e.currentTarget.nextSibling.firstChild.style.opacity = 1} 
                      onMouseOut={(e) => e.currentTarget.nextSibling.firstChild.style.opacity = 0}
                    >
                      {message.text}
                    </Typography>
                    {message.sender !== "user" && (
                    <div style={{
                      display: 'inline-block', 
                      borderRadius: '50%', 
                      transition: 'background-color 0.3s ease', 
                      marginLeft: '5px',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#dcdcdc'} 
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''} 
                    >
                      <img 
                        src="https://cdn.icon-icons.com/icons2/510/PNG/512/forward_icon-icons.com_50385.png" 
                        alt="Forward Icon"
                        style={{ 
                          width: '20px',
                          height: '20px', 
                          marginLeft: '1px', 
                          cursor: 'pointer', 
                          transition: 'filter 0.3s ease',
                          opacity: '0',
                        }} 
                        onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                        onMouseOut={(e) => e.currentTarget.style.opacity = 0} 
                        onClick={() => console.log(`Clicked message index: ${index} message: ${messages[index].text}`)} 
                      />
                    </div>
                    )}
                  </Box>
                );
              })}
            </Box>
          )}
        <Box
            sx={{
                position: "absolute",
                bottom: 10,
                justifyContent: "flex-start",
                alignItems: "center",
                display: "flex",
                mt: 33,
                width: "95%",
                ml: 1,
                height: 40,
                borderRadius: 3,
                backgroundColor: "white",
                color: "black",
                border: "1px solid black"
            }}
        >
            <InputBase
              placeholder="Message ChatGPT..."
              value={isLoading ? "Thinking..." : newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              disabled={isLoading}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
              sx={{
                color: "black",
                fontSize: 14,
                flexGrow: 1,
                ml: 1,
                mr: 1,
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleSendMessage}
                    sx={{
                      color: (theme) => theme.palette.primary.whites,
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {isLoading ? (
                      <CircularProgress
                        sx={{
                          backgroundColor: "black",
                        }}
                        size={14}
                      />
                    ) : (
                    <IconButton
                        onClick={handleSendMessage}
                        sx={{
                            color: (theme) => theme.palette.primary.whites,
                                    "&:hover": {
                                        // backgroundColor: "black",
                                        // border: "1px solid black",
                                    },
                                }}
                            >
                                <ArrowUpwardIcon />
                            </IconButton>
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Box>
        </Paper>
      </Draggable>
    </Box>
    );
}
