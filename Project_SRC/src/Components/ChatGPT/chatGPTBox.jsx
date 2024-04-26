import React, { useState, useEffect, useRef } from "react";
import {
  IconButton,
  Typography,
  InputBase,
  Box,
  Paper,
  InputAdornment,
  CircularProgress,
  Button,
} from "@mui/material";
import Draggable from "react-draggable";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import chatGPTLogo from "../../Assets/ChatGPT_icon.png";
import ClearIcon from "@mui/icons-material/Clear";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ReplyIcon from "@mui/icons-material/Reply";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {
  getChatGPTResponse,
  getChatGPTResponseFromDB,
  storeChatGPTResponse,
} from "../../Services/ChatGPT/ChatGPT_Routines";
import Image from "next/image";
import Linkify from "react-linkify";
import { createDoc } from "../../Services/GoogleDocs_Routines";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const ChatGPTBox = ({ chatGPTOperation, document, onClose, projects }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTextSelected, setIsTextSelected] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const [isReplying, setIsReplying] = useState(false);
  const [context, setContext] = useState("");
  const [privateMessages, setPrivateMessages] = useState([]);

  const [selectedProject, setSelectedProject] = useState("Private");
  const [isExporting, setIsExporting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const chatGPTBoxRef = useRef();

  useEffect(() => {
    const handleMouseUp = () => {
      const selectedTextByUser = window.getSelection().toString();
      if (selectedTextByUser.length > 0) {
        setIsTextSelected(true);
        setSelectedText(selectedTextByUser);
        navigator.clipboard.writeText("");
      } else {
        setIsTextSelected(false);
        setSelectedText("");
      }
    };

    if (chatGPTBoxRef.current) {
      chatGPTBoxRef.current.addEventListener("mouseup", handleMouseUp);

      return () => {
        if (chatGPTBoxRef.current) {
          chatGPTBoxRef.current.removeEventListener("mouseup", handleMouseUp);
        }
      };
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsVisible(true);
      if (chatGPTOperation === "summarize") {
        setIsLoading(true);
        const docName = JSON.parse(document).docName;
        const docContent = JSON.parse(document).docContent;
        const newMessage = `Summarize this document: ${docName}`;
        const divergentMessages = [...messages];

        console.log("New Message: " + newMessage);

        messages.push({ role: "user", content: newMessage });

        divergentMessages.push({
          role: "user",
          content: `Summarize this document briefly: ${docContent}`,
        });

        const summary = await sendToChatGPTandGetResponse(divergentMessages);

        messages.push({ role: "assistant", content: summary });

        console.log("messages are: " + messages);

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

        const keyConcepts = await sendToChatGPTandGetResponse(
          divergentMessages
        );

        messages.push({ role: "assistant", content: keyConcepts });

        setIsLoading(false);
        setNewMessage("");
      }
    };

    fetchData();
  }, [chatGPTOperation]);

  useEffect(() => {
    if (selectedProject !== "Private" && messages.length > 0) {
      const projectID = selectedProject._id;
      const databasename = "universityatalbanyDB";

      // Define an async function
      const updateChat = async () => {
        await storeChatGPTResponse(projectID, databasename, messages);
      };

      // Call the async function
      updateChat();
    } else if (selectedProject === "Private") {
      setPrivateMessages(messages);
    }
  }, [messages.length]);

  useEffect(() => {
    if (selectedProject !== "Private") {
      const projectID = selectedProject._id;
      const databasename = "universityatalbanyDB";

      // Define an async function
      const getChat = async () => {
        const response = await getChatGPTResponseFromDB(
          projectID,
          databasename
        );

        if (response) {
          setMessages(response);
        } else {
          setMessages([]);
        }
      };

      // Call the async function
      getChat();
    } else if (selectedProject === "Private") {
      setMessages(privateMessages);
    }
  }, [selectedProject]);

  const handleCloseChatGPT = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const sendToChatGPTandGetResponse = async (messageHistory) => {
    const response = await getChatGPTResponse(messageHistory);
    return response.data;
  };

  const handleSendMessage = async () => {
    setIsLoading(true);
    if (newMessage.trim() !== "") {
      let finalMessage = newMessage;
      if (isReplying) {
        finalMessage =
          "You said '" + context + "' so answer this: " + newMessage;
        setIsReplying(false);
        setContext("");
      }
      messages.push({ role: "user", content: finalMessage });

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

      if (selectedProject === "Private") {
        setPrivateMessages(messages);
      }

      setIsLoading(false);
      setNewMessage("");
    }
    setIsExporting(true);
    setIsExporting(true);
  };

  const handleExport = async () => {
    const documentName = "ChatGPT_Transcript_" + new Date().toISOString();
    const content = messages
      .map(
        (message, index) =>
          (message.role === "assistant" ? "Assistant: " : "User: ") +
          message.content +
          ((index + 1) % 2 === 0 ? "\n" : "")
      )
      .join("\n");
    console.log(content);
    const datareturned = await createDoc(documentName, content);
    console.log(datareturned);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    isVisible && (
      <div ref={chatGPTBoxRef}>
        <Box sx={{ zIndex: 1 }}>
          <Draggable
            bounds={{ left: 0, top: 0, right: 1090, bottom: 295 }}
            defaultPosition={{
              x: window.innerWidth / 2 - 175,
              y: window.innerHeight / 2 - 250,
            }}
            handle=".drag-handle"
          >
            <Paper
              style={{
                position: "relative",
                borderTop: 10,
                width: 500,
                height: 600,
                backgroundColor: (theme) => theme.palette.primary.main,
                boxShadow: "0px 4px 10px #699385",
              }}
              sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: 50,
                  backgroundColor: "#1A1D1F",
                  color: (theme) => theme.palette.primary.whites,
                  borderRadius: "5px 5px 0 0",
                  padding: "0 10px",
                  p: 1,
                  flexDirection: "row",
                }}
                className="drag-handle"
              >
                <IconButton
                  onClick={handleCloseChatGPT}
                  sx={{
                    color: (theme) => theme.palette.primary.whites,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    position: "absolute",
                    left: 10,
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    position: "absolute",
                  }}
                >
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
                <Select
                  size="small"
                  value=""
                  variant="outlined"
                  onChange={(event) => {
                    if (event.target.value === "Private") {
                      setSelectedProject("Private");
                    } else {
                      setSelectedProject(event.target.value);
                    }
                  }}
                  sx={{
                    position: "absolute",
                    right: 130,

                    border: "none", // Add this line
                    "&:focus": {
                      border: "none", // Add this line
                    },
                  }}
                >
                  <MenuItem value="Private">
                    <Typography
                      sx={{
                        color: (theme) => theme.palette.primary.whites,
                        fontFamily: "'Kode Mono', monospace",
                        fontSize: 10,
                      }}
                    >
                      Private
                    </Typography>
                  </MenuItem>
                  {projects.map((project) => (
                    <MenuItem value={project}>
                      <Typography
                        sx={{
                          color: (theme) => theme.palette.primary.whites,
                          fontFamily: "'Kode Mono', monospace",
                          fontSize: 10,
                        }}
                      >
                        {project.projectName}
                      </Typography>
                    </MenuItem>
                  ))}
                </Select>
                <IconButton
                  onClick={handleExport}
                  sx={{
                    color: (theme) => theme.palette.primary.whites,
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    position: "absolute",
                    right: 10,
                  }}
                  disabled={!isExporting}
                >
                  <FileDownloadIcon />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: (theme) => theme.palette.primary.dark,
                  color: (theme) => theme.palette.primary.whites,
                  padding: "0 10px",
                  p: 1,
                }}
              >
                <Typography sx={{ fontFamily: "'Kode Mono', monospace" }}>
                  {selectedProject.projectName
                    ? selectedProject.projectName
                    : "Private"}
                </Typography>
              </Box>
              {messages?.length === 0 ? (
                <Box
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    mt: 15,
                  }}
                >
                  <Typography variant="h4">Ask your first question</Typography>
                </Box>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    alignItems: "flex-end",
                    overflowY: "scroll",
                    mt: 2,
                    mb: 2,
                    maxHeight: "380px",
                    wordWrap: "break-word",
                    userSelect: "text",
                  }}
                >
                  {[...messages].reverse().map((message, index) => (
                    <Box
                      key={index}
                      sx={{
                        backgroundColor:
                          message.role !== "assistant" ? "#1A1D1F" : "#699385",
                        p: 1,
                        borderRadius: 1,
                        m: 1,
                        alignSelf:
                          message.role !== "assistant"
                            ? "flex-end"
                            : "flex-start",
                        maxWidth: "70%",
                        userSelect: "text",
                      }}
                    >
                      {message.content.split("\n").map((line, index) => (
                        <Typography
                          key={index}
                          sx={{
                            color: (theme) => theme.palette.primary.whites,
                            fontFamily: "'Kode Mono', monospace",
                            fontSize: 12,
                            userSelect: "text",
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
              {isTextSelected && (
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 60,
                    justifyContent: "center",
                    alignItems: "center",
                    width: "95%",
                    display: "flex",
                    height: 40,
                    ml: 2,
                    mt: 33,
                    border: "1px solid #000",
                    borderRadius: 2,
                    backgroundColor: "#ffffff",
                    color: "#000",
                    zIndex: 10,
                  }}
                >
                  <IconButton
                    color="primary"
                    onClick={() => {
                      setSelectedText("");
                      setIsTextSelected(false);
                    }}
                    size="small"
                  >
                    <Typography
                      sx={{
                        color: "#000",
                        fontFamily: "'Kode Mono', monospace",
                        fontSize: 14,
                        flexGrow: 1,
                        ml: 1,
                        mr: 1,
                        fontSize: 10,
                      }}
                    >
                      Clear
                    </Typography>
                    <ClearIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => {
                      navigator.clipboard.writeText(selectedText);
                    }}
                    size="small"
                  >
                    <Typography
                      sx={{
                        color: "#000",
                        fontFamily: "'Kode Mono', monospace",
                        fontSize: 14,
                        flexGrow: 1,
                        ml: 1,
                        mr: 1,
                        fontSize: 10,
                      }}
                    >
                      Copy
                    </Typography>
                    <FileCopyIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => {
                      setSelectedText("");
                      setIsTextSelected(false);
                      setIsReplying(true);
                      setContext(selectedText);
                    }}
                    size="small"
                  >
                    <Typography
                      sx={{
                        color: "#000",
                        fontFamily: "'Kode Mono', monospace",
                        fontSize: 14,
                        flexGrow: 1,
                        fontSize: 10,
                        ml: 1,
                        mr: 1,
                      }}
                    >
                      Reply
                    </Typography>
                    <ReplyIcon />
                  </IconButton>
                </Box>
              )}
              {isReplying && (
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 60,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    width: "95%",
                    height: 40,
                    overflow: "hidden",
                    ml: 2,
                    mt: 33,
                    p: 1,
                    borderRadius: 2,
                    backgroundColor: (theme) => theme.palette.primary.rare,
                    zIndex: 10,
                  }}
                >
                  <ReplyIcon fontSize="small" />

                  <Typography
                    sx={{
                      color: (theme) => theme.palette.primary.textcolor,
                      fontFamily: "'Kode Mono', monospace",
                      fontSize: 14,
                      flexGrow: 1,
                      fontSize: 10,
                      overflow: "scroll",
                      ml: 1,
                      mr: 1,
                    }}
                  >
                    {context.length > 100
                      ? `${context.substring(0, 100)}...`
                      : context}
                  </Typography>
                  <IconButton>
                    <ClearIcon
                      onClick={() => {
                        setIsReplying(false);
                        setContext("");
                      }}
                      fontSize="small"
                    />
                  </IconButton>
                </Box>
              )}
              {showAlert && (
                <Alert
                  icon={<CheckIcon fontSize="inherit" />}
                  severity="success"
                  sx={{
                    mt: 4,
                    ml: 4,
                    mr: 4,
                    borderRadius: 2,
                  }}
                >
                  Here is a gentle confirmation that your transcript is saved to
                  Google Docs
                </Alert>
              )}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  display: "flex",
                  mt: 33,
                  ml: 2,
                  width: "95%",
                  height: 40,
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
                    p: 1,
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
      </div>
    )
  );
};

export default ChatGPTBox;
