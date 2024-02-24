'use client'
import React, { useState, useEffect } from "react";
import Trial2 from './loading'
// Define a custom Loading component
function CustomLoading() {
  return  <Trial2/>// Replace this with your loading spinner or indicator
}

// Define a custom DelayedContent component
function DelayedContent({ children, delay }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return loading ? <CustomLoading /> : children;
}

export default function Content(){
    return(
        
        <div class="p-4 sm:ml-64 -mt-8">
            <span><a class="flex hover:underline" href="/te@cher/prof"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
  </svg>Return to Dashboard</a></span>
            <div class="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-700">
            <div class="flex items-center justify-center h-48 mb-8 rounded-lg bg-discordpurple-300 shadow-lg shadow-discordpurple-100">
                <h1 class="text-8xl text-gray-900 font-headx">
                    Project Name 1
                </h1>
            </div>
            <DelayedContent delay={2000}>
            <div class="ml-28 mr-28  rounded-lg ">
                <h1 class="font-headx text-3xl">
                    Project Goal
                    <hr class="h-px  bg-gray-400 border-0"></hr>
                </h1>
            </div>
            <div class="ml-28 mr-28 mb-8 mt-4 rounded-lg flex justify-between space-between">
                <h5 class="flex ml-4 mr-4 text-justify">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </h5>
            </div>

            <div class="ml-28 mr-28  rounded-lg ">
                <h1 class="font-headx text-3xl">
                    Details
                    <hr class="h-px  bg-gray-400 border-0"></hr>
                </h1>
            </div>
            <div class="ml-28 mr-28  mt-4 rounded-lg flex justify-between space-between">
                <h4 class="flex ml-4 mr-4">
                Grade Level:
                </h4>
                <h4 class="mr-4">Grade Level Here</h4>
                
            </div>
            <hr class="ml-28 mr-28  mt-4 h-px  bg-gray-200 border-0"></hr>
            <div class="ml-28 mr-28 mb-4 mt-4 rounded-lg flex justify-between space-between">
                <h4 class="flex ml-4 mr-4">
                Subject Area(s):
                </h4>
                <h4 class="mr-4">Subject Areas Here</h4>
                
            </div>
            <hr class="ml-28 mr-28 h-px  bg-gray-200 border-0"></hr>
            <div class="ml-28 mr-28 mb-8 mt-4 rounded-lg flex justify-between space-between">
                <h4 class="flex ml-4 mr-4">
                Instructors Involved:
                </h4>
                <h4 class="mr-4">Instructor Name1, Instructor Name2</h4>
                
            </div>
            
            <div class="ml-28 mr-28  rounded-lg ">
                <h1 class="font-headx text-3xl">
                    Students
                    <hr class="h-px  bg-gray-400 border-0"></hr>
                </h1>
            </div>
            <div class="ml-28 mr-28  mt-4 rounded-lg flex justify-between space-between">
                <h4 class="flex ">
                <img class="ml-4 mr-4 w-6 h-6 rounded-full" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt=""/>
                Person 1
                </h4>
                <h4 class="mr-4">somemeial@gmail.com</h4>
                
            </div>
            <hr class="ml-28 mr-28  mt-4 h-px  bg-gray-200 border-0"></hr>
            <div class="ml-28 mr-28  mt-4 rounded-lg flex justify-between space-between">
                <h4 class="flex ">
                <img class="ml-4 mr-4 w-6 h-6 rounded-full" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt=""/>
                Person 1
                </h4>
                <h4 class="mr-4">somemeial@gmail.com</h4>
                
            </div>
            <hr class="ml-28 mr-28  mt-4 h-px  bg-gray-200 border-0"></hr>
            <div class="ml-28 mr-28  mt-4 rounded-lg flex justify-between space-between">
                <h4 class="flex ">
                <img class="ml-4 mr-4 w-6 h-6 rounded-full" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt=""/>
                Person 1
                </h4>
                <h4 class="mr-4">somemeial@gmail.com</h4>
                
            </div>
            <hr class="ml-28 mr-28  mt-4 h-px  bg-gray-200 border-0"></hr>
            <div class="ml-28 mr-28  mt-4 rounded-lg flex justify-between space-between">
                <h4 class="flex ">
                <img class="ml-4 mr-4 w-6 h-6 rounded-full" src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" alt=""/>
                Person 1
                </h4>
                <h4 class="mr-4">somemeial@gmail.com</h4>
                
            </div>
            <hr class="ml-28 mr-28  mt-4 h-px  bg-gray-200 border-0"></hr>
            </DelayedContent>
            </div>
        </div>

    )
}