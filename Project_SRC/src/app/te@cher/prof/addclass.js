'use client'
import React, { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Tooltip } from "@mui/material";
import { styled } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import {useDropzone} from 'react-dropzone';
import Papa from 'papaparse';
import { useRouter } from 'next/navigation';
import { Button } from "@mui/material";
export default function NewClassroom(){
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    const [className, setClassName] = React.useState('');
    const [classNumber, setClassNumber] = React.useState('');
    const [parsedData, setParsedData] = React.useState(null);
    const [filename,setfilename] = React.useState(null)
    const router = useRouter();
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
    const handleSubmit = (event) => {
        event.preventDefault();
        const emailAndName = getEmailAndName();
        if (!className.trim() || !classNumber.trim()) {
          alert("Please fill all the details.");
          return;
        } 
        else if (emailAndName.length === 0) {
          alert("Please upload a valid CSV file.");
          return;
        } 
        else {
          console.log("class name",className);
          console.log("email name",emailAndName);
          const classname = JSON.stringify(className);
            localStorage.setItem("classname", classname, () => {
                JSON.parse(localStorage.getItem("classname"));
            });
            const classnumber = JSON.stringify(classNumber);
            localStorage.setItem("classnumber", classnumber, () => {
                JSON.parse(localStorage.getItem("classnumber"));
            });
            const emailname = JSON.stringify(emailAndName);
            localStorage.setItem("emailname", emailname, () => {
                JSON.parse(localStorage.getItem("emailname"));
            });
            router.push('/te@cher/prof/classroom')
        //   csvParser(files)
        }
    }
    const getEmailAndName = () => {
        if (parsedData) {
          return parsedData.map(row => {
            if (row['Email Address']) {
              return {
                email: row['Email Address'],
                name: row['First Name'] + ' ' + row['Last Name'],
              };
            }
            return null;
          }).filter(entry => entry !== null);
        }
        return [];
      };
      const csvParser = (files) =>{
        console.log(files)
        Papa.parse(files,{
            complete:function(results){
                console.log(results.data)
                setParsedData(results.data);
            },
            header:true, 
            skipEmptyLines:true,
            
        })
      }
      const handleFileName = (event) =>{
        const file = event.target.files[0];
        if (file) {
            setfilename(file.name);
            csvParser(file)
        }
      }

    return (
        
        <div class="p-8 backdrop-filter backdrop-blur-sm bg-opacity-80 rounded-2xl w-3/4 mx-auto">
        <Container component="main" maxWidth="xl" sx={{ mb: 4, minWidth:500}}>
            
        <div class="mt-4">
                    <p class="text-3xl"> Class Details</p>
                    <div class="relative h-11 w-full min-w-[200px] mt-7">
                        <input placeholder="Grade Level"
                        onChange={(e) => setClassNumber(e.target.value)}
                        class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                        class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-lg font-normal leading-tight  transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Class Number
                        </label>
                    </div>
                    <div class="relative h-11 w-full min-w-[200px] mt-7">
                        <input placeholder="Subject Areas"
                        onChange={(e) => setClassName(e.target.value)}
                        class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                        class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-lg font-normal leading-tight  transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Class Name
                        </label>
                    </div>
                    <div class="flex items-center justify-center w-full mt-8">
                    <Button
                        component="label"
                        role={undefined}
                        // variant="contained"
                        tabIndex={-1}
                        // startIcon={<CloudUploadIcon />}
                        sx={{justifyContent:'justify', alignItems:'center', backgroundColor:'transparent', boxShadow:'none', color: 'black'}}
                        >
                        <div class="flex flex-col items-center justify-center w-full h-auto border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p class="mb-2 text-sm "><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-sm">Upload your exported Grades CSV File here to add Students</p>
                            </div>
                        </div>
                        <VisuallyHiddenInput type="file" onChange={handleFileName} required />
                        
                        </Button>
                        </div>
                    </div>
                    
                 <div class=" mt-20 ">
                    <button class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-white text-black border-2 border-black rounded-lg hover:bg-slate-300 focus:ring-4 focus:ring-blue-100" >    
                         <span> Cancel</span>
                     </button>
                     <button 
                        class="inline-flex float-right items-center justify-center  px-5 py-3 text-base font-medium text-center text-white bg-discordpurple-100 rounded-lg hover:bg-discordpurple-200 focus:ring-4 focus:ring-blue-100" 
                        onClick={handleSubmit}
                    >    
                         Create 
                         <SchoolIcon sx={{marginLeft:'4px'}}/>
                     </button>
                 </div>
                 

            </Container>
    </div>
    )
}