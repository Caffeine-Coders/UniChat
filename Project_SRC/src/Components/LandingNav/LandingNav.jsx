"use client";
import React from 'react';
import {Box, ThemeProvider, Typography} from '@mui/material';
import { darktheme } from '../Themes/themes.jsx';
import { useRouter } from 'next/navigation';

const LandingNav = () => {
    const router = useRouter();

    return (
        <ThemeProvider theme={darktheme}>
         <Box
            sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                zIndex: 1000,
   
            }}
         >
            <Typography variant='body2' sx={{
                fontFamily:darktheme.typography.fontFamily[1],
                fontWeight: 400,
                justifyContent: "center",
                alignItems: "center",
                color: (theme) => theme.palette.primary.whites,
                '&:hover': {background: "rgba( 0, 0, 0, 0.5)", borderRadius: 2, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)",
                            border: "1px solid rgba(255, 255, 255, 0.18)",
                            color: (theme) => theme.palette.primary.textcolor, 
                            transition: 'background 0.5s ease', cursor: 'pointer',},
                mb: 2,
                mt: 2,
                mr: 2,
                p: 1,
                border: "1px solid transparent",
                boxShadow: "none",
                }}
                onClick={() => router.push('/')}
                >
                Home
            </Typography>
            <Typography variant='body2' sx={{
                fontFamily:darktheme.typography.fontFamily[1],
                fontWeight: 400,
                justifyContent: "center",
                alignItems: "center",
                color: (theme) => theme.palette.primary.whites,
                '&:hover': {background: "rgba( 0, 0, 0, 0.5)", borderRadius: 2, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)",
                            border: "1px solid rgba(255, 255, 255, 0.18)",
                            color: (theme) => theme.palette.primary.textcolor, 
                            transition: 'background 0.5s ease', cursor: 'pointer',},
                mb: 2,
                mt: 2,
                mr: 2,
                p: 1,
                border: "1px solid transparent",
                boxShadow: "none",
                }}
                onClick={() => router.push('/login')}
                >
                       Login 
            </Typography>
            <Typography variant='body2' sx={{
                fontFamily:darktheme.typography.fontFamily[1],
                fontWeight: 400,
                justifyContent: "center",
                alignItems: "center",
                color: (theme) => theme.palette.primary.whites,
                '&:hover': {background: "rgba( 0, 0, 0, 0.5)", borderRadius: 2, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)",
                            border: "1px solid rgba(255, 255, 255, 0.18)",
                            color: (theme) => theme.palette.primary.textcolor, 
                            transition: 'background 0.5s ease', cursor: 'pointer',},
                mb: 2,
                mt: 2,
                mr: 2,
                p: 1,
                border: "1px solid transparent",
                boxShadow: "none",
                }}
                onClick={() => router.push('/teacher')}
                >
                 Instructor Portal
            </Typography>
            <Typography variant='body2' sx={{
                fontFamily:darktheme.typography.fontFamily[1],
                fontWeight: 400,
                justifyContent: "center",
                alignItems: "center",
                color: (theme) => theme.palette.primary.whites,
                '&:hover': {background: "rgba( 0, 0, 0, 0.5)", borderRadius: 2, boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", backdropFilter: "blur(5px)", WebkitBackdropFilter: "blur(5px)",
                            border: "1px solid rgba(255, 255, 255, 0.18)",
                            color: (theme) => theme.palette.primary.textcolor, 
                            transition: 'background 0.5s ease', cursor: 'pointer',},
                mb: 2,
                mt: 2,
                mr: 2,
                p: 1,
                border: "1px solid transparent",
                boxShadow: "none",
                }}
                onClick={() => router.push('/registerschool')}
                >
                    Register your school
            </Typography>
         </Box>
        </ThemeProvider>
    );
}

export default LandingNav;