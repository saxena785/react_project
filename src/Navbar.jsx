import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = ()=> {

    return (
       <>
        <div className="container-fluid nav_bg">
        <div className ="row">
        <div className= "col-10 mx-auto">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
 <img src = "../log.png" alt="d" width="146px" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
  <li className="nav-item">
    
    <NavLink className="nav-link active" to="/">Home
        </NavLink>
      </li>
      <li className="nav-item">
      
        <NavLink className="nav-link" to="/Service">Services
        </NavLink>
      </li>
      <li className="nav-item">
      
        <NavLink className="nav-link" to="/About">About
        </NavLink>
      </li>
      <li className="nav-item">
      
        <NavLink className="nav-link" to="/Contact">Contact
        </NavLink>
      </li>
      </ul>
    
  </div>
</nav>
</div>
</div>
</div>
</>
   );
   };
   
    export default Navbar;