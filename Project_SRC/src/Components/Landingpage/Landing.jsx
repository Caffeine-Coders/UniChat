"use client";
import React from 'react';
import MultiLayerParallax from './MultiLayerParallax.jsx';
import { Box, Typography } from '@mui/material';
import { ThemeConsumer, ThemeProvider } from 'styled-components';
import { darktheme, lighttheme } from '../Themes/Themes.jsx';
import layerer from '../../Assets/aboutimg2.jpeg';
import logo from "../../Assets/aboutimg1.png";
import logo2 from "../../Assets/collab.jpeg";
import logo3 from "../../Assets/teacher.png";
import logo4 from "../../Assets/AI.jpeg";
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Fab from '@mui/material/Fab';
import LoginIcon from '@mui/icons-material/Login';
import { useRouter } from 'next/navigation.js';
import LandingNav from '../LandingNav/LandingNav.jsx';
import TimeLine from './TimeLine.jsx';

export default function LandingPage() {
    const router = useRouter();
    return (
        <div>
            <LandingNav />
            <TimeLine />
            <MultiLayerParallax />
            <ThemeProvider theme={darktheme}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    zIndex: 9999,
                    backgroundImage: "linear-gradient(145deg, hsl(0deg 0% 0%) 0%, hsl(270deg 75% 3%) 40%, hsl(271deg 74% 6%) 62%, hsl(270deg 71% 9%) 72%, hsl(270deg 72% 13%) 79%, hsl(269deg 72% 15%) 84%, hsl(270deg 73% 19%) 89%, hsl(269deg 71% 22%) 93%, hsl(270deg 72% 25%) 96%, hsl(270deg 72% 28%) 100%)",
                    flexDirection: "column",
                }}
            >
             
                <Box 
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        width: "100%",
                        height: "100%",
                    }}
                >
                     <Typography variant='h2'
                        sx={{
                            fontFamily: '"Kode Mono", monospace',
                            fontWeight: 100,
                            textAlign : "center",
                            color: darktheme.palette.primary.textcolor,
                            "&:hover": {color: darktheme.palette.primary.ButtonColor, cursor: "pointer"},
                            mb: 2,
                            mt: 2,
                            fontSize: 100,
                            display: "inline-block",
                        }}
                        noWrap
                     >
                        About Us
                    </Typography>
                </Box>

                {/* first about page */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: 10 }}
                    transition={{ delay: 0.5 }}
                    exit={{ opacity: 1 }} // Set exit property to keep the final state
                >
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        mt: 10,
                        ml: 5
                    }}>
                    <Box position={'relative'}  sx={{
                        '&:hover':{
                            transform: "rotate(2deg)",
                            transition: "transform 0.5s"
                        }
                    }} >
                        <Box
                            position={"absolute"}
                                sx={{
                                mr: 2,
                                ml: 2,
                                borderRadius: 8, // Add border radius for a modular design
                                overflow: "hidden", // Hide overflow to maintain border radius
                                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)', // Add shadow for depth effect
                                }}
                            >
                                <Image src={logo.src} alt="Image" height={450} width={450}/>
                            </Box>
                
                            <Box
                            position={"relative"}
                                sx={{
                                mr: 2,
                                ml: 10,
                                borderRadius: 8, // Add border radius for a modular design
                                overflow: "hidden", // Hide overflow to maintain border radius
                                zIndex: 1, // Ensure it's above the first box
                                transform: "rotate(10deg)", // Tilt the box slightly
                                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' // Add shadow for depth effect
                                }}
                            >
                                <Image src={layerer.src} alt="Image" height={450} width={450} />
                            </Box>
                        </Box>

                        <Box
                            position="relative"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                width: "50%",
                                height: "100%",
                                ml: 10
                            }}
                        >
                                <Typography variant = "body1" sx={{ 
                                    fontFamily: '"Kode Mono", monospace',
                                    fontWeight: 100,
                                    textAlign : "center",
                                    color: darktheme.palette.primary.textcolor,
                                    "&:hover": {color: darktheme.palette.primary.ButtonColor, cursor: "pointer"},
                                    mb: 2,
                                    mt: 2,
                                    fontSize: 30,
                                    display: "inline-block",
                                }}> 
                                    Unichat is the ultimate project management application that seamlessly integrates with Google Docs and leverages the power of Discord for communication.  
                                </Typography>
                        </Box>
                    </Box>
                </motion.div>

                {/* second about page */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ y: 10 }}
                    transition={{ delay: 1 }}
                    exit={{ opacity: 1 }} // Set exit property to keep the final state
                >
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        mt: 15,
                        ml: 5
                    }}>
                        <Box
                            position="relative"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                width: "50%",
                                height: "100%",
                                mr: 10
                                
                            }}
                        >
                                <Typography variant = "body1" sx={{ 
                                   fontFamily: '"Kode Mono", monospace',
                                    fontWeight: 100,
                                    textAlign : "center",
                                    color: darktheme.palette.primary.textcolor,
                                    "&:hover": {color: darktheme.palette.primary.ButtonColor, cursor: "pointer"},
                                    mb: 2,
                                    mt: 2,
                                    fontSize: 30,
                                    display: "inline-block",
                                }}> 
                                    With Unichat, teams can collaborate effectively, manage projects efficiently, and brainstorm ideas effortlessly with the help of AI.
                                </Typography>
                        </Box>
                        <Box position={'relative'} sx={{
                            '&:hover':{
                                transform: "rotate(2deg)",
                                transition: "transform 0.5s"
                            }
                        
                        }}>
                            <Box
                                position={"absolute"}
                                    sx={{
                                    mr: 2,
                                    ml: 2,
                                    borderRadius: 8, // Add border radius for a modular design
                                    overflow: "hidden", // Hide overflow to maintain border radius
                                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' // Add shadow for depth effect
                                    }}
                                >
                                    <Image src={layerer.src} alt="Image" height={450} width={450} />
                                </Box>
                          
                                <Box
                                position={"relative"}
                                    sx={{
                                    mr: 2,
                                    ml: 10,
                                    borderRadius: 8, // Add border radius for a modular design
                                    overflow: "hidden", // Hide overflow to maintain border radius
                                    zIndex: 1, // Ensure it's above the first box
                                    transform: "rotate(10deg)", // Tilt the box slightly
                                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' // Add shadow for depth effect
                                    }}
                                >
                                    <Image src={logo2.src} alt="Image" height={450} width={450} />
                                </Box>
                            </Box>
                        </Box>
                    </motion.div>


                {/* third about page */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ y: 10 }}
                    transition={{ delay: 1 }}
                    exit={{ opacity: 1 }} // Set exit property to keep the final state
                >
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        mt: 15,
                        ml: 5
                    }}>
                    <Box position={'relative'}   sx={{
                        '&:hover':{
                            transform: "rotate(2deg)",
                            transition: "transform 0.5s"
                        }
                    
                    }}>
                        <Box
                            position={"absolute"}
                                sx={{
                                mr: 2,
                                ml: 2,
                                borderRadius: 8, // Add border radius for a modular design
                                overflow: "hidden", // Hide overflow to maintain border radius
                                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' // Add shadow for depth effect
                                }}
                            >
                                <Image src={logo2.src} alt="Image" height={450} width={450} />
                            </Box>
                            {/* Second Box */}
                            <Box
                            position={"relative"}
                                sx={{
                                mr: 2,
                                ml: 10,
                                borderRadius: 8, // Add border radius for a modular design
                                overflow: "hidden", // Hide overflow to maintain border radius
                                zIndex: 1, // Ensure it's above the first box
                                transform: "rotate(10deg)", // Tilt the box slightly
                                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' // Add shadow for depth effect
                                }}
                            >
                                <Image src={logo3.src} alt="Image" height={450} width={450} />
                            </Box>
                        </Box>

                        <Box
                            position="relative"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                width: "50%",
                                height: "100%",
                                ml: 10
                            }}
                        >
                                <Typography variant = "body1" sx={{ 
                                    fontFamily: '"Kode Mono", monospace',
                                    fontWeight: 100,
                                    textAlign : "center",
                                    color: darktheme.palette.primary.textcolor,
                                    "&:hover": {color: darktheme.palette.primary.ButtonColor, cursor: "pointer"},
                                    mb: 2,
                                    mt: 2,
                                    fontSize: 30,
                                    display: "inline-block",
                                }}> 
                                    Unichat empowers educators to oversee student activities, monitor progress, and facilitate seamless communication, enhancing classroom efficiency and student engagement.
                                </Typography>
                        </Box>
                    </Box>
                </motion.div>


                {/* fourth about page */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    animate={{ y: 10 }}
                    transition={{ delay: 1 }}
                    exit={{ opacity: 1 }} // Set exit property to keep the final state
                >

                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        mt: 15,
                        ml: 5
                    }}>
                        <Box
                            position="relative"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                width: "50%",
                                height: "100%",
                                mr: 10
                                
                            }}
                        >
                                <Typography variant = "body1" sx={{ 
                                    fontFamily: '"Kode Mono", monospace',
                                    fontWeight: 100,
                                    textAlign : "center",
                                    color: darktheme.palette.primary.textcolor,
                                    "&:hover": {color: darktheme.palette.primary.ButtonColor, cursor: "pointer"},
                                    mb: 2,
                                    mt: 2,
                                    fontSize: 30,
                                    display: "inline-block",
                                }}> 
                                    With AI assistance, students can harness their creativity and brainstorm innovative ideas, fostering a collaborative learning environment and enhancing problem-solving skills.
                                </Typography>
                        </Box>
                        <Box position={'relative'} 
                            sx={{
                                '&:hover':{
                                    transform: "rotate(2deg)",
                                    transition: "transform 0.5s"
                                }
                            }}
                        >
                            <Box
                                position={"absolute"}
                                    sx={{
                                    mr: 2,
                                    ml: 2,
                                    borderRadius: 8, // Add border radius for a modular design
                                    overflow: "hidden", // Hide overflow to maintain border radius
                                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' // Add shadow for depth effect
                                    }}
                                >
                                    <Image src={logo3.src} alt="Image" height={450} width={450} />
                                </Box>
                                {/* Second Box */}
                                <Box
                                position={"relative"}
                                    sx={{
                                    mr: 2,
                                    ml: 10,
                                    borderRadius: 8, // Add border radius for a modular design
                                    overflow: "hidden", // Hide overflow to maintain border radius
                                    zIndex: 1, // Ensure it's above the first box
                                    transform: "rotate(10deg)", // Tilt the box slightly
                                    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' // Add shadow for depth effect
                                    }}
                                >
                                    <Image src={logo4.src} alt="Image" height={450} width={450} />
                                </Box>
                            </Box>
                        </Box>
                    </motion.div>
                    
                    <Box
                        sx={{
                            mt: 10,
                        }}
                    >
                    </Box>          
                </Box>
                </ThemeProvider>
        </div>
      
    );
}