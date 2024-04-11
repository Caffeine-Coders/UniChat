"use client";
import React from "react";
import { Box, Button, Typography, IconButton, Slide } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import ThemeContext from "../../../../Components/Contexts/themeContext.jsx";
import { ThemeProvider } from "@mui/system";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import chatgpt_logo from "../../../../Assets/chatgpt-bw.png";
import sublist_icon from "../../../../Assets/sublist_icon.png";
import { getDoc } from "../../../../Services/GoogleDocs_Routines";
import ChatGPTBox from "../../../../Components/ChatGPT/chatGPTBox.jsx"
import Chatbot from "../../../../Components/ChatGPT/chatGPTBox.jsx";
export default function DocView({ selectedDoc, selectedDocId }) {
  // sessionStorage.setItem("googleAccessToken", "ya29.a0Ad52N3_Jn1OEJVzekX2qdraT8tRxbkhvZIiWHmt8cuRqGZ77hDJNZ_EqVLBTtTHnXCUqnEckhwullSzWA_w5v9Uh-cMmRgxy_-YT3IpwL3QkyZk8wScihMs4NPixuMshoQ45d-bWU50umYeHSwiXPXob4u7JmPNz9ZYaCgYKAQQSARISFQHGX2MiMH5vm8n4yXtPkQ2tNxjc5g0170");
  // const { theme } = useContext(ThemeContext);
  console.log("in teacher",selectedDocId)
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
    console.log("doc id",selectedDocId, operation)
    const [docNameReceived, docDataReceived] = await getDoc(selectedDocId);
    setDocData({ docName: docNameReceived, docContent: docDataReceived });
    setChatGPTOperation(operation);
    setOpenChatGPT(true);
    console.log("done")
  };

  return (
    <ThemeProvider >
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
                  // color: theme.palette.primary.main,
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
                          // color: theme.palette.primary.whites,
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
                          // color: theme.palette.primary.whites,
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
                          // color: theme.palette.primary.whites,
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
                  // color: theme.palette.primary.whites,
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
        <Chatbot
          chatGPTOperation={chatGPTOperation}
          document={JSON.stringify(docData)}
          onClose={handleChatGPTClose}
        />
      )}
    </ThemeProvider>
  );
}

// "use client";
// import React from "react";
// import { Box, Button, Typography, IconButton, Slide } from "@mui/material";
// import { useContext, useState, useEffect } from "react";
// import Image from "next/image";
// import { ThemeProvider } from "@mui/system";
// import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
// import { getDoc } from "../../../../Services/GoogleDocs_Routines";
// import ThemeContext from "../../../../Components/Contexts/themeContext.jsx";
// import sublist_icon from "../../../../Assets/sublist_icon.png";
// import useDrivePicker from 'react-google-drive-picker'
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import CloseIcon from '@mui/icons-material/Close';
// import SearchIcon from '@mui/icons-material/Search';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';

// export default function DocView({ selectedDoc, selectedDocId }) {
// //   const { theme } = useContext(ThemeContext);
//   const [showGPTOptions, setShowGPTOptions] = useState(false);
//   const [isIframeLoaded, setIsIframeLoaded] = useState(false);
//   const [dial,setDial] = React.useState(false)
//   const [openPicker, data, authResponse] = useDrivePicker()
//   const handleCloseDocView = () => {
//     localStorage.setItem("selectedDoc", "noDocSelected");
//   };

//   const handleChatGPTClick = () => {
//     setShowGPTOptions(!showGPTOptions);
//   };

//   const handleIframeLoad = () => {
//     setIsIframeLoaded(true);
//   };
//   const handledialClose = () => {
//     setDial(false);
//     };
//     const handledialOpen = () => {
//     setDial(true);
//     };
  
//   const opendrive = () => {
//     setDial(false);
//     openPicker({
//         clientId: '627377626990-dh0rifs0dih0c2ttl6l6f6garog9vebt.apps.googleusercontent.com',
//         developerKey: 'AIzaSyBvze5ee8eCbgBmy9uqFQutYFYB3ydhZCA',
//         viewId: "DOCS",
//         showUploadView: true,
//         // token: apiToken,
//         showUploadFolders: true,
//         supportDrives: true,
//         multiselect: true,
//         callbackFunction: async (data) => {
//           if (data.action === "picked") {
//             window.location.reload();
//           }
//         },
//       })
//     }
//     const studentlist = [ 'Sai Vishnu Anudeep Kadiyala' , 'Satwik Bhasin']
//     let [studentchecked, setstudentChecked] = React.useState([]);
//     let newCheckedStudents = []
//     const handlestudentToggle = (value) => () => {
//       const currentIndex = studentchecked.indexOf(value);
//       newCheckedStudents = [...studentchecked];

//       if (currentIndex === -1) {
//         newCheckedStudents.push(value);
//       } else {
//         newCheckedStudents.splice(currentIndex, 1);
//       }

//       setstudentChecked(newCheckedStudents);
//       console.log("checked", newCheckedStudents)
//   };

//   return (
//     <ThemeProvider>
//       <Box
//         sx={{
//           position: "fixed",
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         {isIframeLoaded && (
//           <Slide
//             direction="right"
//             timeout={{ enter: 1000 }}
//             in={true}
//             mountOnEnter
//             unmountOnExit
//           >
//             <Box
//               sx={{
//                 position: "absolute",
//                 left: 60,
//                 top: 50,
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: 3,
//                 maxWidth: 200,
//                 width: 200,
//                 overflow: "hidden",
//               }}
//             >
//               <IconButton
//                 onClick={handleChatGPTClick}
//                 sx={{
//                   backgroundColor: "#74AA9C",
//                 //   color: theme.palette.primary.main,
//                   borderRadius: 3,
//                   gap: 1,
//                   "&:hover": {
//                     backgroundColor: "#409c80",
//                   },
//                   zIndex: 1,
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontFamily: "'Kode Mono', monospace",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   ChatGPT
//                 </Typography>
//                 <Image 
//                     src="https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png" 
//                     width={25} 
//                     height={25} 
//                 />
//               </IconButton>
//               {showGPTOptions && (
//                 <Slide
//                   direction="down"
//                   in={showGPTOptions}
//                   timeout={{ enter: 500 }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexDirection: "column",
//                       gap: 1,
//                       mt: -2,
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexDirection: "row",
//                         justifyContent: "center",
//                         alignContent: "center",
//                         alignItems: "center",
//                       }}
//                     >
//                       <Image
//                         src={sublist_icon}
//                         style={{ width: 25, height: 25 }}
//                       />
//                       <Button
//                         onClick={() => {
//                           getDoc(selectedDocId);
//                         }}
//                         sx={{
//                           backgroundColor: "#74AA9C",
//                         //   color: theme.palette.primary.whites,
//                           borderRadius: 3,
//                           gap: 1,
//                           "&:hover": {
//                             backgroundColor: "#409c80",
//                           },
//                           flexGrow: 1,
//                         }}
//                       >
//                         <Typography
//                           sx={{
//                             fontFamily: "'Kode Mono', monospace",
//                             fontWeight: "bold",
//                           }}
//                         >
//                           Summarize
//                         </Typography>
//                       </Button>
//                     </Box>
//                     <Box
//                       sx={{
//                         display: "flex",
//                         flexDirection: "row",
//                         justifyContent: "center",
//                         alignContent: "center",
//                         alignItems: "center",
//                       }}
//                     >
//                       <Image
//                         src={sublist_icon}
//                         style={{ width: 25, height: 25 }}
//                       />
//                       <Button
//                         sx={{
//                           flexGrow: 1,
//                           backgroundColor: "#74AA9C",
//                         //   color: theme.palette.primary.whites,
//                           borderRadius: 3,
//                           gap: 1,
//                           "&:hover": {
//                             backgroundColor: "#409c80",
//                           },
//                         }}
//                         onClick={handledialOpen}
//                       >
//                         <Typography
//                           sx={{
//                             fontFamily: "'Kode Mono', monospace",
//                             fontWeight: "bold",
//                           }}
//                         >
//                           Grade Document
//                         </Typography>
//                       </Button>
//                     </Box>
//                   </Box>
//                 </Slide>
//               )}

//               <IconButton
//                 onClick={handleCloseDocView}
//                 sx={{
//                   backgroundColor: "#f44336",
//                 //   color: theme.palette.primary.whites,
//                   borderRadius: 3,
//                   gap: 1,
//                   "&:hover": {
//                     backgroundColor: "#f0180a",
//                   },
//                 }}
//               >
//                 <Typography
//                   sx={{
//                     fontFamily: "'Kode Mono', monospace",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Close
//                 </Typography>
//                 <CloseFullscreenIcon />
//               </IconButton>
//             </Box>
//           </Slide>
//         )}

//         {selectedDoc && (
//           <iframe
//             src={selectedDoc}
//             width="100%"
//             height="100%"
//             onLoad={handleIframeLoad}
//           ></iframe>
//         )}
//       </Box>
//       <Dialog
//         open={dial}
//         onClose={handledialClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//         maxWidth="md"
//         fullWidth={true}
//         PaperProps={{ style: { height: '55vh', borderRadius: '15px'} }}
//         >
//         <div class='h-full w-full p-4 pb-0 mx-auto'>
//         <DialogTitle id="alert-dialog-title" style={{fontSize: '25px'}}>
//         <IconButton
//         edge="start"
//         color="inherit"
//         onClick={handledialClose}
//         aria-label="close"
//         sx={{ position: 'absolute', right: 8, top: 8 }}
//         >
//         <CloseIcon />
//         </IconButton>
//             {"Grade Document"}
//         </DialogTitle>
//         <DialogContent>
//             <DialogContentText id="alert-dialog-description">
//             <Box sx={{ width: '100%' }}>
//                 Select the student you are grading the document for:
//                 <hr/>
//               {studentlist.map((value) => {
//                            const labelId = `checkbox-list-secondary-label-${value}`;
//                            return (
//                            <ListItem
//                                key={value}
//                                secondaryAction={
//                                <Checkbox
//                                    edge="end"
//                                    onChange={handlestudentToggle(value)}

//                                    checked= {studentchecked.indexOf(value) !== -1}
//                                    inputProps={{ 'aria-labelledby': labelId }}
//                                />
//                                }
//                                disablePadding
//                                sx={{ justifyContent: 'center' }}
//                            >
//                                <ListItemButton>
//                                <ListItemText id={labelId} primary={value} />
//                                </ListItemButton>
//                            </ListItem>
//                            );
//                        })}
//                        <hr/>
//                        In the next step, select the document containing questions you want ChatGPT to grade. 
//             </Box>    
//             </DialogContentText>
//         </DialogContent>

//         </div>
//         <button onClick={opendrive} class="w-4/6 mx-auto mb-4 justify-center font-semibold tracking-wider  rounded-2xl bg-opacity-60 text-black bg-discordpurple-0 px-4 py-2">
//             Continue
//         </button>
//         </Dialog>
//     </ThemeProvider>
//   );
// }