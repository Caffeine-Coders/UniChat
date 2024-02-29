"use client";
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function Content() {

  return (
    <>
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop:'40px' }}>
    <Box sx={{ display: 'flex' }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                        {/* <Paper sx={{ padding: 2, color: 'text.secondary', backgroundColor:'transparent', borderRadius: '8px' }}> */}
                            <div class="h-80 flex items-center justify-center bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
                            <Typography variant="h2" component="h2" sx={{fontFamily: 'caveat'}}>
                                680 Master's Project
                            </Typography>
                            </div>
                        {/* </Paper> */}
                </Grid>
                <Grid item xs={7}>
                    <div class="h-40 flex items-center justify-center bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
                        <Typography variant="h2" component="h2" sx={{fontFamily: 'caveat'}}>
                            Projects
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={5}>
                    <div class="h-40 flex items-center justify-center bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20">
                        <Typography variant="h2" component="h2" sx={{fontFamily: 'caveat'}}>
                            Students
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Box>
        </Box>
    </Box>
    </>
  );
}

