import React, { useState, useEffect } from "react";
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
import chatGPTLogo from "../../Assets/ChatGPT_icon.png";
import { getChatGPTResponse } from "../../Services/ChatGPT/ChatGPT_Routines";
import Image from "next/image";


const ChatGPTBox = ({ isOpen }) => {
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
            borderTop: 10,
            width: 350,
            height: 500,
            backgroundColor: (theme) => theme.palette.primary.main,
            boxShadow: "0px 4px 10px #699385", // Use #699385 for the shadow color
          }}
          sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#1A1D1F",
              color: (theme) => theme.palette.primary.whites,
              borderRadius: "5px 5px 0 0",
              padding: "0 10px",
            }}
          >
            <IconButton
              onClick={handleCloseChatGPT}
              sx={{
                position: "absolute",
                left: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: (theme) => theme.palette.primary.white,
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            <IconButton color="inherit" disabled>
              <Image
                src={chatGPTLogo}
                alt="ChatGPT Icon"
                width={24}
                height={24}
              />
            </IconButton>
            <Typography
              variant="h4"
              sx={{
                color: (theme) => theme.palette.primary.whites,
                fontFamily: "'Kode Mono', monospace",
                fontSize: 25,
              }}
              padding={1}
            >
              ChatGPT
            </Typography>
          </Box>
          {messages.length === 0 ? (
            <Box
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                mt: 15,
              }}
            >
              <Typography variant="h5">Ask your first question</Typography>
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
              {[...messages].reverse().map((message, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor:
                      message.sender === "user" ? "#1A1D1F" : "#699385",
                    p: 1,
                    borderRadius: 1,
                    m: 1,
                    alignSelf:
                      message.sender === "user" ? "flex-end" : "flex-start",
                    maxWidth: "70%",
                  }}
                >
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.primary.whites,
                      fontFamily: "'Kode Mono', monospace",
                      fontSize: 12,
                    }}
                  >
                    {message.text}
                  </Typography>
                </Box>
              ))}
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
              width: 320,
              height: 40,
              ml: 2,
              borderRadius: 2,
              backgroundColor: "#699385",
              color: (theme) => theme.palette.primary.textcolor,
            }}
          >
            <InputBase
              placeholder="Ask Here"
              value={isLoading ? "Thinking..." : newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              disabled={isLoading}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
              sx={{
                color: (theme) => theme.palette.primary.whites,
                fontFamily: "'Kode Mono', monospace",
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
                          backgroundColor: (theme) =>
                            theme.palette.primary.main,
                        }}
                        size={14}
                      />
                    ) : (
                      <SendIcon />
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
};

export default ChatGPTBox;
