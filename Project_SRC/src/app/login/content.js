"use client"
import "../components/land.css"
import { useState } from "react";
import { loginaccount } from "../essentials/conn";

export default function content() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        loginaccount(email, password);
    }

    return (
    <div class="text-center flex justify-center align-middle mt-40">
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-2xl bg-clip-border rounded-xl w-1/4 h-full">
            <div class="p-6">
                <div class="block mb-2 text-4xl font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 font-headx" >
                    Sign in to your account
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div class="justify-center items-center">
              
                    <div class="relative flex justify-center items-center">
                        <input type="email" value={email} onChange={handleEmailChange} name="email" id="email" class="peer py-3 px-4 ps-11 block w-2/3 bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter name"/>
                        <div class="absolute inset-y-0 start-0 flex items-center flex justify-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                        </div>
                    </div>
                
                    <div class="relative flex justify-center">
                        <input type="password" value={password} onChange={handlePasswordChange} name="password" id="password" class="peer py-3 px-4 ps-11 block w-2/3 mt-4 bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter password"/>
                        <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                            <svg class="flex-shrink-0 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/></svg>
                        </div>
                    </div>
                   
                </div>
                <div class="p-6 pt-0 mt-5">
                    <button type="submit" class="inline-flex align-middle items-center w-10/12 justify-center px-5 py-3 text-xl text-center text-black bg-slate-200 rounded-lg hover:bg-discordpurple-300  focus:ring-4 focus:ring-blue-100" >    
                        Sign in
                    </button>
                </div>
            </form>
            <div class="text-sm -mt-5">
                Don't have an account? 
                <a class="ml-1 text-blue" href="/signup">Sign up</a>
            </div>
        </div>  
    </div>
    )
  }