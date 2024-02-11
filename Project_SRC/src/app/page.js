import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Layout from './components/layout';

export default function Home() {
  return (
    <Layout>
      {/* <h1>Welcome to UniChat</h1>
      <h2><Link href="/login">Login</Link></h2> */}
      <div class="text-center mt-40">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">UniChat</h1>
        <p class="mb-6 mt-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 "> Where students connect, learn, and explore. Empowered by the subtle brilliance of artificial intelligence.
        Your AI-empowered companion for creative research. Seamlessly connect, collaborate on projects, and let teachers monitor your progress effortlessly.

         </p>
        <a class="inline-flex mt-10 items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-100" href="/login">  Get Started 
          <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </Layout>
  );
}
