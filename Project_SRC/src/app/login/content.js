"use client"
import "../components/land.css"
import {auth} from '../firebase'
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth"
const provider = new GoogleAuthProvider();
import { Router } from "next/navigation";
const handler = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

export default function content() {
    return (
    <div class="text-center flex justify-center align-middle mt-40">
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-2xl bg-clip-border rounded-xl w-1/4 h-60  backdrop-filter backdrop-blur-sm bg-opacity-30">
        <div class="p-6">
            <div class="block mb-2 text-6xl font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 font-headx">
                Sign In
            </div>
        </div>
        <div>
        <div>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <input type="password" name="password" id="password" placeholder="••••••••" class=" mt-5 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
        </div>
        <div class="p-6 pt-0 mt-5">
            <button class="inline-flex align-middle items-center w-10/12 justify-center px-5 py-3 text-base text-xl text-center text-black bg-slate-200 rounded-lg hover:bg-discordpurple-300  focus:ring-4 focus:ring-blue-100">    
                Sign in
                {/* <img class="w-6 h-6 ml-3" src="https://img.icons8.com/color/48/000000/google-logo.png"/> */}
               
            </button>
        </div>
        <div class="text-sm -mt-5">
            Don't have an account? 
            <button class="ml-1 text-blue" onClick={handler}>Sign up</button>
        </div>
        </div>  
    </div>
    )
  }