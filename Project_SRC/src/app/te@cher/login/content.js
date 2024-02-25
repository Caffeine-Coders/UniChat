"use client"
import "../components/land.css"
import { useState } from "react";
import * as React from 'react';
// import { loginaccount } from "../essentials/conn";
import {Signuplogin} from "../essentials/conn"
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


export default function content() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginInstance = Signuplogin()
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        await loginInstance.loginaccount(email, password);
        
    }
    const handeGoogle =  (event) =>{
        console.log("hereee")
        event.preventDefault()
        loginInstance.googleLogin().then((verificationStatus)=>{
            console.log(verificationStatus)
        })
        // const verificationStatus  = loginInstance.googleLogin();
        // console.log("login got it",verificationStatus)
    }
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => { event.preventDefault(); };

    return (
    <div class="text-center flex justify-center align-middle mt-40">
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-2xl bg-clip-border rounded-xl w-1/3 h-full ">
            <div class="p-6">
                <div class="block mb-2 text-5xl font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 font-headx" >
                    Sign in to your account
                </div>
            </div>
            <form onSubmit={handleSubmit} >
                
            <TextField 
                id="outlined-basic" 
                required="true"
                label="Email ID" 
                variant="outlined" 
                onChange={handleEmailChange}
                sx={{
                        width: '80%',
                        margin: 'auto',
                        marginTop: '5px'
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
                    <button type="submit" class="inline-flex align-middle items-center w-3/5 justify-center px-5 py-3 text-xl text-center text-black bg-slate-200 rounded-md hover:bg-discordpurple-300  focus:ring-4 focus:ring-blue-100" >    
                        Sign in
                    </button>
                </div>
            </form>
            <div class="p-6 pt-0 mt-10">
                    <button type="button" onClick={handeGoogle} class="inline-flex align-middle items-center w-3/5 justify-center px-5 py-3 text-xl text-center text-black bg-slate-200 rounded-md hover:bg-discordpurple-300  focus:ring-4 focus:ring-blue-100" >    
                        Sign in with google
                    </button>
                </div>
            <div class="text-sm -mt-5 mb-10">
                Don't have an account? 
                <a class="ml-1 text-blue" href="/te@cher/signup">Sign up</a>
            </div>
        </div>  
    </div>
    )
  }