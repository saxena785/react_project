import React from 'react';
import { NavLink } from 'react-router-dom';
import web from '../src/images/ban.png';

const About = () => {

 return (
     <>
  <section id ="header" className="d-flex justify-content-center">
   <div className="container-fluid nav_bg">
        <div className ="row">
        <div className= "col-10 mx-auto">
        <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
           <h1>Welcome TO About Us
           <strong className="Brand-Name"> SaurabhTechnical</strong>
           </h1>
           <p className="my-3 d-flex justify-content-center">
           Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
           
           <div className="mt-3">
        <NavLink to ="/Service" className= "btn-get-started">Contact Now</NavLink>
           </div>
        </div>
        
        
        <div className="col-lg-6 order-1 order-lg-2 header-img">
        <img src={web} className="img-fluid animated" alt="homeimage"/>
     </div>
     </div>
     </div>
     </div>
     </div>
   </section>
   </>
);
};

 export default About;