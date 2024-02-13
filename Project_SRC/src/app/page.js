import PrimarySearchAppBar from "../Components/navBar/navBar";
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
import React from 'react';
import SideBar from '../Components/SideBar/sidebar.jsx';
import Loader from "../Components/Loader/loader";

const Discord = dynamic(
  () => {
    return import("@/Components/discord/discord.js");
  },
  { ssr: false }
);


 
export default function Home() {
  return (
    <Box>
       <Loader/>
      <Box
        sx={{ maxWidth: "75%", marginLeft: 43, marginTop: 2 }}
      >
        <PrimarySearchAppBar />
      </Box>
      <Box
        sx={{ maxWidth: "75%", marginLeft: 43, marginTop: 2 }}
      >
        <Discord />
        <SideBar />  
      </Box>
    </Box>
  );
}
