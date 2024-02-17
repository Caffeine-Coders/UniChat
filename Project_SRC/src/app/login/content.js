"use client"
import "../components/land.css"
import {auth} from '../firebase'
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth"
import { Router } from "next/navigation";
import { useState } from "react";



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
        
        newhandler(email, password);
    }

    const newhandler = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          // ..
        });
      
    }
    const handler = (email,password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      
    }

    return (
    <div class="text-center flex justify-center align-middle mt-40">
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-2xl bg-clip-border rounded-xl w-1/4 h-60  backdrop-filter backdrop-blur-sm bg-opacity-30">
        <div class="p-6">
            <div class="block mb-2 text-6xl font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 font-headx" >
                Sign In
            </div>
        </div>
        <form onSubmit={handleSubmit}>
        <div>
        <div>
                      <input type="email" value={email} onChange={handleEmailChange} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <input type="password" value={password} onChange={handlePasswordChange} name="password" id="password" placeholder="••••••••" class=" mt-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
        </div>
        <div class="p-6 pt-0 mt-5">
            <button type="submit" class="inline-flex align-middle items-center w-10/12 justify-center px-5 py-3 text-base text-xl text-center text-black bg-slate-200 rounded-lg hover:bg-discordpurple-300  focus:ring-4 focus:ring-blue-100" >    
                Sign in
                {/* <img class="w-6 h-6 ml-3" src="https://img.icons8.com/color/48/000000/google-logo.png"/> */}
               
            </button>
        </div>
        </form>
        <div class="text-sm -mt-5">
            Don't have an account? 
            <button class="ml-1 text-blue">Sign up</button>
        </div>
        </div>  
    </div>
    )
  }