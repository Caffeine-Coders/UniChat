'use client'
import React, { useState, useEffect } from "react";
import { Box, Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Confirm({forback, projectData}){
    const router = useRouter()
    const handleContinue = () => {
        router.push('/teacher/dashboard/projectdetails');
    }
    let projectname="";
    let gradelevel="";
    let subjectareas="";
    let projectgoal="";
    if (typeof window !== 'undefined') {
        projectname = localStorage.getItem("projectname") ? JSON.parse(localStorage.getItem("projectname")) : "";
        gradelevel = localStorage.getItem("gradelevel") ? JSON.parse(localStorage.getItem("gradelevel")) : "";
        subjectareas = localStorage.getItem("subjectareas") ? JSON.parse(localStorage.getItem("subjectareas")) : "";
        projectgoal = localStorage.getItem("projectgoal") ? JSON.parse(localStorage.getItem("projectgoal")) : "";
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
                    <div class="flex mt-4">
                        <button class="flex-shrink-0 z-10 w-40 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 " disabled>
                            Google Drive
                        </button>
                        <div class="relative w-full">
                        <input class="block p-2.5 w-full z-20 text-md text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed" disabled value="drive.google.com/drive/0/12345"/> 
                        </div>
                    </div>
                    <div class="flex mt-4">
                        <button class="flex-shrink-0 z-10 w-40 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 " disabled>
                            Co-Instructor
                        </button>
                        <div class="relative w-full">
                        <input class="block p-2.5 w-full z-20 text-md text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed" disabled value="xyz@gmail.com"/> 
                        </div>
                    </div>
                    <div class="flex mt-4">
                        <button class="flex-shrink-0 z-10 w-40 inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 " disabled>
                            Students
                        </button>
                        <div class="relative w-full">
                        <input class="block p-2.5 w-full z-20 text-md text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed" disabled value="student1@gmail.com, student2@gmail.com, student3@gmail.com"/> 
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