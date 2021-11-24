import React from 'react';
import './Home.css'
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import bg from '../../images/background.jpg'
import bg1 from '../../images/background1.jpg';
import bg2 from '../../images/background2.jpg';
import vaccineReg from '../../images/vaccine.png'


const Home = () => {
  return (
        <div>
          <Header></Header>
     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
          <img class="d-block w-100" src={bg} alt="First slide"/>
          <div class="carousel-caption ">
                                <h3 className="fs-1 heading ">ADDMISION  <span className="text-warning"> IS GOING ON 2021</span> </h3>
                                <p>Addimison will be ended very soon.If you are a canidate you can apply here to be prepared your bright future.</p>
                            </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={bg1} alt="Second slide"/>
      <div class="carousel-caption ">
                                <h3 className="fs-1 heading ">WELCOME  <span className="text-warning"> TO OUR SCHOOL</span> </h3>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                            </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={bg2} alt="Third slide"/>
      <div class="carousel-caption ">
                                <h3 className="fs-1 heading "> <span className="text-warning"> GROWTH YOUR </span>CAREAR WITH US </h3>
                             
          <div class="container-fluid">
          <form class="d-flex">
      <div className="search-box w-50 mx-auto d-flex">
      <input class="form-control   mx-auto" type="search" placeholder="Search your courses you want to admit" aria-label="Search"/>
      <button className=" btn btn-outline-success  bg-warning px-5 py-2 fs-5" type="submit">Search</button>
      </div>
    </form>
  </div>
       </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
     
      {/* ____vaccine registration_____ */}
    <div className='d-flex my-5 vaccine'>
      <a href="/home"><img src={vaccineReg} alt="" /></a>
      
    </div>
    
    
     <h1 >Popular <span className="text-danger">Courses</span></h1>
      <Courses></Courses>
      <Footer></Footer>
    </div>
  );
};

export default Home;