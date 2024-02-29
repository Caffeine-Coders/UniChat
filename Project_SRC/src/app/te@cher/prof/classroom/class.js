"use client";
import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
export default function Class() {
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                        <Paper sx={{ padding: 2, color: 'text.secondary', backgroundColor: 'background.paper', borderRadius: '8px' }}>
                            <div class="h-40 flex items-center justify-center ">
                            <Typography variant="h2" component="h2" sx={{fontFamily: 'caveat'}}>
                                680 Master's Project
                            </Typography>
                            </div>
                        </Paper>
                </Grid>
                <Grid item xs={7}>
                <Item>xs=4</Item>
                </Grid>
                <Grid item xs={5}>
                <Item>xs=8</Item>
                </Grid>
            </Grid>
        </Box>
        {/* <Accordion sx={{margin:'4px', marginBottom:'10px', padding:'4px'}}>
            <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            >
            <Typography>680 Master's Project</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Students/>
            </AccordionDetails>
            </Accordion>
            <Accordion sx={{margin:'4px', marginBottom:'10px',padding:'4px'}}>
            <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            >
            <Typography>680 Master's Project</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Students/>
            </AccordionDetails>
            </Accordion>
            <Accordion sx={{margin:'4px', marginBottom:'10px', padding:'4px'}}>
            <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            >
            <Typography>680 Master's Project</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Students/>
            </AccordionDetails>
        </Accordion> */}



        </>
    )
}
