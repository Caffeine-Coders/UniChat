"use client";
import React, { useEffect } from 'react'
import useDrivePicker from 'react-google-drive-picker'
export function Drivecomponent() {
  const [openPicker, data, authResponse] = useDrivePicker()

  function handleopenPicker ()  {
    openPicker({
      clientId: '627377626990-dh0rifs0dih0c2ttl6l6f6garog9vebt.apps.googleusercontent.com',
      developerKey: 'AIzaSyBvze5ee8eCbgBmy9uqFQutYFYB3ydhZCA',
      viewId: 'DOCS',
      showUploadFolders: true,
      showUploadButton: true,
      showGoogleDriveLogo: true,
      multiselect: true,
      supportDrives: true,
      docsUploadView: true,
      PickerConfiguration: {
        showUploadView: true,
        showUploadFolders: true,

      }
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