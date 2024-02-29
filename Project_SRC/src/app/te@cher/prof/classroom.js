import * as React from 'react';
import Students from './students'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from '@mui/material/Typography';

export default function Classroom() {
    return (
        <>
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
        </Accordion>


        </>
    )
}
