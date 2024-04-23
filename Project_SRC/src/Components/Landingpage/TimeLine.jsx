"use client";
import React, { useEffect, useState } from 'react';
import {Box, ThemeProvider, Typography} from '@mui/material';
import { darktheme } from '../Themes/themes.jsx';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useInView } from "react-intersection-observer";
 

function TimeLine() 
{
    const [atAbout, setAtAbout] = useState(false);
    const [atFoot, setAtFoot] = useState(false);


    return (
        <ThemeProvider theme={darktheme}>
            <Box
                sx={{
                    float: "left",
                    position: "fixed",
                    top : 80,
                    left: 0,
                    zIndex: 1000, // higher z-index to ensure it's on top
                    paddingLeft: 0, // Set paddingLeft to 0
                }}
   
            >
                <Timeline 
                position='left'
                    sx={{
                        color: (theme) => theme.palette.primary.whites, // Or any other color from your theme
                        height: '100vh'
                    }}
                >
                    <TimelineItem sx={{height: '100%'}}>
                        <TimelineSeparator>
                            <TimelineDot variant="filled"  
                                sx={{
                                    borderColor: (theme) => theme.palette.primary.ButtonColor, // Or any other color from your theme
                                    backgroundColor: (theme) => theme.palette.primary.ButtonColor, // Or any other color from your theme
                                }} 
                            />
                            <TimelineConnector sx={{
                                bgcolor: (theme) => theme.palette.primary.ButtonColor, // Or any other color from your theme
             
                            }}/>
                        </TimelineSeparator>
                        <TimelineContent>Home</TimelineContent>
                    </TimelineItem>


                    <TimelineItem  sx={{height: '100%'}}>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" 
                                sx={{
                                    borderColor: (theme) => theme.palette.primary.ButtonColor, // Or any other color from your theme
                                }}  
                            />
                            <TimelineConnector sx={{
                                bgcolor: (theme) => theme.palette.primary.ButtonColor, // Or any other color from your theme
                            }} />
                        </TimelineSeparator>
                        <TimelineContent>About</TimelineContent>
                    </TimelineItem>


                    <TimelineItem  sx={{height: '30%'}}>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" 
                                sx={{
                                    borderColor: (theme) => theme.palette.primary.ButtonColor, // Or any other color from your theme
                                  
                                }} 
                            />
                        </TimelineSeparator>
                        <TimelineContent>Footer</TimelineContent>
                    </TimelineItem>
                </Timeline>

            </Box>
        </ThemeProvider>
    );
}

export default TimeLine;