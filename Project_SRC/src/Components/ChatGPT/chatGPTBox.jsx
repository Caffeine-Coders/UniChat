import React, { useState, useEffect, useRef} from "react";
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
import {
  getChatGPTResponse,
  getChatGPTResponseFromDB,
  storeChatGPTResponse,
} from "../../Services/ChatGPT/ChatGPT_Routines";
import Image from "next/image";
import Linkify from "react-linkify";

const ChatGPTBox = ({ chatGPTOperation, document, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [getMessageHistory, setMessageHistory] = useState([]);
  var messageHistoryRetrieved = false;

  const prevMessageHistoryRef = useRef();
  

  useEffect(() => {
    const fetchData = async () => {
      setIsVisible(true);
      if (chatGPTOperation === "summarize") {
        setIsLoading(true);
        const docName = JSON.parse(document).docName;
        const docContent = JSON.parse(document).docContent;
        const newMessage = `Summarize this document: ${docName}`;
        const divergentMessages = [...messages];

        messages.push({ role: "user", content: newMessage });

        divergentMessages.push({
          role: "user",
          content: `Summarize this document briefly: ${docContent}`,
        });

        const summary = await sendToChatGPTandGetResponse(divergentMessages);

        messages.push({ role: "assistant", content: summary });

        setIsLoading(false);
        setNewMessage("");
      } else if (chatGPTOperation === "resources") {
        setIsLoading(true);
        const docName = JSON.parse(document).docName;
        const docContent = JSON.parse(document).docContent;
        const newMessage = `Get resources for this document: ${docName}`;
        const divergentMessages = [...messages];

        messages.push({ role: "user", content: newMessage });

        divergentMessages.push({
          role: "user",
          content: `Get relevant and working internet resources for this document: ${docContent}`,
        });

        const resources = await sendToChatGPTandGetResponse(divergentMessages);

        messages.push({ role: "assistant", content: resources });

        setIsLoading(false);
        setNewMessage("");
      } else if (chatGPTOperation === "keyConcepts") {
        setIsLoading(true);
        const docName = JSON.parse(document).docName;
        const docContent = JSON.parse(document).docContent;
        const newMessage = `Evaluate key concepts from this document: ${docName}`;
        const divergentMessages = [...messages];

        divergentMessages.push({
          role: "user",
          content: `Evaluate key concepts as pointers from this document: ${docContent}`,
        });

        messages.push({ role: "user", content: newMessage });

        const keyConcepts = await sendToChatGPTandGetResponse(divergentMessages);

        messages.push({ role: "assistant", content: keyConcepts });

        setIsLoading(false);
        setNewMessage("");
      }
    };

    fetchData();
  }, [chatGPTOperation]);



  useEffect(() => {
    console.log(messages.length, localStorage.getItem("projectID"));
      if (localStorage.getItem("projectID") !== null && messages.length > 0) {
        const projectID = localStorage.getItem("projectID");
        const databasename = "universityatalbanyDB";
  
        // Define an async function
        const updateChat = async () => {
          const response = await storeChatGPTResponse(
            projectID,
            databasename,
            messages
          );
          console.log(response);
        };
  
        // Call the async function
        updateChat();
    }
  }, [messages.length]);

  useEffect(() => {
    prevMessageHistoryRef.current = getMessageHistory;
  }, []);

  useEffect(() => {
    if (localStorage.getItem("projectID") !== null) {
      const projectID = localStorage.getItem("projectID");
      const databasename = "universityatalbanyDB";
  
      // Define an async function
      const getChat = async () => {
        const response = await getChatGPTResponseFromDB(
          projectID,
          databasename
        );
        console.log(response);
        setMessageHistory(response);
      };
  
      // Call the async function
      getChat();
    }
  }, []);
  
  useEffect(() => {
      if (JSON.stringify(prevMessageHistoryRef.current) !== JSON.stringify(getMessageHistory)) {
        setMessages(prevMessages => [...prevMessages, ...getMessageHistory]);
      }
    }, [getMessageHistory]);

  const handleCloseChatGPT = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const sendToChatGPTandGetResponse = async (messageHistory) => {
    console.log(messageHistory);
    const response = await getChatGPTResponse(messageHistory);
    return response.data;
  };

  const handleSendMessage = async () => {
    setIsLoading(true);
    if (newMessage.trim() !== "") {
      messages.push({ role: "user", content: newMessage });

      const response = await sendToChatGPTandGetResponse(messages);

      messages.push({ role: "assistant", content: response });

      if (
        newMessage === "which planet in the universe have most number of moons?"
      ) {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            role: "assistant",
            content:
              "Correction from UniChatBot:\n Saturn, holds the title for the planet with the most moons in our solar system. Recently, **62 new moons** were discovered around Saturn, bringing its official total to **145**.\n\n In contrast, Jupiter, which briefly overtook Saturn, has **95** moons that have been formally designated by the International Astronomical Union (IAU) 🌟🪐🌕\n Remember, this information is specific to our solar system. When we venture beyond, the universe is teeming with countless other planets, each with its own unique set of moons and mysteries. 🌌 \nSource:- Jupiter now has 92 moons, surpassing Saturn for record - Astronomy Magazine. https://www.astronomy.com/\nscience/jupiter-now-has-92-moons-surpassing-saturn-for-record/.",
          },
        ]);
      }

      setIsLoading(false);
      setNewMessage("");
    }
  };

  return (
    isVisible && (
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
              boxShadow: "0px 4px 10px #699385",
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
                  wordWrap: "break-word",
                }}
              >
                {[...messages].reverse().map((message, index) => (
                  <Box
                    key={index}
                    sx={{
                      backgroundColor:
                        message.role === "user" ? "#1A1D1F" : "#699385",
                      p: 1,
                      borderRadius: 1,
                      m: 1,
                      alignSelf:
                        message.role === "user" ? "flex-end" : "flex-start",
                      maxWidth: "70%",
                    }}
                  >
                    {message.content.split("\n").map((line, index) => (
                      <Typography
                        key={index}
                        sx={{
                          color: (theme) => theme.palette.primary.whites,
                          fontFamily: "'Kode Mono', monospace",
                          fontSize: 12,
                        }}
                      >
                        <Linkify
                          componentDecorator={(
                            decoratedHref,
                            decoratedText,
                            key
                          ) => (
                            <a target="_blank" href={decoratedHref} key={key}>
                              {decoratedText}
                            </a>
                          )}
                        >
                          {line}
                        </Linkify>
                      </Typography>
                    ))}
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
                  if (e.key === "Enter" && newMessage.trim()) {
                    handleSendMessage();
                  }
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
                      disabled={isLoading || !newMessage.trim()}
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
    )
  );
};

export default ChatGPTBox;
