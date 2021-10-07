import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Show from '../show/Show';
import "./Courses.css"

const Courses = () => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('./apiData.JSON')
        .then(res=>res.json())
        .then(data =>setCourses(data))
    },[])

    return (<div className= "fourCart  ">
        
         {
            courses.slice(0,4).map((course) => <Show
                course ={course}>
            </Show>
                   
            )
         } 
        
   
        </div>
    );
};

export default Courses;