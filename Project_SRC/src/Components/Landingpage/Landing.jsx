"use client";
import React from 'react';
import MultiLayerParallax from './MultiLayerParallax.jsx';
import { Box, Typography } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { lighttheme } from '../themes.jsx';
import layerer from '../../Assets/aboutimg2.jpeg';
import logo from "../../Assets/aboutimg1.png";
import logo2 from "../../Assets/collab.jpeg";
import logo3 from "../../Assets/teacher.png";
import logo4 from "../../Assets/AI.jpeg";
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
export default function LandingPage() {
    return (
        <div>
            <MultiLayerParallax />
            <ThemeProvider theme={lighttheme}>
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    zIndex: 9999,
                    backgroundImage: "linear-gradient(145deg, hsl(0deg 0% 87%) 0%, hsl(270deg 8% 80%) 20%, hsl(270deg 16% 74%) 44%, hsl(270deg 24% 67%) 65%, hsl(270deg 32% 61%) 76%, hsl(269deg 40% 54%) 82%, hsl(270deg 48% 48%) 88%, hsl(270deg 56% 41%) 92%, hsl(270deg 64% 35%) 96%, hsl(270deg 72% 28%) 100%)",
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
                            fontFamily: '"Protest Riot", sans-serif',
                            fontWeight: 700,
                            textAlign : "center",
                            color: (theme) => theme.palette.primary.rare,
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
                    transition={{ delay: 1 }}
                    exit={{ opacity: 1 }} // Set exit property to keep the final state
                >
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    mt: 10,
                    ml: 5
                }}>
                <Box position={'relative'}  >
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
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                            >
                                <Image src={logo.src} alt="Image" height={450} width={450} />
                            </motion.div>
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
                                fontFamily: '"Protest Riot", sans-serif',
                                fontWeight: 700,
                                textAlign : "center",
                                color: (theme) => theme.palette.primary.hover,
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
                                    fontFamily: '"Protest Riot", sans-serif',
                                    fontWeight: 700,
                                    textAlign : "center",
                                    color: (theme) => theme.palette.primary.hover,
                                    mb: 2,
                                    mt: 2,
                                    fontSize: 30,
                                    display: "inline-block",
                                }}> 
                                    With Unichat, teams can collaborate effectively, manage projects efficiently, and brainstorm ideas effortlessly with the help of AI.
                                </Typography>
                        </Box>
                        <Box position={'relative'} >
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
                        height: "100%",
                        mt: 15,
                        ml: 5
                    }}>
                    <Box position={'relative'}  >
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
                                    fontFamily: '"Protest Riot", sans-serif',
                                    fontWeight: 700,
                                    textAlign : "center",
                                    color: (theme) => theme.palette.primary.hover,
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
                                    fontFamily: '"Protest Riot", sans-serif',
                                    fontWeight: 700,
                                    textAlign : "center",
                                    color: (theme) => theme.palette.primary.hover,
                                    mb: 2,
                                    mt: 2,
                                    fontSize: 30,
                                    display: "inline-block",
                                }}> 
                                    With AI assistance, students can harness their creativity and brainstorm innovative ideas, fostering a collaborative learning environment and enhancing problem-solving skills.
                                </Typography>
                        </Box>
                        <Box position={'relative'} >
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