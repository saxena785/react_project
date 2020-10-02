import React from 'react';
import web from '../src/images/2.png';

const Contact = () => {

 return (
   <>
  <div class="container">
  <div class="row">
    <div class="col-sm-8">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <form>
 <div class="mb-3">
    <label for="exampleInputEmail1">Full Name</label>
    <input type="text" class="form-control" name="name"  aria-describedby="emailHelp" placeholder="Enter Full NAme" />
    
  </div>
 
  <div className="mb-3">
    <label for="exampleInputPassword1">Email Address</label>
    <input type="text" name="email" class="form-control"  placeholder="Enter Your Email" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1">Message</label>
    <textarea className="form-control" name="message" rows="4" cols="50" placeholder="Enter Your Message" />
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>  
 </form>

    </div>
    
    
    
    <div class="col-sm-4">
        <div className= "mb-4">
       
        <img src={web} className="img-fluid animated" alt="homeimage"/>
        </div>
       
     </div>
     </div>
     </div>

   </>
  
);
};

 export default Contact;