import React from 'react';
import "./EventsCart.css"
import  event1 from '../../images/event1.jpg'
import  event2 from '../../images/event2.jpg'
import  event3 from '../../images/event3.jpg'
const EventsCart = () => {
    return (
        <div >
       <div className="event">
        <h1 className="fs-1">LETEST EVENT</h1>
        <h6> <i class="fas fa-home"></i> HOME . PAGES . <span className="text-warning"> EVENT</span></h6>

       </div>

        <div className='container mt-5'>
           <div className="d-flex box ">
           <div >
           <img className='w-100' src={event1 }alt="" />
           </div>
            <div className="mt-5">
            <h1 className="date ms-3 me-2">16</h1>
            <p className="text-secondary fw-bolder">Nov,2021</p>
            </div>
            <div className="event-description">
                <h5 className='text-danger'>Social Science & Humanities</h5>
                <span className="text-secondary fw-bolder me-5"><i class="text-warning far fa-clock"></i> 8:00-12:00  </span> 
                <span className="text-secondary fw-bolder"><i class=" text-warning  fas fa-map-marked-alt"></i> Nazrul Auditorium</span>
                <p>Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth.</p>
                <button className="btn mt-5 "> <i class="far fa-calendar-plus"></i> Book Now</button>

            </div>
           </div>
           <div className="d-flex box mt-5">
           <div >
           <img className='w-100' src={event2 }alt="" />
           </div>
            <div >
            <h1 className="date ms-3 me-2 mt-5">26</h1>
            <p className="text-secondary fw-bolder">Nov,2021</p>
            </div>
            <div className="event-description">
                <h5 className='text-danger' >Secondary Schools United Nationsa</h5>
                <span className="text-secondary fw-bolder me-5"><i class="text-warning far fa-clock"></i> 8:00-12:00  </span> 
                <span className="text-secondary fw-bolder"><i class=" text-warning  fas fa-map-marked-alt"></i> Robindro Auditorium</span>
                <p>Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth.</p>
                <button className="btn mt-5"> <i class="far fa-calendar-plus"></i> Book Now</button>

            </div>
           </div>
           <div className="d-flex mt-5 box">
           <div >
           <img className='w-100' src={event3 }alt="" />
           </div>
            <div >
            <h1 className="date ms-3 me-2 mt-5">19</h1>
            <p className="text-secondary fw-bolder">Dec,2021</p>
            </div>
            <div className="event-description">
                <h5 className='text-danger'>Social Science & Humanities</h5>
                <span className="text-secondary fw-bolder me-5"><i class="text-warning far fa-clock"></i> 8:00-12:00  </span> 
                <span className="text-secondary fw-bolder"><i class=" text-warning  fas fa-map-marked-alt"></i> Nazrul Auditorium</span>
                <p>Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth.</p>
                <button className="btn mt-5"> <i class="far fa-calendar-plus"></i> Book Now</button>
                
            </div>
           </div>
           
        </div>
        <button className='btn  mt-5 text-primary'>View all events</button>
        </div>
    );
};

export default EventsCart;

// import React, { useState } from 'react';
// import { useEffect } from 'react/cjs/react.development';
// import Show from '../show/Show';

// const Courses = () => {
//     const [courses,setCourses]=useState([])
//     useEffect(()=>{
//         fetch('./apiData.JSON')
//         .then(res=>res.json())
//         .then(data =>setCourses(data))
//     },[])

//     return (<div>
//          {
//             courses.slice(0,4).map((course) => <Show
//                 course ={course}>
//             </Show>
                   
//             )
//          } 
        
   
//         </div>
//     );
// };

// export default Courses;