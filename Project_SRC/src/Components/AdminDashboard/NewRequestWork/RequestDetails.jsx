"use client";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { darktheme } from "../../Themes/Themes";
import { sendEmail, updateRequest, createSchoolDb} from "../../../Services/admin/Request_Approval";
import check from "../../../Assets/Check.gif";
import Image from "next/image";

export default function RequestDetails(props) {
    const data = props.data;
    const [approved, isApproved] = React.useState(false);
    const [rejected , isRejected] = React.useState(false);

    const onClick_approve = async () => {
        const res = await updateRequest(data.schoolname, "Approved");
        console.log(res);
        if(res.status === 200){
            const newdatabase = await createSchoolDb(data.schoolname.toLowerCase(), data.schooladminFname, data.schooladminLname, data.schooladminemail);
            const email = await sendEmail(data.schooladminFname, data.schooladminLname, data.schooladminemail, data.schoolname);
            if(email.status === 200 && newdatabase.status === 200)
            {
                isApproved(true);
            }
        }
        else{
            console.log("error");
        }
    }

    const onClick_reject = async () => {
        const res = await updateRequest(data.schoolname, "Rejected");
        if(res.status === 200){
            isRejected(true);
        }
    }

    return (
       !approved ? <Box
              sx={{
                width: '100%',
                typography: 'body1',
                color: (theme) => theme.palette.primary.whites,
                justifyContent: 'flex-start',
                alignContent: 'start',
                display: 'flex',
                flexDirection: 'column',
                mt: 1,
                overflowY: "auto"
              }}
       >
            <Typography variant="h3" color="secondary" sx={{color: (theme) => theme.palette.primary.whites, fontFamily: '"Kode Mono", monospace', fontWeight: 10, textTransform: 'capitalize'}}>
                {data.schoolname}
            </Typography>
          
            <Typography variant="body1" color="secondary" 
                sx={{color: (theme) => theme.palette.primary.whites, 
                    fontFamily: '"Kode Mono", monospace', 
                    fontWeight: 10, 
                    textTransform: 'capitalize', 
                    mt: 2}}
                noWrap
                >
                address: {data.schooladdress1}{", "}{data.schooladdress2 ? (data.schooladdress2 + ",") : null}{data.schoolcity}{", "}{data.schoolstate}{", "}{data.schoolpincode}
            </Typography>
            
            <Typography variant="body1" color="secondary" 
                sx={{color: (theme) => theme.palette.primary.whites, 
                    fontFamily: '"Kode Mono", monospace', 
                    fontWeight: 10, 
                    textTransform: 'capitalize', 
                    mt: 2}}
                noWrap
            >
                Admin Name: {data.schooladminFname}{" "}{data.schooladminLname}
            </Typography>
            
            <Typography variant="body1" color="secondary" 
                sx={{color: (theme) => theme.palette.primary.whites, 
                    fontFamily: '"Kode Mono", monospace', 
                    fontWeight: 10, 
                    mt: 2}}
                noWrap
            >
                admin email: {data.schooladminemail}
            </Typography>
            
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                mt: 3
            }}
            >
                <Button 
                    onClick={onClick_approve}
                    sx={{backgroundColor: (theme)=>theme.palette.primary.ButtonColor, width: '40%', mb: 4, mr: 2, "&:hover":{backgroundColor: (theme) => theme.palette.primary.ButtonHover}}}>
                    <Typography variant="h4" color="secondary" sx={{color: (theme) => theme.palette.primary.whites, fontFamily: '"Kode Mono", monospace', fontWeight: 10}}>
                        Approve
                    </Typography>
                </Button>
                
                <Button 
                    onClick={onClick_reject}
                    sx={{backgroundColor: (theme)=>theme.palette.primary.ButtonColor, width: '40%', mb: 4, "&:hover":{backgroundColor: (theme) => theme.palette.primary.ButtonHover}}}>
                    <Typography variant="h4" color="secondary" sx={{color: (theme) => theme.palette.primary.whites, fontFamily: '"Kode Mono", monospace', fontWeight: 10}}>
                        Reject
                    </Typography>
                </Button>

            </Box>
       </Box>:
        rejected?
        <Box>
            Rejected Succesfully
        </Box>
        :<Box
            sx={{
                width: '100%',
                color: (theme) => theme.palette.primary.whites,
                justifyContent: 'center',
                alignContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                mt: 1,
                alignItems: 'center', // Add this line to center the content horizontall
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
                    Request Approved Succesfully.
                </Typography>

       </Box>
    );
}