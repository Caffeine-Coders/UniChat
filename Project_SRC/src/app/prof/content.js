'use client'
import Dash from './dashboard'
import Teachers from './teachers'
import Students from './students'
import { useState } from 'react';
export default function Content() {
    
    const [dashVisible, setDashVisible] = useState(true);
    const [studentsVisible, setstudentsVisible] = useState(false);
    const [teachersVisible, setteachersVisible] = useState(false);
    const handleFirstLinkClick = () => {
        // Toggle visibility of Dash component
        setDashVisible(true);
        setstudentsVisible(false)
        setteachersVisible(false)
    };

    const showStudents = () =>{
        setDashVisible(false);
        setstudentsVisible(true);
        setteachersVisible(false)
    }

    const showTeachers = () =>{
        setDashVisible(false)
        setstudentsVisible(false)
        setteachersVisible(true)
    }
    return(
        <>
        <ul class="flex border-b">
  <li class="-mb-px mr-1">
    <a class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" onClick={handleFirstLinkClick}>Projects</a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#" onClick={showStudents}>Students</a>
  </li>
  <li class="mr-1">
    <a class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#" onClick={showTeachers}>Teachers</a>
  </li>

</ul>
{dashVisible && <Dash/>}
{studentsVisible && <Students/>}
{teachersVisible && <Teachers/>}
</>
    )
}