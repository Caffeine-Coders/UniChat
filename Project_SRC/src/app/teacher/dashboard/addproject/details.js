'use client'
import React, { useState, useEffect } from "react";
import {Drivecomponent} from "../../drive/drivecomponent";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Dialog } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
export default function Details({fornext, forback, loader}){
    const [gradelevel, setGradelevel] = useState('');
    const [subjectareas, setSubjectareas] = useState('');
    const [projectgoal, setProjectgoal] = useState('');
    const [open, setOpen] = React.useState(false);
    const driveInstance = Drivecomponent()
    const handleClose = () => {
        setOpen(false);
      };
    useEffect(() => {
        const storedgradelevel = JSON.parse(localStorage.getItem("gradelevel"));
        if (storedgradelevel) {
            setGradelevel(storedgradelevel);
        }
    }, []);
    useEffect(() => {
        const storedsubjectareas = JSON.parse(localStorage.getItem("subjectareas"));
        if (storedsubjectareas) {
            setSubjectareas(storedsubjectareas);
        }
    }, []);
    useEffect(() => {
        const storedprojectgoal = JSON.parse(localStorage.getItem("projectgoal"));
        if (storedprojectgoal) {
            setProjectgoal(storedprojectgoal);
        }
    }, []);
    const [checked, setChecked] = React.useState([1]);
    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    const handleNext = () => {
        if(gradelevel !== '' && subjectareas !== '' && projectgoal !== ''){
            console.log("gradelevel", gradelevel);
            console.log("subjectareas", subjectareas);
            console.log("projectgoal", projectgoal);
            loader(gradelevel, subjectareas, projectgoal);
            const glevel = JSON.stringify(gradelevel);
            const sareas = JSON.stringify(subjectareas);
            const pgoal = JSON.stringify(projectgoal);
            localStorage.setItem("gradelevel", glevel, () => {
                JSON.parse(localStorage.getItem("gradelevel"));
            });
            localStorage.setItem("subjectareas", sareas, () => {
                JSON.parse(localStorage.getItem("subjectareas"));
            });
            localStorage.setItem("projectgoal", pgoal, () => {
                JSON.parse(localStorage.getItem("projectgoal"));
            });
            fornext();

        }
    }
    const handleDrive = () =>{
        driveInstance.handleopenPicker()
    }
    const handleCreateFolder = () => {
        driveInstance.createFolder('Project')
    }
    const [inviteTeacher,setTeacherInvite] = useState(false)
    const [inviteStudent,setStudentInvite] = useState(false)
    const studentlist = ['Forum Dipen Shah', 'Dheeraj Kumar Thanda', 'Sai Vishnu Anudeep Kadiyala' , 'Satwik Bhasin']
    const teacherlist = ['professor1', 'professor2', 'professor3']
    const handlestudent = () => {
        setStudentInvite(true)
    }
    const handleTeacher = () => {
        setTeacherInvite(true)
    }
    const handleTeacherClose = () =>{
        setTeacherInvite(false)
    }
    const handleStudentClose = () =>{
        setStudentInvite(false)
    }
    const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '16ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  
    return (
            <>
                    <div class="mt-16">
                    <p class="text-3xl"> Project Details</p>
                    <div class="relative h-11 w-full min-w-[200px] mt-7">
                        <input placeholder="Grade Level"
                        value={gradelevel}
                        onChange={(e) => setGradelevel(e.target.value)}
                        class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                        class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-lg font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Grade Level
                        </label>
                    </div>
                    <div class="relative h-11 w-full min-w-[200px] mt-7">
                        <input placeholder="Subject Areas"
                        value={subjectareas}
                        onChange={(e) => setSubjectareas(e.target.value)}
                        class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                        class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-lg font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Subject Areas
                        </label>
                    </div>
                    <div class="relative h-11 w-full min-w-[200px] mt-7">
                        <input placeholder="Project Goal"
                        value={projectgoal}
                        onChange={(e) => setProjectgoal(e.target.value)}
                        class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                        class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-lg font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Project Goal
                        </label>
                    </div>
                    <div class="relative h-11 w-full min-w-[200px] mt-7">
                    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Messaging</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Messaging"
  >
    <MenuItem value={10}>Use Discord Server</MenuItem>
    <MenuItem value={20}>Use UniChat Messaging</MenuItem>
    
  </Select>
</FormControl>
                       
                    </div>
                    <div class="items-center mx-auto content-center justify-center flex mt-10">
                        <button onClick={handleDrive} class="border-2 border-black h-32 w-40 rounded-xl items-center bg-white ">
                            <div class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" data-name="Layer 1" viewBox="0 0 32 32" id="google-drive"><path fill="#4285f4" d="M29.5,21l-3.1708,5.5489A3.07,3.07,0,0,1,23.6459,28H8.3541a3.07,3.07,0,0,1-2.6833-1.4511L4.3687,24.27,9.7578,21Z"></path><path fill="#00ac47" d="M12.3822,4.13a3.2262,3.2262,0,0,0-1.7067,1.4276L2.9591,18.76a3.07,3.07,0,0,0-.1012,3.0489l1.53,2.4658L9.7579,21,16,10.32Z"></path><path fill="#0066da" d="M9.7578,21H2.568a2.6543,2.6543,0,0,0,.29.8089L4.38,24.2632l-.0115.007L5.6709,26.549A2.8267,2.8267,0,0,0,7.008,27.6974L9.7578,21l-.0081.0049Z"></path><path fill="#ffba00" d="M19.6068,4.13a3.2256,3.2256,0,0,1,1.7066,1.4276L29.03,18.76a3.07,3.07,0,0,1,.1013,3.0489l-1.5295,2.4658L22.2311,21,15.9889,10.32Z"></path><path fill="#ea4435" d="M22.2311,21h7.19a2.6541,2.6541,0,0,1-.29.8089l-1.5224,2.4544.0116.007L26.3181,26.549a2.8272,2.8272,0,0,1-1.3371,1.1484L22.2312,21l.0081.0049Z"></path><path fill="#188038" d="M19.6155,4.1342l.0023-.004a2.7726,2.7726,0,0,0-.3609-.0983L16,4l-3.2569.0319a2.7726,2.7726,0,0,0-.3609.0983,3.0224,3.0224,0,0,0-.367.1666L15.9889,10.32,19.977,4.2993A3.03,3.03,0,0,0,19.6155,4.1342Z"></path></svg>
                            </div>
                            Google Drive
                        </button>
                        
                        <button class="border-2 border-black h-32 w-40 rounded-xl ml-8  bg-white" onClick={handleTeacher}>
                            <div class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 1024 1024" id="user">
                                    <path d="M670.1 278.4c0 8.8-.6 17.6-1.7 26.3.5-3.5 1-7.1 1.4-10.6-2.4 17.4-7 34.3-13.7 50.5 1.3-3.2 2.7-6.4 4-9.6-6.7 15.8-15.3 30.6-25.8 44.2l6.3-8.1c-10.4 13.4-22.5 25.5-35.9 35.9l8.1-6.3c-13.6 10.4-28.4 19.1-44.2 25.8 3.2-1.3 6.4-2.7 9.6-4-16.2 6.7-33.1 11.3-50.5 13.7 3.5-.5 7.1-1 10.6-1.4-17.5 2.3-35.1 2.3-52.6 0 3.5.5 7.1 1 10.6 1.4-17.4-2.4-34.3-7-50.5-13.7 3.2 1.3 6.4 2.7 9.6 4-15.8-6.7-30.6-15.3-44.2-25.8l8.1 6.3c-13.4-10.4-25.5-22.5-35.9-35.9l6.3 8.1c-10.4-13.6-19.1-28.4-25.8-44.2 1.3 3.2 2.7 6.4 4 9.6-6.7-16.2-11.3-33.1-13.7-50.5.5 3.5 1 7.1 1.4 10.6-2.3-17.5-2.3-35.1 0-52.6-.5 3.5-1 7.1-1.4 10.6 2.4-17.4 7-34.3 13.7-50.5-1.3 3.2-2.7 6.4-4 9.6 6.7-15.8 15.3-30.6 25.8-44.2l-6.3 8.1c10.4-13.4 22.5-25.5 35.9-35.9l-8.1 6.3c13.6-10.4 28.4-19.1 44.2-25.8-3.2 1.3-6.4 2.7-9.6 4 16.2-6.7 33.1-11.3 50.5-13.7-3.5.5-7.1 1-10.6 1.4 17.5-2.3 35.1-2.3 52.6 0-3.5-.5-7.1-1-10.6-1.4 17.4 2.4 34.3 7 50.5 13.7-3.2-1.3-6.4-2.7-9.6-4 15.8 6.7 30.6 15.3 44.2 25.8l-8.1-6.3c13.4 10.4 25.5 22.5 35.9 35.9l-6.3-8.1c10.4 13.6 19.1 28.4 25.8 44.2-1.3-3.2-2.7-6.4-4-9.6 6.7 16.2 11.3 33.1 13.7 50.5-.5-3.5-1-7.1-1.4-10.6 1.1 8.7 1.6 17.5 1.7 26.3.1 20.9 18.3 41 40 40 21.6-1 40.1-17.6 40-40-.2-47.9-14.6-96.9-42.8-135.9-7.6-10.5-15.7-20.8-24.7-30.1-9.1-9.4-19.1-17.5-29.5-25.4-18.9-14.4-40-25-62.4-33.2-90.3-33.1-199.2-3.6-260.3 70.8-8.4 10.2-16.4 20.8-23.2 32.2-6.8 11.3-12.1 23.3-17 35.5-9.2 22.6-13.9 46.6-15.8 70.9-3.7 47.6 8.7 97.3 33.5 138.1 23.9 39.4 60 73.2 102.2 92.3 12.4 5.6 25.1 10.8 38.3 14.5 13.1 3.6 26.4 5.6 39.9 7.2 24.6 2.9 49.7.9 74-4 92.3-18.8 169.6-98.3 183.9-191.6 2.1-13.6 3.7-27.2 3.7-41 .1-20.9-18.5-41-40-40-21.6.7-39.8 17.3-39.8 39.7zm132.7 625.3H289.7c-22.7 0-45.4.2-68.1 0-2.5 0-5-.2-7.4-.5 3.5.5 7.1 1 10.6 1.4-4-.6-7.8-1.7-11.5-3.2 3.2 1.3 6.4 2.7 9.6 4-4-1.7-7.7-3.9-11.2-6.6l8.1 6.3c-3-2.5-5.8-5.2-8.2-8.2l6.3 8.1c-2.7-3.5-4.8-7.2-6.6-11.2 1.3 3.2 2.7 6.4 4 9.6-1.5-3.7-2.5-7.6-3.2-11.5.5 3.5 1 7.1 1.4 10.6-1.6-12.1-.5-24.9-.5-37.1v-42.8c0-10.7.6-21.3 2-31.9-.5 3.5-1 7.1-1.4 10.6 2.8-20.5 8.2-40.6 16.3-59.7-1.3 3.2-2.7 6.4-4 9.6 7.8-18.2 17.8-35.3 29.9-51l-6.3 8.1c12.1-15.5 26-29.5 41.6-41.6L283 673c15.7-12.1 32.8-22.1 51-29.9-3.2 1.3-6.4 2.7-9.6 4 19.1-8 39.1-13.5 59.7-16.3-3.5.5-7.1 1-10.6 1.4 14.8-1.9 29.5-2 44.4-2h183c16.5 0 32.9-.1 49.4 2-3.5-.5-7.1-1-10.6-1.4 20.5 2.8 40.6 8.2 59.7 16.3-3.2-1.3-6.4-2.7-9.6-4 18.2 7.8 35.3 17.8 51 29.9l-8.1-6.3c15.5 12.1 29.5 26 41.6 41.6l-6.3-8.1c12.1 15.7 22.1 32.8 29.9 51-1.3-3.2-2.7-6.4-4-9.6 8 19.1 13.5 39.1 16.3 59.7-.5-3.5-1-7.1-1.4-10.6 1.9 15.1 2 30.1 2 45.3v49.5c0 5.7.2 11.4-.5 17 .5-3.5 1-7.1 1.4-10.6-.6 4-1.7 7.8-3.2 11.5 1.3-3.2 2.7-6.4 4-9.6-1.7 4-3.9 7.7-6.6 11.2l6.3-8.1c-2.5 3-5.2 5.8-8.2 8.2l8.1-6.3c-3.5 2.7-7.2 4.8-11.2 6.6 3.2-1.3 6.4-2.7 9.6-4-3.7 1.5-7.6 2.5-11.5 3.2 3.5-.5 7.1-1 10.6-1.4-2.2.3-4.5.4-6.8.5-10.3.1-20.9 4.4-28.3 11.7-6.9 6.9-12.2 18.3-11.7 28.3 1 21.4 17.6 40.3 40 40 38.9-.6 73.1-26 84.5-63.3 4.5-14.8 3.5-30.7 3.5-45.9 0-34.8 1.1-69.3-4.9-103.8-8.8-50.5-34.2-98-69-135.3-34.8-37.3-81.6-64.7-131.1-76.9-28.4-7-57-8.1-86-8.1H422.4c-29.7 0-59.2 1.4-88.1 9.1-49.1 13-95.3 40.7-129.4 78.3-34.4 37.9-59.3 85.5-67.4 136.3-5.4 34.1-4.3 68.3-4.3 102.7 0 15.8-.9 32.3 4.8 47.4 7.4 19.4 19.2 34.7 36.5 46.2 13.5 8.9 30.6 13.2 46.6 13.4 7.8.1 15.6 0 23.4 0h558.4c20.9 0 41-18.4 40-40-1-21.8-17.6-40.1-40.1-40.1z">
                                    </path>
                                </svg>
                            </div>
                            Add Co-Instructor
                        </button>
                        <button class="border-2 border-black h-32 w-40 rounded-xl ml-8  bg-white" onClick={handlestudent}>
                            <div class="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" data-name="Layer 2" viewBox="0 0 100 100" id="student">
                                    <path d="M32.5 33.83h1.1a16.6 16.6 0 0 0 32.8 0h1.1a3.92 3.92 0 0 0 3.92-3.91V26a2 2 0 0 0-2-2H66.63V16A10.72 10.72 0 0 0 55.92 5.25H44.08A10.71 10.71 0 0 0 33.38 16v8h-2.8a2 2 0 0 0-2 2v3.92A3.92 3.92 0 0 0 32.5 33.83zM50 45.88A14.65 14.65 0 0 1 35.38 31.25V24.4c.37-.79 2.51-4.65 8.37-4.65a22.09 22.09 0 0 0 11.58-3.17 22.68 22.68 0 0 0 9.3 6v8.65A14.66 14.66 0 0 1 50 45.88zM69.42 26v3.92a1.92 1.92 0 0 1-1.92 1.91h-.87V26zm-34-10a8.71 8.71 0 0 1 8.7-8.71H55.92A8.72 8.72 0 0 1 64.63 16V20.5a21 21 0 0 1-8.35-5.87 1 1 0 0 0-1.39-.17 19.54 19.54 0 0 1-11.14 3.29A11.21 11.21 0 0 0 35.38 21zm-4.8 10h2.8v5.83H32.5a1.92 1.92 0 0 1-1.92-1.91zM12.5 91.48H37.21a2.43 2.43 0 0 1 2.42 2.42 1 1 0 0 0 1 1H59.38a1 1 0 0 0 1-1 2.42 2.42 0 0 1 2.41-2.42H87.5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H85.33a2.63 2.63 0 0 0 0-.49V81.73a2.5 2.5 0 0 0-2.48-2.49h-.65V70.63a18.53 18.53 0 0 0-18.4-18.5h-6a1 1 0 0 0-.77.36l-7 8.45-7-8.45a1 1 0 0 0-.77-.36h-6.1a18.54 18.54 0 0 0-18.34 18.5v8.61h-.64a2.5 2.5 0 0 0-2.48 2.49V85a2.63 2.63 0 0 0 0 .49H12.5a1 1 0 0 0-1 1v4A1 1 0 0 0 12.5 91.48zM58.28 54.13h4.33L59.74 67.18l-8.22-4.94zm-9.8 8.11l-8.22 4.94L37.39 54.13h4.33zM19.75 70.63A16.53 16.53 0 0 1 35.36 54.17L38.6 69a1 1 0 0 0 .58.71 1.14 1.14 0 0 0 .4.08 1 1 0 0 0 .51-.14L50 63.67l9.91 5.94a1 1 0 0 0 .51.14 1.14 1.14 0 0 0 .4-.08A1 1 0 0 0 61.4 69l3.24-14.79A16.53 16.53 0 0 1 80.25 70.63v8.61l-23.88-.09h0a7.28 7.28 0 0 0-5.19 2.15A7.2 7.2 0 0 0 50 82.79a7.2 7.2 0 0 0-1.16-1.49 7.28 7.28 0 0 0-5.19-2.15h0l-23.88.09zM16.63 85V81.73a.5.5 0 0 1 .49-.49l26.51-.09h0A5.34 5.34 0 0 1 49 86.5a1 1 0 0 0 2 0 5.34 5.34 0 0 1 5.35-5.35h0l26.52.09a.5.5 0 0 1 .49.49V85a.49.49 0 0 1-.49.49H59.37a4.13 4.13 0 0 0-4 3.12H44.63a4.13 4.13 0 0 0-4-3.12H17.12A.49.49 0 0 1 16.63 85zM13.5 87.5H40.63a2.12 2.12 0 0 1 2.12 2.12 1 1 0 0 0 1 1h12.5a1 1 0 0 0 1-1 2.12 2.12 0 0 1 2.12-2.12H86.5v2H62.79a4.43 4.43 0 0 0-4.3 3.42h-17a4.44 4.44 0 0 0-4.31-3.42H13.5z"></path>
                                </svg>
                            </div>
                            Add Students
                        </button>

                      
                            </div>
                    </div>
                    
                 <div class=" mt-20 ">
                    <button class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-white text-black border-2 border-black rounded-lg hover:bg-slate-300 focus:ring-4 focus:ring-blue-100" onClick={forback}>    
                         <span> Back</span>
                     </button>
                     <button class="inline-flex float-right items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-discordpurple-0 border border-2 border-discordpurple-0 rounded-lg hover:bg-white hover:border-2 hover:border-discordpurple-0 hover:text-discordpurple-0 focus:ring-4 focus:ring-blue-100" onClick={handleNext}>    
                         Continue
                         <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                         </svg>
                     </button>
                 
               <Dialog
               open={inviteTeacher}
               onClose={handleTeacherClose}
               aria-labelledby="alert-dialog-title"
               aria-describedby="alert-dialog-description"
               maxWidth="md"
               fullWidth={true}
               PaperProps={{ style: { height: '70vh', borderRadius: '15px', overflowY:'none'} }}
               >
               <div class='h-full w-full p-4 pt-0 pb-0 mx-auto'>
               <DialogTitle id="alert-dialog-title" style={{fontSize: '25px', textAlign:'center' }}>
               <IconButton
               edge="start"
               color="inherit"
               onClick={handleTeacherClose}
               aria-label="close"
               sx={{ position: 'absolute', right: 8 }}
               >
               <CloseIcon />
               </IconButton>
                   {"Add Co-Instructors to this project"}
               </DialogTitle>
               <DialogContent>
                   <DialogContentText id="alert-dialog-description">
                   <Box sx={{ width: '100%', height:'100%' }}>
                   <div class="flex rounded-md w-full" style={{border: '1px solid black'}}>
                     <Search style={{ display: 'flex', width: 'full', height: '50px', borderRadius: '15px', borderBlockColor: 'black'}}>
                       <SearchIconWrapper>
                         <SearchIcon />
                       </SearchIconWrapper>
                       <StyledInputBase
                         placeholder="Search Instructors..."
                         inputProps={{ 'aria-label': 'search' }}
                         style={{background:'transparent', height: '100%', width: 'full', padding: '0', margin: '0' }}
                       />
                     </Search>
                   </div>
                   {teacherlist.map((value) => {
                                const labelId = `checkbox-list-secondary-label-${value}`;
                                return (
                                <ListItem
                                    key={value}
                                    secondaryAction={
                                    <Checkbox
                                        edge="end"
                                        onChange={handleToggle(value)}
                                        checked={checked.indexOf(value) !== -1}
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                    }
                                    disablePadding
                                    sx={{ justifyContent: 'center' }}
                                >
                                    <ListItemButton>
                                    <ListItemText id={labelId} primary={value} />
                                    </ListItemButton>
                                </ListItem>
                                );
                            })}
               </Box> 
               
               </DialogContentText>
             </DialogContent>
     
     
     
             </div>
             <button class="w-4/6 mx-auto mb-4 justify-center font-semibold tracking-wider  rounded-2xl bg-opacity-60 text-black bg-discordpurple-0 px-4 py-2">
                   Add
                 </button>
             </Dialog>
             
             </div>
             <Dialog
             open={inviteStudent}
             onClose={handleStudentClose}
             aria-labelledby="alert-dialog-title"
             aria-describedby="alert-dialog-description"
             maxWidth="md"
             fullWidth={true}
             PaperProps={{ style: { height: '70vh', borderRadius: '15px', overflowY:'none'} }}
             >
             <div class='h-full w-full p-4 pt-0 pb-0 mx-auto'>
             <DialogTitle id="alert-dialog-title" style={{fontSize: '25px', textAlign:'center' }}>
             <IconButton
             edge="start"
             color="inherit"
             onClick={handleStudentClose}
             aria-label="close"
             sx={{ position: 'absolute', right: 8 }}
             >
             <CloseIcon />
             </IconButton>
                 {"Add Students to this project"}
             </DialogTitle>
             <DialogContent>
                 <DialogContentText id="alert-dialog-description">
                 <Box sx={{ width: '100%', height:'100%' }}>
                 <div class="flex rounded-md w-full" style={{border: '1px solid black'}}>
                   <Search style={{ display: 'flex', width: '100%', height: '50px', borderRadius: '15px', borderBlockColor: 'black'}}>
                     <SearchIconWrapper>
                       <SearchIcon />
                     </SearchIconWrapper>
                     <StyledInputBase
                       placeholder="Search Students..."
                       inputProps={{ 'aria-label': 'search' }}
                       style={{background:'transparent', height: '100%', width: 'full', padding: '0', margin: '0', flex: '1' }}
                     />
                   </Search>
                 </div>
                 {studentlist.map((value) => {
                              const labelId = `checkbox-list-secondary-label-${value}`;
                              return (
                              <ListItem
                                  key={value}
                                  secondaryAction={
                                  <Checkbox
                                      edge="end"
                                      onChange={handleToggle(value)}
                                      checked={checked.indexOf(value) !== -1}
                                      inputProps={{ 'aria-labelledby': labelId }}
                                  />
                                  }
                                  disablePadding
                                  sx={{ justifyContent: 'center' }}
                              >
                                  <ListItemButton>
                                  <ListItemText id={labelId} primary={value} />
                                  </ListItemButton>
                              </ListItem>
                              );
                          })}
             </Box> 
             
             </DialogContentText>
           </DialogContent>
   
   
   
           </div>
           <button class="w-4/6 mx-auto mb-4 justify-center font-semibold tracking-wider  rounded-2xl bg-opacity-60 text-black bg-discordpurple-0 px-4 py-2">
                 Add
               </button>
           </Dialog>
            </>
    );
}