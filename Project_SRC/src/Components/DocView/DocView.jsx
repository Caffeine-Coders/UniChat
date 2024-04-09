"use client";
import React from "react";
import { Box, Button, Typography, IconButton, Slide } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import ThemeContext from "../Contexts/themeContext";
import { ThemeProvider } from "@mui/system";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import chatgpt_logo from "../../Assets/chatgpt-bw.png";
import sublist_icon from "../../Assets/sublist_icon.png";
import { getDoc } from "../../Services/GoogleDocs_Routines";
import ChatGPTBox from "../ChatGPT/chatGPTBox";

export default function DocView({ selectedDoc, selectedDocId }) {
  const { theme } = useContext(ThemeContext);
  const [showGPTOptions, setShowGPTOptions] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [openChatGPT, setOpenChatGPT] = useState(false);
  const [chatGPTOperation, setChatGPTOperation] = useState("");
  const [docData, setDocData] = useState({});

  const handleCloseDocView = () => {
    localStorage.setItem("selectedDoc", "noDocSelected");
  };

  const handleChatGPTClick = () => {
    setShowGPTOptions(!showGPTOptions);
  };

  const handleIframeLoad = () => {
    setIsIframeLoaded(true);
  };

  const handleChatGPTClose = () => {
    setOpenChatGPT(false);
  };

  const handleOperation = async (operation) => {
    const [docNameReceived, docDataReceived] = await getDoc(selectedDocId);
    setDocData({ docName: docNameReceived, docContent: docDataReceived });
    setChatGPTOperation(operation);
    setOpenChatGPT(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        }}
      >
        {isIframeLoaded && (
          <Slide
            direction="right"
            timeout={{ enter: 1000 }}
            in={true}
            mountOnEnter
            unmountOnExit
          >
            <Box
              sx={{
                position: "absolute",
                left: 60,
                top: 50,
                display: "flex",
                flexDirection: "column",
                gap: 3,
                maxWidth: 200,
                width: 200,
                overflow: "hidden",
              }}
            >
              <IconButton
                onClick={handleChatGPTClick}
                sx={{
                  backgroundColor: "#74AA9C",
                  color: theme.palette.primary.main,
                  borderRadius: 3,
                  gap: 1,
                  "&:hover": {
                    backgroundColor: "#409c80",
                  },
                  zIndex: 1,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Kode Mono', monospace",
                    fontWeight: "bold",
                  }}
                >
                  ChatGPT
                </Typography>
                <Image src={chatgpt_logo} style={{ width: 25, height: 25 }} />
              </IconButton>
              {showGPTOptions && (
                <Slide
                  direction="down"
                  in={showGPTOptions}
                  timeout={{ enter: 500 }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      mt: -2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={sublist_icon}
                        style={{ width: 25, height: 25 }}
                      />
                      <Button
                        onClick={() => {
                          handleOperation("summarize");
                        }}
                        sx={{
                          backgroundColor: "#74AA9C",
                          color: theme.palette.primary.whites,
                          borderRadius: 3,
                          gap: 1,
                          "&:hover": {
                            backgroundColor: "#409c80",
                          },
                          flexGrow: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Kode Mono', monospace",
                            fontWeight: "bold",
                          }}
                        >
                          Summarize
                        </Typography>
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={sublist_icon}
                        style={{ width: 25, height: 25 }}
                      />
                      <Button
                        onClick={() => {
                          handleOperation("resources");
                        }}
                        sx={{
                          flexGrow: 1,
                          backgroundColor: "#74AA9C",
                          color: theme.palette.primary.whites,
                          borderRadius: 3,
                          gap: 1,
                          "&:hover": {
                            backgroundColor: "#409c80",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Kode Mono', monospace",
                            fontWeight: "bold",
                          }}
                        >
                          Resources
                        </Typography>
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src={sublist_icon}
                        style={{ width: 25, height: 25 }}
                      />
                      <Button
                        onClick={() => {
                          handleOperation("keyConcepts");
                        }}
                        sx={{
                          backgroundColor: "#74AA9C",
                          color: theme.palette.primary.whites,
                          borderRadius: 3,
                          gap: 1,
                          "&:hover": {
                            backgroundColor: "#409c80",
                          },
                          flexGrow: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Kode Mono', monospace",
                            fontWeight: "bold",
                          }}
                        >
                          Evaluate Key Concepts
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                </Slide>
              )}

              <IconButton
                onClick={handleCloseDocView}
                sx={{
                  backgroundColor: "#f44336",
                  color: theme.palette.primary.whites,
                  borderRadius: 3,
                  gap: 1,
                  "&:hover": {
                    backgroundColor: "#f0180a",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Kode Mono', monospace",
                    fontWeight: "bold",
                  }}
                >
                  Close
                </Typography>
                <CloseFullscreenIcon />
              </IconButton>
            </Box>
          </Slide>
        )}

        {selectedDoc && (
          <iframe
            src={selectedDoc}
            width="100%"
            height="100%"
            onLoad={handleIframeLoad}
          ></iframe>
        )}
      </Box>
      {openChatGPT && (
        <ChatGPTBox
          chatGPTOperation={chatGPTOperation}
          document={JSON.stringify(docData)}
          onClose={handleChatGPTClose}
        />
      )}
    </ThemeProvider>
  );
}
