"use client";
import React, { useEffect } from 'react';

import useDrivePicker from 'react-google-drive-picker';

const DrivePicker = () => {

    const[openPicker, data, authresponse] = useDrivePicker();

    const handleOpenPicker = () => {
        openPicker(
            {
                clientId: "6qtbv9u1almv61fubs4n0n7ojan7lsck.apps.googleusercontent.com",
                developerKey: "AIzaSyCUEwSsinL08-FGU48bz4mt8lXMMwKvIcQ",
                viewId: "DOCS",
                showUploadView: true,
                showUploadFolders: true,
                supportDrives: true,
                multiselect: true,
                locale: "en",
                sandbox: false,
            }
        )
    }

    useEffect(() => {
        if(data)
        {
            data.docs.map((i) => {
                console.log(i);
            })
        }
    }, [data])


    return (
        <div>
            
        </div>
    );
}

export default DrivePicker;