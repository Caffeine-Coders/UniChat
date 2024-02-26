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
    //Page 1
    const [projectname, setProjectname] = useState('');
    //Page 2
    const [gradelevel, setGradelevel] = useState('');
    const [subjectareas, setSubjectareas] = useState('');
    const [projectgoal, setProjectgoal] = useState('');
    const [projectData, setProjectData] = useState([{}]);
    const handlePage1Complete = (projectname) => {
        
        setProjectname(projectname);
    }
    const handlePage2Complete = (gradelevel, subjectareas, projectgoal) => {
        setGradelevel(gradelevel);
        setSubjectareas(subjectareas);
        setProjectgoal(projectgoal);
    }
  const handleNext = () => {
    setActiveStep(activeStep+ 1);
    }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleNext2 = () => {
    setActiveStep(activeStep+ 1);
    const data = [{
        "projectname": projectname,
        "gradelevel": gradelevel,
        "subjectareas": subjectareas,
        "projectgoal": projectgoal
    }]
    setProjectData(data);
    }
    useEffect(() => {
        console.log("pdata", projectData);
    }, [projectData]);
  return (
    <div class="p-8 backdrop-filter backdrop-blur-sm bg-opacity-80 rounded-2xl w-3/4 mx-auto">
        <Container component="main" maxWidth="xl" sx={{ mb: 4, minWidth:500}}>
                    <Stepper activeStep={activeStep}  sx={{ pt: 2, pb: 5}}>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>

                    {activeStep===0? <Create fornext = {handleNext} forback = {handleBack} loader = {handlePage1Complete}/>
                    :
                    activeStep===1? <Details fornext = {handleNext} forback = {handleBack} loader = {handlePage2Complete}/>
                    :
                    activeStep===2? <Confirm forback = {handleBack} data={projectData}/>
                    :
                      null
                    }
            </Container>
    </div>
  );
}