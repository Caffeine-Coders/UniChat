'use client'
import React, { useState, useEffect } from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import Typography from '@mui/material/Typography';
import { StepLabel } from "@mui/material";
import Container from '@mui/material/Container';
import Create from './create';
import Details from './details';
import Confirm from './confirm';
const steps = ['Create a Project', 'Project Details', 'Confirmation'];

export default function Newproject(){
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(activeStep+ 1);
    }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div class=" backdrop-filter backdrop-blur-sm bg-opacity-80 rounded-2xl w-3/4 mx-auto">
        <Container component="main" maxWidth="xl" sx={{ mb: 4, minWidth:500}}>
                    <Stepper activeStep={activeStep}  sx={{ pt: 2, pb: 5}}>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>

                    {activeStep===0? <Create fornext = {handleNext} forback = {handleBack} />
                    :
                    activeStep===1? <Details fornext = {handleNext} forback = {handleBack}/>
                    :
                    activeStep===2? <Confirm fornext = {handleNext} forback = {handleBack}/>
                    :
                      null
                    }
            </Container>
    </div>
  );
}