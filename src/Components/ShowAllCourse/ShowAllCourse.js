import React from 'react';
import './ShowAllCourse.css'
const ShowAllCourse = (props) => {
    
    const {img,name,type,seats,start}=props.course;
    return (
            
            <div className= 'cart d-flex mt-5'>
                 
                 <div className="course">
                 <img className='w-100' src={img} alt="" />
                 </div>
               <div >
               <h4 className="">{name}</h4> 
                <h6>{type}</h6>
                <h6>{start}</h6>
                 <span> Seats:{seats}</span>
                 <br />
                 <button className="bg-warning border-0 border-gray"> <i class="far fa-eye"></i>See Details</button>
               </div>
                
           </div>

    );
};

export default ShowAllCourse;