import React from 'react';
import Content from './content.js';
import "../../components/dash.css"
export default function Classroom() {
  return (
    <div className="dashboard-container" style={{backgroundColor:"#e3d0f5", height:'100vh'}} > 
    <Content/>
    </div>
  );
}

