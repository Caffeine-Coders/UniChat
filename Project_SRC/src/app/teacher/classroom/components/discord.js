"use client"
import React from 'react';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function Discord() {
  if (typeof window!== 'undefined'){
    const msgoption = localStorage.getItem("messageoption")
    console.log("found this",msgoption)
  }
  return (
    <>
    
    <a href='/teacher/classroom'>
            <span class="flex text-sm" >
            <ArrowBackIcon style={{height:'20px'}}/> Classroom</span>
            </a>
      <div style={{ height: '85vh', width: '100%', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
        
        <iframe
          src={`https://e.widgetbot.io/channels/1204543420148752434/1204543420148752437`}
          style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </div>
      </>
  );
}

