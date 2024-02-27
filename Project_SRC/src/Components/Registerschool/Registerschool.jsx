"use client";
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { FormControl, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Image from 'next/image';
import RegisterLogo from "../../Assets/Register.png";
import LandingNav from '../LandingNav/LandingNav';
import { darktheme } from '../Themes/Themes';
import Details from './Details';

export default function RegisterSchoolForm() {
    return (
        <ThemeProvider theme={darktheme}>
         
        <LandingNav />
        <Box
            sx={
                {
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100%',
                    width: '100%',
                    justifyContent: 'center',
                    alignContent: 'center',
                    backgroundImage: "linear-gradient(145deg, hsl(0deg 0% 0%) 0%, hsl(270deg 75% 3%) 40%, hsl(271deg 74% 6%) 62%, hsl(270deg 71% 9%) 72%, hsl(270deg 72% 13%) 79%, hsl(269deg 72% 15%) 84%, hsl(270deg 73% 19%) 89%, hsl(269deg 71% 22%) 93%, hsl(270deg 72% 25%) 96%, hsl(270deg 72% 28%) 100%)",
                    overflow: 'hidden',
                }
            }
        >
            <Box
                sx={
                    {
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        width: '55%',
                        mt: 8,
                    }
                }
            >
                <Image
                    src={RegisterLogo.src}
                    alt="Picture register school"
                    width={900}
                    height={900}
                />

            </Box>

            <Box
                sx={
                    {
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        width: '45%',
                        mt: 8,
                    }
                }
            >
                <Box
                    sx={{
                        mr: 2,
                        ml: 2,
                        height: 600,
                        width: 900,
                        borderRadius: 4,
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        boxShadow: "0 10px 100px 0 rgba(31, 38, 135, 0.7)",
                        backdropFilter: "blur(4px)",
                        WebkitBackdropFilter: "blur(4px)",
                        border: "1px solid rgba(255, 255, 255, 0.18)",
                        WebkitBackdropFilter: "blur(16.3px)",
                        display: "flex",
                        justifyContent:"left",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                  
                >

                    <Typography 
                        sx={{
                            color: "white",
                            fontFamily: '"Kode Mono", monospace',
                            fontWeight: 100,
                            letterSpacing: 5,
                            mt: 2,
                        }}
                        variant='h4'
                    >
                        Register Your School
                    </Typography>

                    <Details />
                </Box>
            </Box>
        </Box>
 
        </ThemeProvider>
    );
}