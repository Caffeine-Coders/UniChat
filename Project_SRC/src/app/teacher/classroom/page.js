"use client"
// import dynamic from "next/dynamic"
// const Content = dynamic(()=>import('./content.js'),{ssr: false})
import Content from './content.js';
import "../components/dash.css"
export default function Classroom() {
  return (
    <div className="dashboard-container" style={{backgroundColor:"#F4F4F4", minHeight:'100vh'}} > 
    <Content/>
    </div>
  );
}

