"use client";
import React, { use, useState , useEffect} from "react";
import LoginBackground from "../../Assets/loginPage2.png";
import { Button, Typography, Box } from "@mui/material";
import { darktheme } from "../themes";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import { getAuth } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../../config.js";

const Login = () => {
  const [user, setUser] = useState(null); 

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
  };

  const signInWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    setUser(user);
  }

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background:
          "linear-gradient(145deg, hsl(0deg 0% 0%) 0%, hsl(270deg 75% 3%) 40%, hsl(271deg 74% 6%) 62%, hsl(270deg 71% 9%) 72%, hsl(270deg 72% 13%) 79%, hsl(269deg 72% 15%) 84%, hsl(270deg 73% 19%) 89%, hsl(269deg 71% 22%) 93%, hsl(270deg 72% 25%) 96%, hsl(270deg 72% 28%) 100%)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          mt: 10,
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Typography
          variant="h1"
          color="#cbabed"
          sx={{ fontFamily: darktheme.typography.fontFamily[2] }}
        >
          FIRST THING'S FIRST
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            top: 0,
            height: 400,
            width: 1000,
            borderRadius: 4,
            backgroundColor: "rgba(255, 255, 255, 0)",
            boxShadow: "0 10px 100px 0 rgba(31, 38, 135, 0.7)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            WebkitBackdropFilter: "blur(16.3px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 300,
                height: 300,
                mr: 10,
                backgroundImage: `url(${LoginBackground.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <Link href="/home"> */}
                <Button
                  variant="contained"
                  startIcon={<GoogleIcon />}
                  sx={{
                    backgroundColor: "#300e54",
                    height: 40,
                    width: 400,
                    borderRadius: 4,
                    "&:hover": {
                      backgroundColor: "#cbabed",
                      color: "#300e54",
                    },
                    fontFamily: '"Kode Mono", monospace',
                  }}

                  onClick={signInWithGoogle}
                >
                  Login with Google
                </Button>
              {/* </Link> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
