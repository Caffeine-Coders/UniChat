'use client'
import React, { useState, useEffect } from "react";
// import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import Link from "next/link";
import { useRouter } from 'next/navigation';
import {addNewProject} from '../../dbconnections/addProject'
import { getMembers } from "../../dbconnections/getNames";
import {getProject} from '../../dbconnections/getProjectDetails'
export default function Confirm({forback, projectData}){
    const router = useRouter()
    const projectadder = async() =>{
        const projectname = localStorage.getItem("projectname")
        const projectgoal = localStorage.getItem("projectgoal")
        const invitedteacher = localStorage.getItem("invitedTeacherEmail")
        const invitedstudent  = localStorage.getItem("invitedStudentEmail")
        const nativechat = localStorage.getItem("nativeChat")
        const cname = localStorage.getItem("classname")
        const cnum = localStorage.getItem("classnumber")
        const cyear = localStorage.getItem("classyear")
        const imgurl = localStorage.getItem("projectimage")
        console.log("sending request", nativechat)

        await addNewProject(projectname,projectgoal,invitedteacher,invitedstudent,nativechat,cname,cnum,cyear,imgurl)
        const details = await getProject(projectname)
    console.log("details",details)
    localStorage.setItem("projectname",details.projectName)
    localStorage.setItem("projectgoal",details.projectDescription)
    localStorage.setItem("nativeChat",details.nativeChat)
    console.log("details here",details.teacherIds,details.studentIds)
    localStorage.setItem("projectTemails",details.teacherIds)
    localStorage.setItem("projectSemails",details.studentIds)
    const semail = localStorage.getItem("projectSemails")
    const temail = localStorage.getItem("projectTemails")
    const names = await getMembers(semail,temail)
    // const names = await getMembers(details.studentIds,details.teacherIds)
    console.log("names",names)
    const {snames,tnames } = names
    localStorage.setItem("projectTnames",tnames)
    localStorage.setItem("projectSnames",snames)
    console.log("split working",snames,tnames)
    }
    const handleContinue = async() => {
        await projectadder()
        router.push('/teacher/classroom/projectdetails');
    }
    let projectname="";
    let gradelevel="";
    let subjectareas="";
    let projectgoal="";
    let students="";
    let teachers="";
    if (typeof window !== 'undefined') {
        projectname = localStorage.getItem("projectname") ? JSON.parse(localStorage.getItem("projectname")) : "";
        gradelevel = localStorage.getItem("classnumber") ? localStorage.getItem("classnumber") : "";
        subjectareas = localStorage.getItem("classname") ? localStorage.getItem("classname") : "";
        projectgoal = localStorage.getItem("projectgoal") ? JSON.parse(localStorage.getItem("projectgoal")) : "";
        students = localStorage.getItem("invitedStudent") ? localStorage.getItem("invitedStudent") : "";
        teachers = localStorage.getItem("invitedTeacher") ? localStorage.getItem("invitedTeacher") : "";
    }
    console.log("projectData from confirm", projectname, gradelevel, subjectareas, projectgoal);
    return (
            <>
            <div class="mt-16">
                <p class="text-3xl">Verify the Information</p>

                    <div class="flex mt-4">
                        <button class="flex-shrink-0 z-10 w-40 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 " disabled>
                            Project Name
                        </button>
                        <div class="relative w-full">
                        <input class="block p-2.5 w-full z-20 text-md text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed" disabled value={projectname}/> 
                        </div>
                    </div>
                    <div class="flex mt-4">
                        <button class="flex-shrink-0 z-10 w-40 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 " disabled>
                            Grade Level
                        </button>
                        <div class="relative w-full">
                        <input class="block p-2.5 w-full z-20 text-md text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed" disabled value={gradelevel}/> 
                        </div>
                    </div>
                    <div class="flex mt-4">
                        <button class="flex-shrink-0 z-10 w-40 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 " disabled>
                            Subject Areas
                        </button>
                        <div class="relative w-full">
                        <input class="block p-2.5 w-full z-20 text-md text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed" disabled value={subjectareas}/> 
                        </div>
                    </div>
                    <div class="flex mt-4">
                        <button class="flex-shrink-0 z-10 w-40 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 " disabled>
                            Project Goal
                        </button>
                        <div class="relative w-full">
                        <input class="block p-2.5 w-full z-20 text-md text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed" disabled value={projectgoal}/> 
                        </div>
                    </div>
                    {/* <div class="flex mt-4">
                        <button class="flex-shrink-0 z-10 w-40 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 " disabled>
                            Google Drive
                        </button>
                        <div class="relative w-full">
                        <input class="block p-2.5 w-full z-20 text-md text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed" disabled value="drive.google.com/drive/0/12345"/> 
                        </div>
                    </div> */}
                    <div class="flex mt-4">
                        <button class="flex-shrink-0 z-10 w-40 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 " disabled>
                            Co-Instructor
                        </button>
                        <div class="relative w-full">
                        <input class="block p-2.5 w-full z-20 text-md text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed" disabled value={teachers}/> 
                        </div>
                    </div>
                    <div class="flex mt-4">
                        <button class="flex-shrink-0 z-10 w-40 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 " disabled>
                            Students
                        </button>
                        <div class="relative w-full">
                        <input class="block p-2.5 w-full z-20 text-md text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed" disabled value={students}/> 
                        </div>
                    </div>

                </div>
                <div class=" mt-20 ">
                    <button class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border border-2 border-black rounded-lg bg-white hover:bg-slate-300 focus:ring-4 focus:ring-blue-100" onClick={forback}>    
                        <span> Back</span>
                    </button>
                    <button class="inline-flex float-right items-center justify-center px-5 py-3 text-base font-medium text-center text-discordgreen-100 bg-white border-2 border-black rounded-lg hover:bg-slate-200 focus:ring-4 focus:ring-blue-100 group" onClick={handleContinue}>    
                        Create Project 
                        <svg class="w-5 h-5 ms-2 group:text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="check"><rect width="256" height="256" fill="none"></rect><polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" points="216 72.005 104 184 48 128.005" ></polyline></svg>
                    </button>
                </div>
            </>
    );
}