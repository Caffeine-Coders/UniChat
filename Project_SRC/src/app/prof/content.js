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
      <div class="container w-3/4 mx-auto">
        <ul class=" my-8  -mb-12   w-full  grid grid-cols-3 divide-x-2 divide-gray-700 divide-opacity-50  rounded-xl bg-discordpurple-300 ">
  <li class={`text-center ${dashVisible?'bg-discordpurple-100':'bg-transparent'} ${dashVisible?'opacity-50':''} ${dashVisible?'text-white':''} rounded-l-xl hover:text-white hover:bg-discordpurple-100 hover:opacity-50 hover:cursor-pointer`}>
    <a class=" rounded-xl cursor-pointer bg-transparent border-none inline-block rounded-t-lg py-2 px-4  font-semibold  " onClick={handleFirstLinkClick}>Projects</a>
  </li>
  <li class={`text-center ${studentsVisible?'bg-discordpurple-100':'bg-transparent'} ${studentsVisible?'opacity-50':''} ${studentsVisible?'text-white':''}  hover:text-white hover:bg-discordpurple-100 hover:opacity-50 hover:cursor-pointer`}>
    <a class=" rounded-xl bg-transparent inline-block py-2 px-4 font-semibold" href="#" onClick={showStudents}>Students</a>
  </li>
  <li class={`text-center ${teachersVisible?'bg-discordpurple-100':'bg-transparent'} ${teachersVisible?'opacity-50':''} ${teachersVisible?'text-white':''} rounded-r-xl hover:text-white hover:bg-discordpurple-100 hover:opacity-50 hover:cursor-pointer`}>
    <a class="  bg-transparent  inline-block py-2 px-4   font-semibold" href="#" onClick={showTeachers}>Teachers</a>
  </li>

</ul>
<div class="  w-full my-28 ml-42 ">
{dashVisible && <Dash/>}
{studentsVisible && <Students/>}
{teachersVisible && <Teachers/>}
</div>
</div>
</>
    )
}