"use client";
import Content from "./content"
import React, { useEffect, useState } from 'react';
import "../../components/dash.css"
import Box from '@mui/material/Box';
import DocView from "../components/docview";
import ThemeContext from "../../../../Components/Contexts/themeContext.jsx";
export default function Projectdetails() {
    const [selectedDoc, setSelectedDoc] = useState("noDocSelected");
    const [selectedDocId, setSelectedDocId] = useState("noDocSelected");
    const [showDocView, setShowDocView] = useState(false);
  
    useEffect(() => {
        const intervalId = setInterval(() => {
          const selectedDoc = localStorage.getItem("selectedDoc");
          const selectedDocId = localStorage.getItem("selectedDocId");
          if (
            selectedDoc === "noDocSelected" ||
            selectedDocId === "noDocSelected"
          ) {
            setShowDocView(false);
          } else {
            setSelectedDoc(selectedDoc);
            setSelectedDocId(selectedDocId);
            setShowDocView(true);
          }
        }, 1000);
    
        return () => clearInterval(intervalId);
      }, [selectedDoc]);
    
      useEffect(() => {
        window.onbeforeunload = () =>
          localStorage.setItem("selectedDoc", "noDocSelected");
        return () => {
          window.onbeforeunload = null;
        };
      }, []);
    
    return (
        <div style={{background:'#efebf3', minHeight:'100vh'}}>
            
            {showDocView ?(
                <Box
                  sx={{
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    zIndex: 2,
                  }}
                >
                  <ThemeContext.Provider >
                    <DocView
                      selectedDoc={selectedDoc}
                      selectedDocId={selectedDocId}
                    />
                  </ThemeContext.Provider>
                </Box>
              ):
              <Content/>
              }
            </div>
    )
  }