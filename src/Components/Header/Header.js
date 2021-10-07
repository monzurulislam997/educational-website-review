import React from 'react';
import './Header.css'
import logo  from '../../images/logo.png'

const Header = () => {
    return (
        <div>
           <header>
       <div className ="log-in ms-auto p-2">
        <div className="d-flex ms-5">
        <h6 className="ms-5"> <i class="fas fa-user-graduate text-warning me-1 "></i> Total Student: 3250</h6>
         <h6 className="ms-5"> <i class="fas fa-school text-warning me-1 "></i> Campus: 4</h6>
           <h6 className="ms-5">  <i class="fas text-warning fa-phone-square-alt me-1"></i>  Helpline:+880123456789</h6>
        </div>
       </div>

       <nav className="navbar navbar-expand-lg ">
           <div className="container-fluid">
     <a className="navbar-brand" href="#r">
   
     </a> 
      <img className='ms-5' src={logo} alt="" />  
       <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
         <li className="nav-item ">
           <a className="nav-link text-dark fw-bold me-3 fs-5" aria-current="page" href="/home">Home</a>
        </li>
         <li className="nav-item">
           <a className="nav-link text-dark me-3 fs-5 fw-bold " aria-current="page" href="/courses">Courses</a>
         </li>
         <li className="nav-item">
           <a className="nav-link text-dark me-3 fs-5 fw-bold" aria-current="page" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark fs-5 fw-bold" aria-current="page" href="/events">Events</a>
        </li>
          <li>
            <button className='bg-warning my-2 border-0 px-3 py-1 ms-5'> sign in</button>
            </li>  
          <li>
            <button className='bg-warning my-2 ms-3 px-3 py-1 border-0'>Sign Up</button>
            </li>  
      </ul>
        </div>
      </nav>
     
     {/* carousel part */}
      
     
      </header>
     
    </div>
       
    );
};

 export default Header;
