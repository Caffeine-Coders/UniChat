"use client";
import { motion } from "framer-motion";
import NavBar from "../NavBar/NavBar.jsx";
import Box from "@mui/material/Box";
import Discord from "../Discord/Discord.jsx";
import React from "react";
import SideBar from "../SideBar/Sidebar.jsx";
import Loader from "../Loading/Loader.jsx";
import ThemeContext from "../Contexts/themeContext.jsx";
import { darktheme } from "../Themes/Themes.jsx";
import { useState, useContext, useEffect } from "react";
import AuthContext, { AuthProvider } from "../Contexts/authContext.jsx";
import { fetchStudentProjects } from "../../Services/StudentProjects";
import { ThemeProvider } from "styled-components";

export default function HomeComponent() {
  const [theme, setTheme] = useState(darktheme);

  const [show, setShow] = React.useState(false);

  const { studentId } = useContext(AuthContext);

  const [projects, setProjects] = useState([]);
  const [discordServerId, setDiscordServerId] = useState("");

  const getStudentProjects = async () => {
    const fetchedProjects = await fetchStudentProjects(studentId);
    setProjects(fetchedProjects);
    if (fetchedProjects) {
      localStorage.setItem("discordServerId", "noProjectSelected");
      setDiscordServerId("noProjectSelected");
    } else {
      localStorage.setItem("discordServerId", "noProjectsFound");
      setDiscordServerId("noProjectsFound");
    }
  };

  useEffect(() => {
    getStudentProjects();
  }, [studentId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const discordId = localStorage.getItem("discordServerId");
      if (discordId !== discordServerId) {
        setDiscordServerId(discordId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [discordServerId]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(true);
    }, 1500); // Show Box after 500 milliseconds

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {show ? (
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ ease: "easeInOut", duration: 0.3 }}
          >
            <Box
              sx={{
                width: "100vw",
                height: "100vh",
                backgroundImage:
                  theme === darktheme
                    ? "linear-gradient(145deg, hsl(0deg 0% 0%) 0%, hsl(270deg 75% 3%) 40%, hsl(271deg 74% 6%) 62%, hsl(270deg 71% 9%) 72%, hsl(270deg 72% 13%) 79%, hsl(269deg 72% 15%) 84%, hsl(270deg 73% 19%) 89%, hsl(269deg 71% 22%) 93%, hsl(270deg 72% 25%) 96%, hsl(270deg 72% 28%) 100%)"
                    : "linear-gradient(145deg, hsl(0deg 0% 87%) 0%, hsl(270deg 8% 80%) 20%, hsl(270deg 16% 74%) 44%, hsl(270deg 24% 67%) 65%, hsl(270deg 32% 61%) 76%, hsl(269deg 40% 54%) 82%, hsl(270deg 48% 48%) 88%, hsl(270deg 56% 41%) 92%, hsl(270deg 64% 35%) 96%, hsl(270deg 72% 28%) 100%)",
                overflow: "auto",
              }}
            >
              <Box
                sx={{
                  position: "fixed",
                  maxWidth: { xl: "80%", lg: "75%" },
                  zIndex: 9999,
                  marginLeft: 43,
                  marginTop: 2,
                }}
              >
                <ThemeContext.Provider value={{ theme, setTheme }}>
                  <SideBar projects={projects} />
                </ThemeContext.Provider>
              </Box>
              <Box
                sx={{
                  position: "fixed",
                  maxWidth: { xl: "80%", lg: "75%" },
                  zIndex: 9999,
                }}
              >
                <ThemeContext.Provider value={{ theme, setTheme }}>
                  <AuthProvider>
                    <NavBar />
                  </AuthProvider>
                </ThemeContext.Provider>
              </Box>
              <Box
                sx={{
                  maxWidth: { xl: "80%", lg: "75%" },
                  height: { xl: "80%", lg: "85%", md: "75%" },
                  position: "fixed",
                  left: 344,
                  top: 95,
                  width: 1080,
                  borderRadius: 3,
                  padding: 0.5,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  backgroundColor: discordServerId === "noProjectSelected" ? theme.palette.primary.main : "#2e3035",
                  boxShadow: "0 10px 100px 0 rgba(31, 38, 135, 0.7)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  border: theme.palette.primary.main,
                  WebkitBackdropFilter: "blur(16.3px)",
                }}
              >
                <ThemeContext.Provider value={{ theme, setTheme }}>
                  <Discord props={[discordServerId, projects]} />
                </ThemeContext.Provider>
              </Box>
            </Box>
          </motion.div>
        ) : (
          <Loader />
        )}
      </Box>
    </ThemeProvider>
  );
}
