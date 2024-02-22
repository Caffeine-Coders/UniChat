"use client";
import { motion } from "framer-motion";
import NavBar from "../NavBar/NavBar.jsx";
import Box from "@mui/material/Box";
import Discord from "../discord/discord";
import React from "react";
import SideBar from "../SideBar/sidebar.jsx";
import Loader from "../Loading/loader";
import ThemeContext from "../themeContext.jsx";
import { darktheme } from "../themes.jsx";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthContext, { AuthProvider } from "../authContext";

export default function HomeComponent() {
  const { isAuthenticated } = useContext(AuthContext);

  const [theme, setTheme] = useState(darktheme);

  const [show, setShow] = React.useState(false);

  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(true);
    }, 1500); // Show Box after 500 milliseconds

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated]);


  // if (!isAuthenticated) {
  //   return null; // or return a different component or some 'loading' indicator
  // }

  return (
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
              overflow: "auto", // Add overflow: auto to enable scrolling if needed
            }}
          >
            <ThemeContext.Provider value={{ theme, setTheme }}>
              <SideBar />
            </ThemeContext.Provider>
            <Box
              sx={{
                position: "fixed",
                maxWidth: { xl: "80%", lg: "75%" },
                zIndex: 9999,
                //marginLeft: 43,
                //marginTop: 2,
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
                height: { xl: "80", lg: "86%", md: "70%" },
                position: "fixed",
                left: 344,
                top: 95,
                width: 1080,
                backgroundColor: "#2F3035",
                borderRadius: 3,
                padding: 0.5,
              }}
            >
              <Discord />
            </Box>
          </Box>
        </motion.div>
      ) : (
        <Loader />
      )}
    </Box>
  );
}
