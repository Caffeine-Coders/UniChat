"use client";
import React, { useEffect } from 'react'
// import {upload, authorize} from './qpp'
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
  // return (
  //   <div>
  //     <h1>Drive</h1>
  //     <button onClick={()=>handleopenPicker()}>Upload</button>

  //     {/* <iframe src="https://drive.google.com/embeddedfolderview?id=1Ad-8C0RBwq34dSZlsBK9XxjUGORBElxV#grid" 
  //       width="600" 
  //       height="500" 
  //       // frameborder="0"
  //       >
  //     </iframe> */}
  //   </div>
  // )
}