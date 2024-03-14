"use client";
import React, { useEffect } from "react";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getApprovalRequest } from "../../../Services/admin/Request_Approval";

function ApprovedRequestList() {   
    const [request, setRequest] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getApprovalRequest("Approved");
            setRequest(data);
        }
        fetchData();
    });

    return (
        <Box>
            {
                Array.isArray(request) && request.length > 0? request.map((req, index) => {
                    return (
                        <Button disabled  sx={{backgroundColor: (theme)=>theme.palette.primary.ButtonColor, width: '100%', mb: 4, "&:hover":{backgroundColor: (theme) => theme.palette.primary.ButtonHover}}}>
                            <Typography variant="h4" color="secondary" sx={{color: (theme) => theme.palette.primary.whites, fontFamily: '"Kode Mono", monospace', fontWeight: 10}}>
                                {req.schoolname}
                            </Typography>
                            <DoneAllIcon  sx={{color: (theme) => theme.palette.primary.whites, fontSize: '3rem', ml: 4}}/>
                        </Button>
                    );
                }): <div> No Request Found</div>
            }
        </Box>
    );
}

export default ApprovedRequestList;