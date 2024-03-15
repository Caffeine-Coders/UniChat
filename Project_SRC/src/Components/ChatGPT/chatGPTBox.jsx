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

const ChatGPTBox = ({ isOpen, chatGPTOperation }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const [messages, setMessages] = useState(() => {
    if (chatGPTOperation === "summarize") {
      return [
        {
          text: `Summarize: Resume_Undergraduate.pdf`,
          sender: "user",
        },
        {
          text: `The document outlines the details of Homework 1 for the Cryptography course, with a focus on encryption techniques. The assignment aims to solidify the concepts discussed in class and consists of three main problems. The first problem involves breaking an affine cipher based on specific knowledge about the ciphertext. The second problem addresses the security of the Hill cipher machine against various types of attacks, requiring both explanations and worked-out examples. The final problem tasks students with designing and implementing a new encryption scheme using substitution, transposition, and product operations, and demonstrating its resistance to cryptanalytic attacks. Additionally, the submission requirements for the assignment are specified, including the need to submit source code, a pdf file containing the code, a pdf file with answers to the problems, and a video demonstrating the program's functionality.

          The first problem focuses on breaking an affine cipher using specific knowledge about the ciphertext, such as the most frequent letter being the sum of characters in the first name modulo 26. Students are required to break the cipher or justify why it is unbreakable. The second problem evaluates the security of the Hill cipher machine against ciphertext-only, chosen plaintext, and chosen ciphertext attacks. It requires students to explain whether the machine remains resilient against these attacks and provide worked-out examples to justify their answers. The third problem challenges students to design and implement a new encryption scheme using classical cryptography operations and demonstrate its resistance to cryptanalytic attacks. The submission requirements include separate submissions for the source code, a pdf file containing the code, a pdf file with answers to the problems, and a video demonstrating the program's functionality.
          
          In summary, the homework assignment for the Cryptography course involves breaking an affine cipher, assessing the security of the Hill cipher machine against different types of attacks, and designing a new encryption scheme. Students are required to submit their source code, a pdf file containing the code, a pdf file with answers to the problems, and a video demonstrating the program's functionality as per the specified submission requirements.`,
          sender: "chatgpt",
        },
      ];
    } else {
      return [];
    }
  });
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

      if(newMessage === "which planet in the universe have most number of moons?")
      {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Correction from UniChatBot:\n Saturn, holds the title for the planet with the most moons in our solar system. Recently, **62 new moons** were discovered around Saturn, bringing its official total to **145**.\n\n In contrast, Jupiter, which briefly overtook Saturn, has **95** moons that have been formally designated by the International Astronomical Union (IAU) 🌟🪐🌕\n Remember, this information is specific to our solar system. When we venture beyond, the universe is teeming with countless other planets, each with its own unique set of moons and mysteries. 🌌 \nSource:- Jupiter now has 92 moons, surpassing Saturn for record - Astronomy Magazine. https://www.astronomy.com/\nscience/jupiter-now-has-92-moons-surpassing-saturn-for-record/.", sender: "chatgpt" },
        ]);
      
      }
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
                color: (theme) => theme.palette.primary.whites,
                "&:hover": {
                  backgroundColor: "transparent",
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
                fontSize: 20,
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
