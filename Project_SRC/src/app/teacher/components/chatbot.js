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
export default function Chatbot() {
    const [openChatGPT, setOpenChatGPT] = useState(false);
    const toggleChatGPT = () => {
        setOpenChatGPT(!openChatGPT);
    };
    const handleCloseChatGPT = () => {
        setOpenChatGPT(false);
    };
    
    return (
        <Draggable>
        <Paper
          style={{
            position: "relative",
            width: 350,
            zIndex: 9999,
            height: 500,
            borderRadius: 8,
            backgroundColor: (theme) => theme.palette.primary.main,
          }}
          sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
        >
          <IconButton
            onClick={handleCloseChatGPT}
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
                color: (theme) => theme.palette.primary.ButtonColor,
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              mt: 15,
            }}
          >
            <Typography variant="h5">ChatGPT Integration Here</Typography>
          </Box>
          <Box
            sx={{
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
              placeholder="Chat Here"
              sx={{ color: (theme) => theme.palette.primary.main }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    sx={{
                      color: (theme) => theme.palette.primary.main,
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
    );
}
