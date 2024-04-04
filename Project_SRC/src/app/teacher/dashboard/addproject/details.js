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
import { Dialog, Typography} from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import FormControlLabel from '@mui/material/FormControlLabel';
export default function Details({fornext, forback, loader}){
    const [gradelevel, setGradelevel] = useState('');
    const [subjectareas, setSubjectareas] = useState('');
    const [projectgoal, setProjectgoal] = useState('');
    const [open, setOpen] = React.useState(false);
    const driveInstance = Drivecomponent()
    const handleClose = () => {
        setOpen(false);
      };
    React.useEffect(() => {
      if (typeof window !== 'undefined') {
        const storedgradelevel = localStorage.getItem("classnumber");
        const storedclass = localStorage.getItem("classname");
        if (storedgradelevel) {
          setGradelevel(JSON.parse(storedgradelevel));
        }
        if (storedclass) {
          setSubjectareas(storedclass);
        }
      }
    }, []);
    useEffect(() => {
        const storedprojectgoal = JSON.parse(localStorage.getItem("projectgoal"));
        if (storedprojectgoal) {
            setProjectgoal(storedprojectgoal);
        }
    }, []);
    const [studentchecked, setstudentChecked] = React.useState([]);
    const [studentemailchecked, setstudentemailChecked] = React.useState([]);
    const handlestudentToggle = (value) => () => {
      const currentIndex = studentchecked.indexOf(value);
      const newChecked = [...studentchecked];

      if (currentIndex === -1) {
      newChecked.push(value);
      } else {
      newChecked.splice(currentIndex, 1);
      }

      setstudentChecked(newChecked);
  };
  const handlestudentCheckboxChange = () => {
    const allChecked = studentchecked.length === studentlist.length;
    const newChecked = allChecked ? [] : [...studentlist];
    setstudentChecked(newChecked);
  };
  const [teacherchecked, setteacherChecked] = React.useState([]);
  const handleteacherToggle = (value) => () => {
    const currentIndex = teacherchecked.indexOf(value);
    const newChecked = [...teacherchecked];

    if (currentIndex === -1) {
    newChecked.push(value);
    } else {
    newChecked.splice(currentIndex, 1);
    }

    setteacherChecked(newChecked);
};
   const handleteacherCheckboxChange = () => {
    const allChecked = teacherchecked.length === teacherlist.length;
    const newChecked = allChecked ? [] : [...teacherlist];
    setteacherChecked(newChecked);
  };
    const urls = ["https://img.freepik.com/free-photo/people-generating-images-using-artificial-intelligence-laptop_23-2150794334.jpg?t=st=1710251710~exp=1710255310~hmac=0b18455c08ed0ae7910919240ef8786b0412a664f39e0ac9e30584e8c3262fe1&w=740",
    "https://img.freepik.com/free-vector/college-project-concept-illustration_114360-10541.jpg?t=st=1710252174~exp=1710255774~hmac=5dce400ab6a19f1596bd819ad10df08f6aa335a222f545e57d356afc6ba6024b&w=740", 
    "https://img.freepik.com/free-vector/web-development-concept-with-programmer-ar_107791-17049.jpg?t=st=1710252429~exp=1710256029~hmac=4150b91e1f40f61675e16e0d974a202899f1fef8cd31cf613aadd6b47d11c171&w=740",
    "https://img.freepik.com/free-vector/happy-students-pupils-watching-study-webinar-isolated-flat-illustration_74855-14070.jpg?t=st=1710252513~exp=1710256113~hmac=e043a78e8104845d08dc4c4f41a5f677332bd26325aca883c2600e7f571a42b7&w=740",
    "https://img.freepik.com/free-vector/web-development-concept-with-programmer-ar_107791-17049.jpg?t=st=1710252429~exp=1710256029~hmac=4150b91e1f40f61675e16e0d974a202899f1fef8cd31cf613aadd6b47d11c171&w=740",
    "https://img.freepik.com/free-vector/happy-students-pupils-watching-study-webinar-isolated-flat-illustration_74855-14070.jpg?t=st=1710252513~exp=1710256113~hmac=e043a78e8104845d08dc4c4f41a5f677332bd26325aca883c2600e7f571a42b7&w=740", 
    "https://img.freepik.com/free-vector/college-project-concept-illustration_114360-10541.jpg?t=st=1710252174~exp=1710255774~hmac=5dce400ab6a19f1596bd819ad10df08f6aa335a222f545e57d356afc6ba6024b&w=740", 
    "https://img.freepik.com/free-photo/people-generating-images-using-artificial-intelligence-laptop_23-2150794334.jpg?t=st=1710251710~exp=1710255310~hmac=0b18455c08ed0ae7910919240ef8786b0412a664f39e0ac9e30584e8c3262fe1&w=740",
    ];
    const handleDrive = () =>{
        driveInstance.handleopenPicker()
    }
    const handleCreateFolder = () => {
        driveInstance.createFolder('Project')
    }
    const [inviteTeacher,setTeacherInvite] = useState(false)
    const [inviteStudent,setStudentInvite] = useState(false)
    let studentemailsString;
    let studentnamesString;
    let teacheremailsString;
    let teachernamesString;
    let defaultteacher;
    let defaultteachername;
    if (typeof window!== 'undefined'){
      studentemailsString = localStorage.getItem("studentemails")
      studentnamesString = localStorage.getItem("studentnames")
      teacheremailsString = localStorage.getItem("teacheremails")
      teachernamesString = localStorage.getItem("teachernames")
      defaultteacher = localStorage.getItem("Temail")
      defaultteachername = localStorage.getItem("Tname")
    }
    const studentlist = studentnamesString.split(',');
    const studentemaillist = studentemailsString.split(',');
    const teacherlist = teachernamesString.split(',');
    const teacheremaillist = teacheremailsString.split(',');
    let cleanedDefaultTeacher = defaultteacher.replace(/"/g, '');
    let defaultindex = teacheremaillist.indexOf(cleanedDefaultTeacher);
    teacherlist.splice(defaultindex,1);
    teacheremaillist.splice(defaultindex,1);
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

    const inviteStudentHandler = () =>{
        // let getemails = studentchecked.split(',')
        let selectedemails = studentchecked.map((email) => {
          let index = studentlist.indexOf(email);
          return studentemaillist[index]
        })
        console.log("student here",selectedemails)
        if (typeof window !== 'undefined'){
          localStorage.setItem("invitedStudent", studentchecked, () => {
              });
          localStorage.setItem("invitedStudentEmail", selectedemails, () => {
              });
          const tempdata = localStorage.getItem("invitedStudent")
          console.log("from local",tempdata)
          setStudentInvite(false)
        }
      }
    const [messaging, setMessaging] = React.useState('')
    const handleMessenger = (event) =>{
      console.log("got here",event.target.value)
      const val = event.target.value
      setMessaging(val)
      // if (typeof window!== 'undefined'){
        if (val === "10"){
          localStorage.setItem("nativeChat",false, ()=>{
            localStorage.getItem("nativeChat")
          })
        }
        else{
          localStorage.setItem("nativeChat",true, ()=>{
            localStorage.getItem("nativeChat")
          })
        }
      // }
    }
      const inviteTeacherHandler = () =>{
        console.log("teacher here",teacherchecked)
        let selectedemails = teacherchecked.map((email) => {
          let index = teacherlist.indexOf(email);
          return teacheremaillist[index]
        })
        if (typeof window !== 'undefined'){
          localStorage.setItem("invitedTeacher",teacherchecked,()=>{
          })
          localStorage.setItem("invitedTeacherEmail",selectedemails,()=>{
          })
          const tempdata = localStorage.getItem("invitedTeacher")
          console.log("from local",tempdata)
          setTeacherInvite(false)
         
        }
      }
      const handleNext = () => {
        if(projectgoal !== ''){
            loader(gradelevel, subjectareas, projectgoal);
            const pgoal = JSON.stringify(projectgoal);
            localStorage.setItem("projectgoal", pgoal, () => {
                JSON.parse(localStorage.getItem("projectgoal"));
            });
            let random = Math.floor(Math.random() * urls.length);
            localStorage.setItem("projectimage", urls[random], () => {
                localStorage.getItem("projectimage");
            });
            if (typeof window!== 'undefined'){
              let tnames = localStorage.getItem("invitedTeacher")
              if (tnames){
              tnames=tnames.split(',')
              }

              let temails = localStorage.getItem("invitedTeacherEmail")
              if (temails){
              temails=temails.split(',')
              }
              if (!tnames) tnames = [];
              if (!temails) temails = [];
              let cleanedDefaultTeacherName = defaultteachername.replace(/"/g, '');
              let cleanedDefaultTeacher = defaultteacher.replace(/"/g, '');
              
              if (tnames[0] === '') {
                tnames[0] = cleanedDefaultTeacherName;
              } else {
                tnames.push(cleanedDefaultTeacherName);
              }
              
              if (temails[0] === '') {
                temails[0] = cleanedDefaultTeacher;
              } else {
                temails.push(cleanedDefaultTeacher);
              }
              localStorage.setItem("invitedTeacher",tnames,()=>{
              })
              localStorage.setItem("invitedTeacherEmail",temails,()=>{
              })
            }
            fornext();
        }
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
                        // onChange={(e) => setGradelevel(e.target.value)}
                        // disabled={true}
                        class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                        class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-lg font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Grade Level
                        </label>
                    </div>
                    <div class="relative h-11 w-full min-w-[200px] mt-7">
                        <input placeholder="Subject Areas"
                        value={subjectareas}
                        // onChange={(e) => setSubjectareas(e.target.value)}
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
                    <FormControl fullWidth required={true}>
                      <InputLabel id="demo-simple-select-label" required={true}>Messaging</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Messaging"
                        value={messaging}
                        onChange={handleMessenger}
                        required={true}
                      >
                        <MenuItem value={"10"}>Use Discord Server</MenuItem>
                        <MenuItem value={"20"}>Use UniChat Messaging</MenuItem>
                        
                      </Select>
                    </FormControl>
                       
                    </div>
                    <div class="items-center mx-auto content-center justify-center flex mt-10">
                        
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
                   <FormControlLabel
                            style={{justifyContent:"space-between", display:'flex' , marginRight:'4px'}}
                            
                        label={
                        <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                            Select All
                        </Typography>
                        }
                        labelPlacement='start'
                        control={
                        <Checkbox
                            checked={teacherchecked.length === teacherlist.length}
                            onChange={handleteacherCheckboxChange}
                            end = "end"

                        />
                        }

                    />
                   {teacherlist.map((value) => {
                                const labelId = `checkbox-list-secondary-label-${value}`;
                                return (
                                <ListItem
                                    key={value}
                                    secondaryAction={
                                    <Checkbox
                                        edge="end"
                                        onChange={handleteacherToggle(value)}
                                        checked={teacherchecked.indexOf(value) !== -1}
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
             <button onClick={inviteTeacherHandler} class="w-4/6 mx-auto mb-4 justify-center font-semibold tracking-wider  rounded-2xl bg-opacity-60 text-black bg-discordpurple-0 px-4 py-2">
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
                 <FormControlLabel
                        style={{justifyContent:"space-between", display:'flex' , marginRight:'4px'}}
                        
                    label={
                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                        Select All
                    </Typography>
                    }
                    labelPlacement='start'
                    control={
                    <Checkbox
                        checked={studentchecked.length === studentlist.length}
                        // indeterminate={checked.length > 0 && checked.length < studentlist.length}
                        onChange={handlestudentCheckboxChange}
                        end = "end"

                    />
                    }

                />
                 {studentlist.map((value) => {
                              const labelId = `checkbox-list-secondary-label-${value}`;
                              return (
                              <ListItem
                                  key={value}
                                  secondaryAction={
                                  <Checkbox
                                      edge="end"
                                      onChange={handlestudentToggle(value)}
                                      checked={studentchecked.indexOf(value) !== -1}
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
           <button onClick={inviteStudentHandler} class="w-4/6 mx-auto mb-4 justify-center font-semibold tracking-wider  rounded-2xl bg-opacity-60 text-black bg-discordpurple-0 px-4 py-2">
                 Add
               </button>
           </Dialog>
            </>
    );
}