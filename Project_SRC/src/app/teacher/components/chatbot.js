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
import {
  getChatGPTResponse,
  getChatGPTResponseFromDB,
  storeChatGPTResponse,
} from "../../../Services/ChatGPT/ChatGPT_Routines";
import Image from "next/image";
import Linkify from "react-linkify";
import {appendGPT} from '../dbconnections/storegpt'
import {getgptchat} from '../dbconnections/getgptchat'
export default function Chatbot ({ chatGPTOperation, document, onClose }) {
  const [isVisible, setIsVisible] = useState(true);
  
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [getMessageHistory, setMessageHistory] = useState([]);
  var messageHistoryRetreived = false;
  let msg;
  let msgarray=[];
  if(typeof window !== "undefined"){
    msg = localStorage.getItem("gptmessages");
    if (msg && msg.length > 0) {
      let matches = msg.match(/"(.*?)"/g);
      if (matches) {
        msgarray = matches.map(message => message.replace(/"/g, '')).map((message,index)=>({
            role: index%2===0 ? 'user' : 'assistant',
            content: message,
        }));
      }
      else {
        msgarray = [];
      }
    }
  }
  const [messages, setMessages] = useState(msgarray);
  useEffect(() => {
    const fetchData = async () => {
      setIsVisible(true);
      if (chatGPTOperation === "summarize") {
        setIsLoading(true);
        const docName = JSON.parse(document).docName;
        const docContent = JSON.parse(document).docContent;
        const newMessage = `Summarize this document: ${docName}`;
        // const divergentMessages = [...messages];


        const divergentMessages = [...messages]
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
      console.log("message history", getMessageHistory);
    }
  }, []);

  const handleCloseChatGPT = async() => {
    let msgdata = localStorage.getItem("gptmessages")
      if (msgdata.length > 0){
        msgdata = msgdata.match(/"(.*?)"/g).map(message => message.replace(/"/g, ''))
      
        console.log("msgs here",msgdata)
        const temail = localStorage.getItem("Temail")
        await appendGPT(msgdata,temail)
            }
          console.log("from cose",messages)
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
        const messagesJson = messages.map(message => `"${message.content}"`).join(",");
        localStorage.setItem('gptmessages', messagesJson);
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
                        // wordWrap: "break-word",
                      }}
                    >
                      {[...messages].reverse().map((message, index) => (
                        <Box
                          key={index}
                          sx={{
                            backgroundColor:
                              message.role === "user" ? "#c3e8df": "transparent",
                            p: 1,
                            borderRadius: 2,
                            m: 1,
                            mb:3,
                            alignSelf:
                              message.role === "user" ? "flex-end" : "flex-start",
                            maxWidth: "80%",
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          {message.content.split("\n").map((line, index) => (
                            <Typography
                              key={index}
                              sx={{
                                color: (theme) => theme.palette.primary.whites,
                                fontFamily: "'Kode Mono', monospace",
                                fontSize: 12,
                                flex: 1,
                              }}
                              onMouseOver={(e) => {
                                if (e.currentTarget.nextSibling && e.currentTarget.nextSibling.firstChild) {
                                  e.currentTarget.nextSibling.firstChild.style.opacity = 1;
                                }
                              }}
                              onMouseOut={(e) => {
                                if (e.currentTarget.nextSibling && e.currentTarget.nextSibling.firstChild) {
                                  e.currentTarget.nextSibling.firstChild.style.opacity = 0;
                                }
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
                         {message.role !== "user" && (
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
                            onClick={()=>{localStorage.setItem("sharedmsg",messages[index].text);
                            localStorage.setItem("messageAdded","false"); 
                            window.location.reload();
                          }
                          }
                            // onClick={() => console.log(`Clicked message index: ${index} message: ${messages[index].text}`)} 
                          />
                        </div>
                        )}
                      
                    {/* ))} */}
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
                      width: "95%",
                      ml: 1,
                      
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
                    maxRows={3}
                    multiline
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

