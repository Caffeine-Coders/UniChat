'use client'
import React, { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import { styled } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import Papa from 'papaparse';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import { useRouter } from 'next/navigation';
import { Button } from "@mui/material";
import {addClass} from '../dbconnections/addClass'
export default function NewClassroom(){
    const [className, setClassName] = React.useState('');
    const [classNumber, setClassNumber] = React.useState('');
    const [parsedData, setParsedData] = React.useState(null);
    const [filename,setfilename] = React.useState(null)
    const [loading,setLoading] = React.useState(false)
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
      const [emailid, setEmailid] = React.useState('');
      React.useEffect(() => {
        if (typeof window !== 'undefined') {
          const storedEmail = localStorage.getItem("Temail");
          if (storedEmail) {
            setEmailid(JSON.parse(storedEmail));
          }
        }
      }, []);
    
      const [selectedYear, setSelectedYear] = React.useState("")
      const [selectedSemester,setSelectedSemester] = React.useState("")
      const handleYear = (event) =>{
        setSelectedYear(event.target.value)
      }
      const handleSemester = (event) =>{
        setSelectedSemester(event.target.value)
      }

    const handleSubmit = (event) => {
      
        event.preventDefault();
      
        const studentemail = getEmails();
        const studentname = getNames();
        if (!className.trim() || !classNumber.trim()) {
   
          alert("Please fill all the details.");
          return;
        } 
        else if (!filename) {
     
          alert("Please upload a valid CSV file.");
          return;
        } 
        else {
          
          console.log("class name",className);
          console.log("email name",studentemail);
          console.log("names", studentname);
          const classname = JSON.stringify(className);
            localStorage.setItem("classname", classname, () => {
                JSON.parse(localStorage.getItem("classname"));
            });
            const classnumber = JSON.stringify(classNumber);
            localStorage.setItem("classnumber", classnumber, () => {
                JSON.parse(localStorage.getItem("classnumber"));
            });
            const studentemails = JSON.stringify(studentemail);
            const se=studentemail.join(",");
            localStorage.setItem("studentemails", se, () => {
                JSON.parse(localStorage.getItem("studentemails"));
            });
            const studentnames = JSON.stringify(studentname);
            localStorage.setItem("studentnames", studentnames, () => {
                JSON.parse(localStorage.getItem("studentnames"));
            });
            console.log("hereee")
            console.log("email id is ",emailid)
            const urls = ["https://img.freepik.com/free-vector/hand-drawn-flat-design-book-spine_23-2149320036.jpg?t=st=1709261183~exp=1709264783~hmac=2efd3dbc235fce0fad44b2c4bf801a70430e37fe8ee6c4232cc8cba03faa1e1f&w=740","https://img.freepik.com/free-photo/international-day-education-cartoon-style_23-2151007489.jpg?t=st=1709261711~exp=1709265311~hmac=37ea9db374f17989af9bdd3f2aacfbb7ac89de75b4b3e351a1439d3402b65054&w=740","https://img.freepik.com/free-photo/front-view-educational-objects-arrangement_23-2148721256.jpg?t=st=1709261774~exp=1709265374~hmac=d9af9b550d3101e5227371de558a93ca21dc0b4ec7ec4a3512f9842c668ea717&w=740"];
            const randomUrl = urls[Math.floor(Math.random() * urls.length)];
            console.log("rurl", randomUrl);
            if (selectedSemester.length != 0){
            addClass(classNumber,className,emailid,randomUrl,studentemails,selectedYear + " " +selectedSemester)
            }
            else{
              addClass(classNumber,className,emailid,randomUrl,studentemails,selectedYear )
            }
            router.push('/teacher/classroom')
        //   csvParser(files)
        }
    }
    const getEmails = () => {
        if (parsedData) {
          return parsedData.map(row => {
            if (row['Email Address']) {
              return row['Email Address'];
            }
            return null;
          }).filter(entry => entry !== null);
        }
        return [];
      };
      const getNames = () => {
        if (parsedData) {
          return parsedData.map(row => {
            if (row['Email Address']) {
              return row['First Name'] + ' ' + row['Last Name'];
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
        
        <div class="mt-12">
                    <p class="text-3xl"> Class Details</p>
                    <div class="relative h-11 w-full min-w-[200px] mt-7">
                        <input placeholder="Grade Level"
                        onChange={(e) => setClassNumber(e.target.value)}
                        class="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                        class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-lg font-normal leading-tight  transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Grade Level
                        </label>
                    </div>
                    <div class="relative h-11 w-full min-w-[200px] mt-7">
                        <input placeholder="Subject Areas"
                        onChange={(e) => setClassName(e.target.value)}
                        class="peer h-full w-full border-b border-black bg-transparent pt-4 pb-1.5 text-lg font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                        <label
                        class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-lg font-normal leading-tight  transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Class Name
                        </label>
                    </div>
                    <div class="relative h-11 w-full min-w-[200px] mt-7">
                     <FormControl variant="standard" sx={{ minWidth:'45%',marginRight:'10%', color:'inherit'}}>
                      <InputLabel id="demo-simple-select-standard-label" sx={{color:'inherit'}}>Academic Year</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={selectedYear}
                        onChange={handleYear}
                        label="Year"
                      > 
                        <MenuItem value={"2023"}>2023</MenuItem>                       
                        <MenuItem value={"2024"}>2024</MenuItem>
                        <MenuItem value={"2025"}>2025</MenuItem>
                        <MenuItem value={"2026"}>2026</MenuItem>
                       </Select>
                    </FormControl>
                    <FormControl variant="standard" sx={{ minWidth:'45%', color:'inherit'}}>
                      <InputLabel id="demo-simple-select-standard-label" sx={{color:'inherit'}}>Academic Semester (If Applicable)</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={selectedSemester}
                        onChange={handleSemester}
                        label="Semester"
                      > 
                        <MenuItem value=""><em>None</em></MenuItem>
                        <hr></hr>
                        <MenuItem value={"Spring"}>Spring</MenuItem>
                        <MenuItem value={"Summer"}>Summer</MenuItem>
                        <MenuItem value={"Fall"}>Fall</MenuItem>
                        <MenuItem value={"Winter"}>Winter</MenuItem>

                       </Select>
                    </FormControl>
                    </div>
                    <div class="flex items-center justify-center w-full mt-8">
                    <Button
                        component="label"
                        role={undefined}
                        tabIndex={-1}
                        sx={{justifyContent:'justify', alignItems:'center', backgroundColor:'transparent', boxShadow:'none', color: 'black'}}
                        >
                        <div class="flex flex-col items-center justify-center w-full h-auto border-2 border-black px-4 border-dashed rounded-lg cursor-pointer bg-gray-50">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                </svg>
                                <p class="mb-2 text-sm "><span class="font-semibold">Click to upload</span> or drag and drop</p>
                                <p class="text-sm">
                                
                                  Upload your exported Grades CSV File here to add Students</p>
                            </div>
                        </div>
                        <VisuallyHiddenInput type="file" onChange={handleFileName} required />
                        
                        </Button>
                        </div>
                    </div>
                    
                 <div class=" mt-20 ">
                  <a href="/teacher/dashboard">
                    <button class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center bg-white text-black border-2 border-black rounded-lg hover:bg-slate-300 focus:ring-4 focus:ring-blue-100" >    
                         <span> Cancel</span>
                     </button>
                     </a>
                     <button 
                        class="inline-flex float-right items-center justify-center  px-5 py-3 text-base font-medium text-center text-black bg-discordpurple-0 border-4 border-discordpurple-0 rounded-lg hover:bg-white hover:border-4 hover:border-discordpurple-0 focus:ring-4 focus:ring-blue-100" 
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