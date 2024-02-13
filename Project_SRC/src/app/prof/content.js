'use client'
import "../components/land1.css"
import React, { useState, useEffect } from "react";
import Trial from "./loading";
// Define a custom Loading component
function CustomLoading() {
  return  <Trial/>// Replace this with your loading spinner or indicator
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

export default function Content() {
    return (
<>
<DelayedContent delay={2000}>
        <div class="container my-28  mx-auto px-2 ">
    <div class="flex flex-wrap -mx-1 lg:-mx-4 lg:mx-20">
        <div class="my-1 w-full md:w-1/2 lg:my-4 pb-4 lg:px-6 lg:w-1/3 h-56" >
            <a class="no-underline  text-black h-full" href="/prof/newproject">
                <article class="overflow-hidden border bg-white rounded-lg shadow-lg h-full  hover:bg-gray-100 hover:shadow-xl hover:shadow-discordpurple-100">
                    <div class="px-6 py-12">
                        <div class="font-bold text-xl mb-2 mt-6 flex justify-center items-center">
                            <svg class="w-6 h-6 text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                            </svg>
                        </div>
                        <h1 class="text-xl text-center hover:underline">
                                Add Project
                        </h1>
                    </div>
                </article>
            </a>
        </div>
        <div class="my-1 w-full md:w-1/2 lg:my-4 pb-4 lg:px-6 lg:w-1/3 h-56">
            <a class="no-underline  text-black" href="/prof/projectdetails">
                <article class="overflow-hidden border bg-white rounded-lg shadow-lg h-full  hover:bg-gray-100 hover:shadow-xl hover:shadow-discordpurple-100">
                    <div class="px-6 py-12">
                        <div class="font-bold text-xl mb-0 mt-6 flex justify-center items-center">
                            <h1 class="mt-2 mb-0 text-xl text-center hover:underline">
                                Project Name 1
                            </h1>
                        </div>
                        <h6 class="text-xs text-center my-0">    
                                Grade Level
                        </h6>
                    </div>
                </article>
            </a>
        </div>
        <div class="my-1 w-full md:w-1/2 lg:my-4 pb-4 lg:px-6 lg:w-1/3 h-56">
        <a class="no-underline  text-black" href="/prof/projectdetails">
            <article class="overflow-hidden border bg-white rounded-lg shadow-lg h-full  hover:bg-gray-100 hover:shadow-xl hover:shadow-discordpurple-100">
                <div class="px-6 py-12">
                    <div class="font-bold text-xl mb-0 mt-6 flex justify-center items-center">
                        <h1 class="mt-2 mb-0 text-xl text-center hover:underline">
                            Project Name 1
                        </h1>
                    </div>
                    <h6 class="text-xs text-center my-0">    
                            Grade Level
                    </h6>
                </div>
            </article>
            </a>
        </div>
        <div class="my-1 w-full md:w-1/2 lg:my-4  pb-4 lg:px-6 lg:w-1/3 h-56">
        <a class="no-underline  text-black" href="/prof/projectdetails">
            <article class="overflow-hidden border bg-white rounded-lg shadow-lg h-full  hover:bg-gray-100 hover:shadow-xl hover:shadow-discordpurple-100">
                <div class="px-6 py-12">
                    <div class="font-bold text-xl mb-0 mt-6 flex justify-center items-center">
                        <h1 class="mt-2 mb-0 text-xl text-center hover:underline">
                            Project Name 1
                        </h1>
                    </div>
                    <h6 class="text-xs text-center my-0">    
                            Grade Level
                    </h6>
                </div>
            </article>
            </a>
        </div>
        <div class="my-1 w-full md:w-1/2 lg:my-4 pb-4 lg:px-6 lg:w-1/3 h-56">
        <a class="no-underline  text-black" href="/prof/projectdetails">
            <article class="overflow-hidden border bg-white rounded-lg shadow-lg h-full  hover:bg-gray-100 hover:shadow-xl hover:shadow-discordpurple-100">
                <div class="px-6 py-12">
                    <div class="font-bold text-xl mb-0 mt-6 flex justify-center items-center">
                        <h1 class="mt-2 mb-0 text-xl text-center hover:underline">
                            Project Name 1
                        </h1>
                    </div>
                    <h6 class="text-xs text-center my-0">    
                            Grade Level
                    </h6>
                </div>
            </article>
            </a>
        </div>
        <div class="my-1 w-full md:w-1/2 lg:my-4 pb-4 lg:px-6 lg:w-1/3 h-56">
        <a class="no-underline  text-black" href="/prof/projectdetails">
            <article class="overflow-hidden border bg-white rounded-lg shadow-lg h-full  hover:bg-gray-100 hover:shadow-xl hover:shadow-discordpurple-100">
                <div class="px-6 py-12">
                    <div class="font-bold text-xl mb-0 mt-6 flex justify-center items-center">
                        <h1 class="mt-2 mb-0 text-xl text-center hover:underline">
                            Project Name 1
                        </h1>
                    </div>
                    <h6 class="text-xs text-center my-0">    
                            Grade Level
                    </h6>
                </div>
            </article>
            </a>
        </div>
        <div class="my-1 w-full md:w-1/2 lg:my-4  pb-4 lg:px-6 lg:w-1/3 h-56">
        <a class="no-underline  text-black" href="/prof/projectdetails">
            <article class="overflow-hidden border bg-white rounded-lg shadow-lg h-full  hover:bg-gray-100 hover:shadow-xl hover:shadow-discordpurple-100">
                <div class="px-6 py-12">
                    <div class="font-bold text-xl mb-0 mt-6 flex justify-center items-center">
                        <h1 class="mt-2 mb-0 text-xl text-center hover:underline">
                            Project Name 1
                        </h1>
                    </div>
                    <h6 class="text-xs text-center my-0">    
                            Grade Level
                    </h6>
                </div>
            </article>
            </a>
        </div>
        <div class="my-1 w-full md:w-1/2 lg:my-4 pb-4 lg:px-6 lg:w-1/3 h-56">
        <a class="no-underline  text-black" href="/prof/projectdetails">
            <article class="overflow-hidden border bg-white rounded-lg shadow-lg h-full  hover:bg-gray-100 hover:shadow-xl hover:shadow-discordpurple-100">
                <div class="px-6 py-12">
                    <div class="font-bold text-xl mb-0 mt-6 flex justify-center items-center">
                        <h1 class="mt-2 mb-0 text-xl text-center hover:underline">
                            Project Name 1
                        </h1>
                    </div>
                    <h6 class="text-xs text-center my-0">    
                            Grade Level
                    </h6>
                </div>
            </article>
            </a>
        </div>
        <div class="my-1 w-full md:w-1/2 lg:my-4 pb-4 lg:px-6 lg:w-1/3 h-56">
        <a class="no-underline  text-black" href="/prof/projectdetails">
            <article class="overflow-hidden border bg-white rounded-lg shadow-lg h-full  hover:bg-gray-100 hover:shadow-xl hover:shadow-discordpurple-100">
                <div class="px-6 py-12">
                    <div class="font-bold text-xl mb-0 mt-6 flex justify-center items-center">
                        <h1 class="mt-2 mb-0 text-xl text-center hover:underline">
                            Project Name 1
                        </h1>
                    </div>
                    <h6 class="text-xs text-center my-0">    
                            Grade Level
                    </h6>
                </div>
            </article>
            </a>
        </div>
  </div>
        </div>
        </DelayedContent>
        </>
    )
  }