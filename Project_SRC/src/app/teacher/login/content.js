"use client"
import * as React from 'react';
import {Signuplogin} from "../essentials/conn"
import { useRouter } from 'next/navigation';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress } from '@mui/material';

export default function content() {
    const router = useRouter()
    const loginInstance = Signuplogin()
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [loading,setLoading] = React.useState(false)
    const handleClose = () => {
        setOpen(false);
    };

    const focusHandler = (event) =>{
           setLoading(false)
    }
    const handeGoogle =  (event) =>{
        event.preventDefault()
        setLoading(true)
        window.addEventListener("focus",focusHandler)
        loginInstance.googleLogin().then((data)=>{
        const verificationStatus = data.verificationStatus
        const name = data.name
        const photourl = data.photourl
        const accessToken = data.accessToken
        const emailID = JSON.stringify(verificationStatus);
        localStorage.setItem("emailID", emailID, () => {
            const retrievedEmail = JSON.parse(localStorage.getItem("emailID"));
        });
        const Tname = JSON.stringify(name);
        localStorage.setItem("Tname", Tname, () => {
            const retrievedName = JSON.parse(localStorage.getItem("Tname"));

        });
        const photoURL = JSON.stringify(photourl);
        localStorage.setItem("photoURL", photoURL, () => {
            const retrievedurl = JSON.parse(localStorage.getItem("photoURL"));
        });
        const token = JSON.stringify(accessToken);
        localStorage.setItem("token", token, () => {
            JSON.parse(localStorage.getItem("token"));
        });
        setLoading(false)
        if (verificationStatus=="in db and true"){
            router.push("/teacher/dashboard")
        } else if (verificationStatus=="in db and false"){
            setOpen(true)
            loginInstance.unauthsignout()
            const tempemail = JSON.parse(localStorage.getItem("emailID"));
            console.log("retrieved email:", tempemail);
        } else{
            setOpen1(true)
        }
        }).catch((error)=>{
                })
    }

    return (
    <div class="text-center flex justify-center align-middle mt-16" >
        {loading && (
                <div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <CircularProgress color="primary" />
                </div>
            )}
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-2xl bg-clip-border rounded-xl w-3/5 h-full">
            <div class="flex items-center w-full">
                <img class="w-1/2 rounded-xl h-96" src="https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg" alt="login" />
            
                <div class="w-1/2">
                    <div class="p-6">
                        <div class="block  mb-2 text-6xl font-sans antialiased font-semibold leading-snug tracking-normal text-black font-headx" >
                            Welcome!
                     
                        </div>
                    </div>
                    <div class="p-6 pt-0 mt-10">
                            <button type="button"  onClick={handeGoogle} class="bg-discordpurple-0 bg-opacity-50  hover:shadow-gray-600 hover:shadow-sm inline-flex align-middle items-center w-3/5 justify-center px-5 py-3 text-xl text-center text-black  rounded-md hover:bg-discordpurple-0 hover:bg-opacity-40  focus:ring-4 focus:ring-blue-100" >    
                                Sign in with <img class="w-8 h-8 ms-2" src="https://img.icons8.com/color/48/000000/google-logo.png" alt="google"/>
                            </button>
                    </div>
                </div>
            </div>



            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Account Not Approved yet!"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Your account is currently under review with team. Please wait for the approval.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <a href="/te@cher" autoFocus class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border border-2 border-black rounded-lg bg-white hover:bg-slate-300 focus:ring-4 focus:ring-blue-100">
                    Continue
                </a>
                </DialogActions>
            </Dialog>
            
            {/* dialog for email not in db */}

            <Dialog
                  open={open1}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"User not Found!"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Account doesn't exist. Do you want to send this account for Admin Approval?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                  <a href="/teacher" autoFocus class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border border-2 border-black rounded-lg bg-white hover:bg-slate-300 focus:ring-4 focus:ring-blue-100">
                      Cancel
                    </a>
                    <a href="/teacher/signup" autoFocus class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border border-2 border-black rounded-lg bg-white hover:bg-slate-300 focus:ring-4 focus:ring-blue-100">
                      Send for Approval
                    </a>
                  </DialogActions>
                </Dialog>
        </div>  
    </div>
    )
  }