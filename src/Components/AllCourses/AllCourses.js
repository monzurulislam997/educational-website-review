import React from 'react';
import { useEffect, useState } from "react";
import ShowAllCourse from '../ShowAllCourse/ShowAllCourse';
import './AllCourses.css'
import react from 'react';
const AllCourses = () => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        fetch('./apiData.JSON')
        .then(res=>res.json())
       .then(data =>setCourses(data))
    },[])

    return (
        <div className="mt-5">
            <h1  >ALL <span className="text-danger  mt-5">COURSES</span></h1>
        
    <div className= "fourCart">
            
         {
            courses.map((course) => <ShowAllCourse
                course ={course}>
            </ShowAllCourse>
                   
            )
         } 
        
        </div>
        </div>
    );
};

export default AllCourses;