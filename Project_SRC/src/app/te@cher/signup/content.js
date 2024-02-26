"use client"
import "../components/land.css"
import { useState } from "react";
import * as React from 'react';
// import { signupaccount } from "../essentials/conn";
import { Signuplogin } from "../essentials/conn";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';
export default function content() {
  const [name, setName] = useState('');
    const [schoolname, setSchoolName] = useState('');
    const signupinstance = Signuplogin()
    const [open, setOpen] = React.useState(false);
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
    const handleSchoolNameChange = (event) => {
        setSchoolName(event.target.value);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        await signupinstance.signupaccount(name1,email1,schoolname)
        setOpen(true);
    }
   
    return (
    <div class="text-center flex justify-center align-middle mt-40">
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-2xl bg-clip-border rounded-xl w-1/3 h-full ">
        <div class="p-6">
            <div class="block mb-2 text-4xl font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 font-headx" >
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
                          marginTop: '5px'
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
                          marginTop: '20px'
                      }}
              />
              <TextField 
                  id="outlined-basic" 
                  label="School Name" 
                  variant="outlined" 
                  required="true"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"></InputAdornment>,
                  }}
                  onChange={handleSchoolNameChange}
                  sx={{
                          width: '80%',
                          margin: 'auto',
                          marginTop: '20px'
                      }}
              />
            <div class="p-6 pt-0 mt-10">
                <button type="submit" class="inline-flex align-middle items-center w-3/5 justify-center px-5 py-3 text-base text-xl text-center text-black bg-slate-200 rounded-lg hover:bg-discordpurple-300  focus:ring-4 focus:ring-blue-100" >    
                    Send for Approval
                </button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Account Create Success!"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Your account has been sent for approval. Please wait for the admin to approve your account.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <a href="/te@cher/login" autoFocus class="ml-1 text-blue">
                      Continue
                    </a>
                  </DialogActions>
                </Dialog>
            </div>
          </form>
        </div>  
    </div>
    )
  }