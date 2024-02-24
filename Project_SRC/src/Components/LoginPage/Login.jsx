"use client";
import React, { use, useState, useEffect } from "react";
import loginImage1 from "../../Assets/loginImage1.png";
import {
  Button,
  Typography,
  Box,
  TextField,
  Grid,
  Alert,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import { darktheme } from "../Themes/themes";
import Image from "next/image";
import GoogleIcon from "@mui/icons-material/Google";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ArrowForward } from "@mui/icons-material";
import Slide from "@mui/material/Slide";
import styled from "styled-components";
import Fade from "@mui/material/Fade";
import { getAuth } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import AuthContext from "@/Components/Contexts/authContext";
import { useContext } from "react";
import app from "../../../config";
import Logo from "../../Assets/logo.png";

import {
  classifyUser,
  getLoggedInUserDetails,
} from "../../Services/authentication";
import Link from "next/link";

const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }

  .MuiInputBase-root:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  .MuiOutlinedInput-root {
    border-radius: 10px;
  }

  .MuiInputBase-input {
    color: #bbbbbb;
  }

  .MuiFormLabel-root {
    color: #bbbbbb;
  }
`;

const InvalidUser = () => {
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
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h2"
        color="#cbabed"
        sx={{
          fontFamily: darktheme.typography.fontFamily[2],
          userSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
        }}
      >
        <span>You are not authorized to access this content</span>
      </Typography>
    </Box>
  );
};

const LoginForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState(null);
  const router = useRouter();

  const handleAdditionalInfoSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  const validate = () => {
    if (!firstName || !lastName) {
      setAlert("Please fill out all fields marked with *.");
      return;
    } else {
      setAlert(null);
      router.push("/home");
    }
  };

  return (
    <Box
      sx={{
        marginTop: 0,
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {alert && <Alert severity="error">{alert}</Alert>}
      <Box
        component="form"
        noValidate
        onSubmit={handleAdditionalInfoSubmit}
        sx={{ mt: 3 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <StyledTextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              fullWidth
              id="email"
              label="School Email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
            borderRadius: 4,
            backgroundColor: "#300e54",
            "&:hover": {
              backgroundColor: "#cbabed",
              color: "#300e54",
            },
            fontFamily: '"Kode Mono", monospace',
          }}
        >
          Go
        </Button>
      </Box>
    </Box>
  );
};

const Login = () => {
  const [user, setUser] = useState(null);
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);
  const [invalidUser, setInvalidUser] = useState(false);
  const router = useRouter();

  const { setIsAuthenticated, setUserImage } = useContext(AuthContext);

  const signInWithGoogle = async () => {
    const loggedInUser = await getLoggedInUserDetails();
    if (loggedInUser) {
      // User is logged in.
      const userClassification = await classifyUser(loggedInUser.email);
      if (userClassification.type === "Registered") {
        // Registered User
        setIsAuthenticated(true);
        setUserImage(loggedInUser.photoURL);
        localStorage.setItem("userImage", loggedInUser.photoURL);
        console.log("isFirstTimeLogin: ", userClassification.isFirstTimeLogin);
        if (userClassification.isFirstTimeLogin === "true") {
          setLoginFormVisible(true);
        } else if (userClassification.isFirstTimeLogin === "false") {
          router.push("/home");
        }
      } else if (userClassification.type === "Unregistered") {
        // Unregistered/Invalid User
        setInvalidUser(true);
      }
    } else {
      // No user is signed in.
      signInUser();
    }
  };

  const signInUser = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    setUser(user);
    console.loh(" User signed in");
    signInWithGoogle();
  };

  if (invalidUser) {
    return <InvalidUser />;
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
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0)",
          boxShadow: "0 10px 100px 0 rgba(31, 38, 135, 0.7)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(16.3px)",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Toolbar>
          <Link href="/">
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: "",
                fontFamily: '"Kode Mono", monospace',
              }}
            >
              UniChat
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          position: "fixed",
          width: "100vw",
          height: "60vh",
          top: 0,
        }}
      >
        <Box sx={{ overflow: "hidden", height: 380 }}>
          <Slide
            direction="up"
            in={isLoginFormVisible}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 900, exit: 0 }}
          >
            <Typography
              variant="h1"
              color="#cbabed"
              sx={{
                fontFamily: darktheme.typography.fontFamily[2],
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none",
              }}
            >
              <span>More About You</span>
            </Typography>
          </Slide>
        </Box>
        <Box sx={{ overflow: "hidden", height: 360 }}>
          <Slide
            direction="up"
            in={!isLoginFormVisible}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 1400, exit: 0 }}
          >
            <Typography
              variant="h1"
              color="#cbabed"
              sx={{
                fontFamily: darktheme.typography.fontFamily[2],
                userSelect: "none",
                WebkitUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none",
              }}
            >
              <span>FIRST THINGS FIRST</span>
            </Typography>
          </Slide>
        </Box>
      </Box>
      <Box
        sx={{
          top: 250,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "fixed",
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
          <Fade
            in={!isLoginFormVisible}
            timeout={{ enter: 2000, exit: 10 }}
            mountOnEnter
            unmountOnExit
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                position: "fixed",
              }}
            >
              <Box
                sx={{
                  width: 300,
                  height: 300,
                  mr: 10,
                  backgroundImage: `url(${loginImage1.src})`,
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
                <Button
                  variant="contained"
                  startIcon={<GoogleIcon />}
                  onClick={() => {
                    signInWithGoogle();
                  }}
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
                >
                  Login with Google
                </Button>
              </Box>
            </Box>
          </Fade>
          <Fade
            in={isLoginFormVisible}
            timeout={{ enter: 1000, exit: 0 }}
            mountOnEnter
            unmountOnExit
          >
            <Box>
              <LoginForm />
            </Box>
          </Fade>
        </Box>
      </Box>
      {isLoginFormVisible && (
        <Box
          sx={{
            position: "fixed",
            bottom: 20,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: 2,
          }}
        >
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => setLoginFormVisible(false)}
            sx={{
              backgroundColor: "#300e54",
              width: 100,
              "&:hover": {
                backgroundColor: "#cbabed",
                color: "#300e54",
              },
              fontFamily: '"Kode Mono", monospace',
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            onClick={() => router.push("/home")}
            sx={{
              backgroundColor: "#300e54",
              width: 100,
              "&:hover": {
                backgroundColor: "#cbabed",
                color: "#300e54",
              },
              fontFamily: '"Kode Mono", monospace',
            }}
          >
            Skip
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Login;
