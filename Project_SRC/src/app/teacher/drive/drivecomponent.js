"use client";
import React, { useEffect } from 'react'
import useDrivePicker from 'react-google-drive-picker'
export function Drivecomponent() {
  const [openPicker, data, authResponse] = useDrivePicker()
  const [googletoken, setgoogletoken] = React.useState('');
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedtoken = localStorage.getItem("token");
      if (storedtoken) {
        setgoogletoken(JSON.parse(storedtoken));
      }
    }
    }, []);
  function handleopenPicker ()  {
    // const apiToken = sessionStorage.getItem("googletoken");
    // console.log("api token",googletoken)
    openPicker({
      clientId: '627377626990-dh0rifs0dih0c2ttl6l6f6garog9vebt.apps.googleusercontent.com',
      developerKey: 'AIzaSyBvze5ee8eCbgBmy9uqFQutYFYB3ydhZCA',
      viewId: "DOCS",
      showUploadView: true,
      // token: apiToken,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
    })
  }
  

  useEffect(() => {
    if (data && data.docs) {
      data.docs.map((doc) => 
        console.log(doc)
      )
    }
  })
  return {
    handleopenPicker:handleopenPicker
  }
}