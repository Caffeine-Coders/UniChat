"use client";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { darktheme } from "../Themes/Themes";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TabPanel from '@mui/lab/TabPanel';
import TabList from '@mui/lab/TabList';
import TabContext from '@mui/lab/TabContext';
import NewRequestPage from "./NewRequestWork/NewRequestPage";
import ApprovedRequestList from "./ApprovedRequestWork/ApprovedRequestList";
export default function DashboardDetails() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <ThemeProvider theme={darktheme}>
             <Box sx={{ 
                    width: '100%', 
                    typography: 'body1', 
                    color: (theme)=> theme.palette.primary.whites,
                    justifyContent: 'center',
                    alignContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    mt: 1,
                    alignItems: 'center', // Add this line to center the content horizontall
                    }}
                >
                <TabContext value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    centered
                >
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example"
                        textColor="secondary"
                        indicatorColor="secondary"
                    >
                        <Tab label="New Requests" value="1" />
                        <Tab label="Approved Requests" value="2" />
                    </TabList>
                    </Box>

                    <TabPanel value="1">
                        <NewRequestPage />
                    </TabPanel>
                    <TabPanel value="2">
                        <ApprovedRequestList />
                    </TabPanel>
            </TabContext>
            </Box>
        </ThemeProvider>
    );
}