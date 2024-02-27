"use client";
import React, { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Alert, FormControl, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Image from 'next/image';
import RegisterLogo from "../../Assets/Register.png";
import LandingNav from '../LandingNav/LandingNav';
import { darktheme } from '../Themes/Themes';
 
import {NewRequest} from "../../Services/admin/Request_Approval.js"
import { useRouter } from 'next/navigation';
import check from "../../Assets/Check.gif";
 

export default function Details()
{
    const [schoolname, setschoolname] = React.useState('');
    const [schooladdress1, setschooladdress1] = React.useState('');
    const [schooladdress2, setschooladdress2] = React.useState('');
    const [city, setcity] = React.useState('');
    const [state, setstate] = React.useState('');
    const [country, setcountry] = React.useState('');
    const [zipcode, setzipcode] = React.useState('');

    const [nextclicked, setnextclicked] = React.useState(false);
    const [error, seterror] = React.useState(false);

    const [adminfirstname, setadminfirstname] = React.useState('');
    const [adminlastname, setadminlastname] = React.useState('');
    const [adminemail, setadminemail] = React.useState('');
    
    const [Submit, setSubmit] = React.useState(false);
    const router = useRouter();

    const SendRequest = async () => {
        if(schoolname !== '' && schooladdress1 !== '' && city !== '' && state !== '' && country !== '' && zipcode !== '' && adminfirstname !== '' && adminlastname !== '' && adminemail !== '') {
            const result = await NewRequest(schoolname, schooladdress1, schooladdress2, city, state, zipcode, country, adminfirstname, adminlastname, adminemail);
            console.log(result);
            if(result.status === 200) {
                setSubmit(true);
            }
            else
            {
                seterror(true);
            
            }
        }
    }

    useEffect(() => {
        if (error) {
            // Set a timer to clear the error after 3 seconds (adjust as needed)
            const timer = setTimeout(() => {
                seterror(false); // Clear the error
            }, 2000);

            // Cleanup function to clear the timer if the component unmounts or `error` changes before the timeout
            return () => clearTimeout(timer);
        }
    }, [error]);

 
    return(
        <ThemeProvider theme={darktheme}>
        {(!nextclicked)? 
        // School Details
            <Box
                component="form"
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    mt: 7,
                }}
                autoComplete="off"
            >
                <TextField
                    required
    
                    id="fullWidth" 
                    label="School Name"
                    variant="outlined"
                    sx={{ width: '100%', mb: 2, ".MuiFormLabel-root":{color: (theme) => theme.palette.primary.textcolor}}} // Increase the width to 100%
                    defaultValue={schoolname}
                    onChange={(e) => setschoolname(e.target.value)}
                />
                <TextField
                    required
                    id="school-address1"
                    label="School Address Line 1"
                    variant="outlined"
                    sx={{ width: '100%',mb: 2 ,".MuiFormLabel-root":{color: (theme) => theme.palette.primary.textcolor}}} // Increase the width to 100%
                    onChange={(e) => setschooladdress1(e.target.value)}
                    defaultValue={schooladdress1}
                />
                <TextField
                    label="School Address Line 2"
                    variant="outlined"
                    sx={{ width: '100%',mb: 2, ".MuiFormLabel-root":{color: (theme) => theme.palette.primary.textcolor}}} // Increase the width to 100%
                    onChange={(e) => setschooladdress2(e.target.value)}
                    defaultValue={schooladdress2}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        mb: 2
                    }}

                >
                <TextField
                    required
                    id="outlined-required"
                    label="City"
                    variant="outlined"
                    sx={{ width: '50%', mr: 2 , ".MuiFormLabel-root":{color: (theme) => theme.palette.primary.textcolor}}} // Increase the width to 100%
                    onChange={(e) => setcity(e.target.value)}
                    defaultValue={city}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="State"
                    variant="outlined"
                    sx={{ width: '50%',  ".MuiFormLabel-root":{color: (theme) => theme.palette.primary.textcolor}}} // Increase the width to 100%
                    onChange={(e) => setstate(e.target.value)}
                    defaultValue={state}
                />
                </Box>
            
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                    
                    }}
                >
                    <TextField
                        required
                        id="outlined-required"
                        label="Country"
                        variant="outlined"
                        sx={{ width: '50%', mr: 2 , mb: 2, ".MuiFormLabel-root":{color: (theme) => theme.palette.primary.textcolor}}} // Increase the width to 100%
                        onChange={(e) => setcountry(e.target.value)}
                        defaultValue={country}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Zip Code"
                        variant="outlined"
                        sx={{ width: '50%', mb:2 , ".MuiFormLabel-root":{color: (theme) => theme.palette.primary.textcolor}}} // Increase the width to 100%
                        onChange={(e) => setzipcode(e.target.value)}
                        defaultValue={zipcode}
                    />
                </Box>
                <Button variant="contained" sx={{mr: 2, color: (theme)=> theme.palette.primary.whites, backgroundColor: (theme) => theme.palette.primary.ButtonColor, "&:hover": {backgroundColor: (theme) => theme.palette.primary.ButtonHover}}}
                  onClick={() => { 
                    if (schoolname !== '' && schooladdress1 !== '' &&  city !== '' && state !== '' && country !== '' && zipcode !== '') {
                        setnextclicked(true);
                    } else {
                        seterror(true);
                    }
                    }}
                >
                        Next
                </Button>
                <Button variant="outlined" 
                    sx={{mr: 2, color: (theme)=> theme.palette.primary.whites, 
                    borderColor: (theme) => theme.palette.primary.ButtonColor, "&:hover": {borderColor: (theme) => theme.palette.primary.ButtonHover}}}
                    onClick={() => {router.push('/');}}
                >
                        Go Back
                </Button>
                {error ? <Alert variant="outlined" severity="error" sx={{mt: 2}}>
                            All fields are required. Please fill all the fields.
                        </Alert>: null}

            </Box>
            : 
            // Admin Details
            (!Submit) ? <Box
                component="form"
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    mt: 7,
                }}
                autoComplete="off"
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        mb: 2
                    }}
                >
                    <TextField
                        required
        
                        id="fullWidth" 
                        label="Admin's First Name"
                        variant="outlined"
                        sx={{ width: '50%', mr: 2, ".MuiFormLabel-root":{color: (theme) => theme.palette.primary.textcolor}}} // Increase the width to 100%
                        onChange={(e) =>  setadminfirstname(e.target.value)}
                        defaultValue={adminfirstname}
                    />
                    <TextField
                        required
                        id="admin-last-name"
                        label="Admin's Last Name"
                        variant="outlined"
                        sx={{ width: '50%' , ".MuiFormLabel-root":{color: (theme) => theme.palette.primary.textcolor}}} // Increase the width to 100%
                        onChange={(e) =>  setadminlastname(e.target.value)}
                        defaultValue={adminlastname}

                    />
                </Box>
                <Box>
                    <TextField
                            required
                            id="fullWidth"
                            label="Admin's email address"
                            variant="outlined"
                            sx={{ width: '100%', mb: 2, ".MuiFormLabel-root":{color: (theme) => theme.palette.primary.textcolor}}} // Increase the width to 100%
                            onChange={(e) =>   setadminemail(e.target.value)}
                            defaultValue={adminemail}

                        />
                </Box>
               
                <Button variant="contained" sx={{mr: 2, color: (theme)=> theme.palette.primary.whites, backgroundColor: (theme) => theme.palette.primary.ButtonColor, "&:hover": {backgroundColor: (theme) => theme.palette.primary.ButtonHover}}}
                  onClick={() => { 
                    if (adminfirstname !== '' && adminlastname !== '' && adminemail !== '') {
                        SendRequest();
                    } else {
                        seterror(true);
                    }
                    }}
                >
                        Submit
                </Button>
                <Button variant="outlined" sx={{mr: 2, color: (theme)=> theme.palette.primary.whites, borderColor: (theme) => theme.palette.primary.ButtonColor, "&:hover": {borderColor: (theme) => theme.palette.primary.ButtonHover}}}
                    onClick={() => {setnextclicked(false); setSubmit(false);}}
                >
                        Go Back
                </Button>
                {error ? <Alert variant="outlined" severity="error" sx={{mt: 2}}>
                            All fields are required. Please fill all the fields.
                        </Alert>: null}
            </Box> 
            : 
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 8,
                }}
            >
             
                <Image src={check.src} width={300} height={300}/>

                <Typography 
                    sx={{
                        color: "white",
                        fontFamily: '"Kode Mono", monospace',
                        fontWeight: 100,
                        letterSpacing: 5,
                        mt: 2,
                        textAlign: 'center'
                    }}
                    variant='h4'
                >
                    Request Submitted Succesfully.
                </Typography>

                <Button variant="outlined" 
                    sx={{mt: 2, width: 300, color:  (theme)=> theme.palette.primary.whites, borderColor: (theme)=> theme.palette.primary.ButtonColor, "&:hover": {backgroundColor: (theme) => theme.palette.primary.ButtonHover}}}
                    onClick={() => {router.push('/');}}
                >
                    Go Back
                </Button>
            </Box>
            }
    </ThemeProvider>
    )
}