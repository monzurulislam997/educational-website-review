import React from 'react';
import playpic from '../../images/play.png'
import "./Footer.css"
const Footer = () => {
    return (
        <div className=" background mt-5">
  <div className="row">
    <div className="col mt-5">
    <h3>GET IN TOUCH</h3>
    <h5>House No. N/E (N) 8, Road No. 90, Dhanmondi, 1212 Dhaka, Bangladesh</h5>
    <p>Phone: +101-1231-4321 </p>

      <p>  Email: info@educationmaster.com</p>
      <p> copy-right:monzurul islam</p>
    </div>
    <div className="col mt-5">
      <h5>DOWNLOAD OUR FREE MOBILE APPS</h5>
      <img src={playpic} alt="" />
    </div>
    <div className="col mt-5 ">
      <h5>SOCIAL MEDIA</h5>
      <h3><i className="fab fa-facebook"></i> <i className="fab fa-twitter-square"></i> <i className="fab fa-youtube"></i> <i className="fab fa-whatsapp-square"> </i></h3>
    </div>
  </div>
</div>
    );
};

export default Footer;