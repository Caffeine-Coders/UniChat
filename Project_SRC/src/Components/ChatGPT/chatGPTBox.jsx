import React, { useState, useEffect } from "react";
import {
  IconButton,
  Typography,
  InputBase,
  Box,
  Paper,
  InputAdornment,
} from "@mui/material";
import Draggable from "react-draggable";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

const ChatGPTBox = ({ isOpen }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const handleCloseChatGPT = () => {
    setIsVisible(false);
  };

  const handleSendMessage = () => {
    setMessages([...messages, newMessage]);
    setNewMessage("");
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
            borderRadius: 8,
            width: 350,
            height: 500,
            backgroundColor: (theme) => theme.palette.primary.main,
          }}
          sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: (theme) => theme.palette.primary.ButtonColor,
              color: (theme) => theme.palette.primary.whites,
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
              }}
            >
              {[...messages].reverse().map((message, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.primary.ButtonColor,
                    p: 1,
                    borderRadius: 1,
                    mb: 1,
                    mr: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.primary.whites,
                      fontFamily: "'Kode Mono', monospace",
                      fontSize: 12,
                    }}
                  >
                    {message}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
          <Box
            sx={{
              position: "absolute",
              bottom: 10,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              mt: 33,
              width: 300,
              borderRadius: 3,
              ml: 3,
              backgroundColor: (theme) => theme.palette.primary.ButtonColor,
              color: (theme) => theme.palette.primary.textcolor,
            }}
          >
            <InputBase
              placeholder="Ask Here"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
              sx={{
                color: (theme) => theme.palette.primary.whites,
                fontFamily: "'Kode Mono', monospace",
                fontSize: 14,
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
                    <SendIcon />
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
