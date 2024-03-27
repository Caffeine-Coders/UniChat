"use client"
import { useState } from "react";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Signuplogin } from "../../teacher/essentials/conn";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';
import Signuplogo from "./signup.png"
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import {schoolList} from '../dbconnections/getSchool'
export default function content() {
  const [schools, setSchools] = useState([]);
  async function getschools (){
    const schoollist = await schoolList();
    setSchools(schoollist.map(item => item.schoolname));
    console.log("got them",schoollist)
  }
  React.useEffect(() => {
    getschools();
  }, []);

  const [name, setName] = useState('');
    const [schoolname, setSchoolName] = useState('');
    const signupinstance = Signuplogin()
    const [open, setOpen] = React.useState(false);
    const [loading,setLoading] = React.useState(false)
    let email1;
    if (typeof window !== 'undefined') {
        email1 = JSON.parse(localStorage.getItem("emailID"));
    }
    let name1;
    if (typeof window !== 'undefined') {
        name1 = JSON.parse(localStorage.getItem("Tname"));
    }
    const handleClose = () => {
      setOpen(false);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    // const schools = ["University at Albany", "Saint Rose", "Stanford"];
    const handleSchoolNameChange = (event) => {
        setSchoolName(event.target.value);
        // console.log(schoolList());
    }

    const handleSubmit = async(event) => {
        setLoading(true)
        event.preventDefault();
        await signupinstance.signupaccount(name1,email1,schoolname)
        setLoading(false)
        setOpen(true);
        signupinstance.unauthsignout()
        
    }
   
    return (
    <div class="text-center flex justify-center align-middle mt-16">
       {loading && (
                <div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <CircularProgress color="primary" />
                </div>
            )}
        <div class="relative flex flex-col mt-6 text-black bg-white shadow-2xl bg-clip-border rounded-xl w-3/5 h-full ">
        <div class="flex items-center w-full">
            <img class="w-1/2 h-120 rounded-xl" src={Signuplogo.src} alt="login" />
            <div class="w-1/2">
            <div class="p-6">
                <div class="block mb-2 text-4xl font-sans antialiased font-semibold leading-snug tracking-normal  font-headx" >
                    Please Fill in the Details
                </div>
            </div>
        
          <form onSubmit={handleSubmit}>
          <TextField 
                  id="standard-disabled" 
                  label="Email ID" 
                  variant="outlined" 
                  defaultValue={email1}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                  disabled="true"
                  sx={{
                          width: '80%',
                          margin: 'auto',
                          marginTop: '5px',
                          color:'inherit',
                          
                      }}
              />
            <TextField 
                  id="outlined-basic" 
                  label="Name" 
                  variant="outlined" 
                  required="true"
                  defaultValue={name1}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                  onChange={handleNameChange}
                  sx={{
                          width: '80%',
                          margin: 'auto',
                          marginTop: '20px',
                          color:'black'
                      }}
              />
              <FormControl 
                  fullWidth 
                  sx={{
                      width: '80%',
                      margin: 'auto',
                      marginTop: '20px',
                      color:'black'
                  }}>
                <InputLabel id="demo-simple-select-label">School</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={schoolname}
                  label="School"
                  onChange={handleSchoolNameChange}
                  sx={{textAlign: 'left'}}
                  required="true"
                >
                {schools.map((school, index) => (
                    <MenuItem key={index} value={school} sx={{textAlign: 'left'}}>{school}</MenuItem>
                ))}
                </Select>
              </FormControl>
            <div class="p-6 pt-0 mt-10">
                <button type="submit" class="bg-discordpurple-0 bg-opacity-50 inline-flex align-middle items-center  justify-center px-5 py-3 text-xl text-center text-black rounded-lg hover:bg-discordpurple-0 hover:bg-opacity-40 hover:shadow-gray-600 hover:shadow-sm  focus:ring-4 focus:ring-blue-100" >    
                    Send for Approval <svg class="w-5 h-5 ms-2 group:text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="check"><rect width="256" height="256" fill="none"></rect><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" points="216 72.005 104 184 48 128.005" ></polyline></svg>
                    
                </button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title" sx={{backgroundColor:'#efebf3', marginBottom:'4px'}}>
                    {"Account Request Submitted!"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{color:'black'}}>
                      Your account has been sent for approval.<br></br> Please wait for the admin to approve your account.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <a href="/teacher/login" autoFocus class="ml-1 text-black px-4 py-2  rounded-lg ">
                      Continue
                    </a>
                  </DialogActions>
                </Dialog>
            </div>
          </form>
        </div>  
        </div>
        </div>
    </div>
    )
  }