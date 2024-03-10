"use client"
import React from 'react';
// import Layout from './components/layout';
// import Landing from './components/landing';
// import bg from './components/land.css'
// import Nav from './login/navbar';
// import Content from './login/content';
import { useRouter } from 'next/navigation';
import Login from '../teacher/login/page';

// import "./components/dash.css"
export default function Teacher() {
  const router = useRouter()
  router.push("/teacher/login")
}

