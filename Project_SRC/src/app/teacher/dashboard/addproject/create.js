'use client'
import React, { useState, useEffect } from "react";

export default function Create({fornext, loader}){
    const [projectname, setProjectname] = useState('');
    useEffect(() => {
        if (typeof window !== 'undefined'){
        const storedProjectName = JSON.parse(localStorage.getItem("projectname"));
        console.log("storedProjectName", storedProjectName);
        if (storedProjectName) {
            setProjectname(storedProjectName);
        }
    }
    }, []);
    const handleContinue = () => {
        if(projectname !== ''){
            loader(projectname);
            const pname = JSON.stringify(projectname);
            localStorage.setItem("projectname", pname, () => {
                JSON.parse(localStorage.getItem("projectname"));
            });
            fornext();
        }
    }
    const resetLocalIndex = () => {
        if (typeof window!== 'undefined'){
           
            window.location.reload()
          } 
    }
    return (
            <>
            <div class="mt-24">
                <p class="text-4xl"> Enter the Project Name</p>
                    <div class="relative h-11 w-full min-w-[200px] mt-10">
                    <input 
                        placeholder="Project Name"
                        value={projectname}
                        class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                        onChange={(e) => setProjectname(e.target.value)}
                    />
                    <label
                        class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-xl font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Enter the Project Name
                    </label>
                    </div>
                </div>
                <div class=" mt-20 ">
                        <button onClick={resetLocalIndex} class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-red-700 border-2 border-black rounded-lg bg-white hover:bg-slate-300 focus:ring-4 focus:ring-blue-100">    
                        <p class="font-bold mr-3">X </p> <span> Cancel</span>
                    </button>
                    <button class="inline-flex float-right items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-discordpurple-0 border border-2 border-discordpurple-0 rounded-lg hover:bg-white hover:border-2 hover:border-discordpurple-0 hover:text-discordpurple-0 focus:ring-4 focus:ring-blue-100" onClick={handleContinue}>    
                        Continue
                        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>
            </>
    );
}