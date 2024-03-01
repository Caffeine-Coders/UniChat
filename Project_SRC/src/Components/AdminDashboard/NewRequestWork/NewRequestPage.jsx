"use client";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { darktheme } from "../../Themes/Themes";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { getApprovalRequest } from "../../../Services/admin/Request_Approval";

function NewRequestPage() {
    const [request, setRequest] = React.useState([]);
    const [Refresh, setRefresh] = React.useState(false);
    const [onClicked, setonClicked] = React.useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getApprovalRequest("Pending");
            setRequest(data);
        };
        fetchData();
    }, [Refresh]);
    
    
    return (
        onClicked ? <Box
            sx={{
                width: '100%',
                typography: 'body1',
                color: (theme) => theme.palette.primary.whites,
                justifyContent: 'center',
                alignContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                mt: 1,
                alignItems: 'center', // Add this line to center the content horizontall
                overflowY: "auto"
            }}
            onMouseEnter={() => setRefresh(!Refresh)}
        >
        {
            request? request.map((req, index) => {
                return (
                    <Button onClick={()=> setonClicked(!onClicked)}  sx={{backgroundColor: (theme)=>theme.palette.primary.ButtonColor, width: '100%', mb: 4, "&:hover":{backgroundColor: (theme) => theme.palette.primary.ButtonHover}}}>
                        <Typography variant="h4" color="secondary" sx={{color: (theme) => theme.palette.primary.whites, fontFamily: '"Kode Mono", monospace', fontWeight: 10}}>
                            {req.schoolname}
                        </Typography>
                        <NavigateNextIcon  sx={{color: (theme) => theme.palette.primary.whites, fontSize: '3rem', ml: 4}}/>
                    </Button>
                );
            }): <div> No Request Found</div>
        }
        </Box>
        :
        <Box>None</Box>   
    );
}

export default NewRequestPage;