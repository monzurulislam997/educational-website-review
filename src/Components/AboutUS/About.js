import React from 'react';
import './About.css'
import teacher from '../../images/teacher.png'
const About = () => {
    return (
        <div>
            <div className="event">
        <h1 className="fs-1 fw-bolder">ABOUT</h1>
        <h6> <i class="fas fa-home"></i> HOME . PAGES . <span className="text-warning"> About</span></h6>

       </div>

       <div className="d-flex my-5 ">
           <div className=' ms-5  text-area '>
           <h3 className="text-primary mb-3">About our University</h3> 
               <h1 >We are innovative educational institution for students.</h1>
               <p className="text-secondary ms-5">Our university is an institution of higher education and research which awards academic degrees in several academic disciplines. Universities typically offer both undergraduate and postgraduate programs in different schools or faculties of learning.</p>
               
               <div className="box mt-5 d-flex">
               <div className="icon-design">
                   <i class="icon fas fa-crosshairs"></i>
                   </div>
                   <div>
                       <h3>Our Mission</h3>
                       <p>We help organizations across private, public,on the Change that Matters most to them.</p>
                   </div>
                   
               </div>
               <div className=" box mt-5 d-flex">
               <div className="icon-design" >
               <i class=" icon fas fa-universal-access"></i>
               </div>
                   <div>
                       <h3>Our Mission</h3>
                       <p>We help organizations across private, public,on the Change that Matters most to them.</p>
                   </div>
               </div>
           </div>
           <div className="image-area col-md-6">
                <img src={teacher} alt="" />
           </div>
       </div>
        <div>
            <h1>Our <span className="text-danger">Achievements</span></h1>
            <div className="achievement-box container ">
                <div className="achievement col-md-6">
                    <h4>Awards</h4>
                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi bibendum imperdiet bibendum.</p>
                    <button className="button">Read more</button>
                </div>
                <div className="achievement col-md-6">
                    <h4>Awards</h4>
                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi bibendum imperdiet bibendum.</p>
                    <button className="button">Read more</button>
                </div>
                <div className="achievement col-md-6">
                    <h4>Awards</h4>
                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi bibendum imperdiet bibendum.</p>
                    <button className="button">Read more</button>
                </div>
                <div className="achievement col-md-6">
                    <h4>Awards</h4>
                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi bibendum imperdiet bibendum.</p>
                    <button className="button">Read more</button>
                </div>
                <div className="achievement col-md-6">
                    <h4>Awards</h4>
                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi bibendum imperdiet bibendum.</p>
                    <button className="button">Read more</button>
                </div>
                <div className="achievement col-md-6">
                    <h4>Awards</h4>
                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi bibendum imperdiet bibendum.</p>
                    <button className="button">Read more</button>
                </div>

            </div>
        </div>

        </div>

    );
};

export default About;