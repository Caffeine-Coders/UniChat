"use client"
import "../components/land.css"
import { useState } from "react";
import * as React from 'react';
// import { signupaccount } from "../essentials/conn";
import { Signuplogin } from "../essentials/conn";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
export default function content() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signupinstance = Signuplogin()
    const [open, setOpen] = React.useState(false);
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        signupinstance.signupaccount(name, email, password);
        setOpen(true);
    }
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => { event.preventDefault(); };
   
    return (
    <div class="text-center flex justify-center align-middle mt-40">
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-2xl bg-clip-border rounded-xl w-1/3 h-full ">
        <div class="p-6">
            <div class="block mb-2 text-6xl font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 font-headx" >
                Sign Up
            </div>
        </div>
          <form onSubmit={handleSubmit}>
            <TextField 
                  id="outlined-basic" 
                  label="Name" 
                  variant="outlined" 
                  required="true"
                  onChange={handleNameChange}
                  sx={{
                          width: '80%',
                          margin: 'auto',
                          marginTop: '5px'
                      }}
              />
              <TextField 
                  id="outlined-basic" 
                  label="Email ID" 
                  variant="outlined" 
                  required="true"
                  onChange={handleEmailChange}
                  sx={{
                          width: '80%',
                          margin: 'auto',
                          marginTop: '20px'
                      }}
              />

              <FormControl sx={{ m: 1, width: '80%', marginTop: '20px' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                        required="true"
                        onChange={handlePasswordChange}
                    />
              </FormControl>
            <div class="p-6 pt-0 mt-10">
                <button type="submit" class="inline-flex align-middle items-center w-3/5 justify-center px-5 py-3 text-base text-xl text-center text-black bg-slate-200 rounded-lg hover:bg-discordpurple-300  focus:ring-4 focus:ring-blue-100" >    
                    Sign Up!
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
          <div class="text-sm -mt-5 mb-10">
              Already have an Accound? 
              <a class="ml-1 text-blue" href="/te@cher/login">Sign in</a>
          </div>
        </div>  
    </div>
    )
  }