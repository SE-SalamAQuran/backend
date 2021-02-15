import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pic from "../images/profile.png";



export default function ProfileBody() {
    let user = JSON.parse(sessionStorage.getItem("user"));

  
    return( 
        
    <div class="container-fluid bg-3 text-center" style= {{padding:70 , paddingBottom:70 , background:"AliceBlue"}}>
       <div class="row">
       <div class="col-sm-4">
      <h1>{user.fname + " " + user.lname}</h1>
    </div>
    <div class="col-sm-4">
    <img src={pic} class="img-circle"   style={{ width: 250, height: 250 }}alt="Bird"></img>
    <button type="button" class="btn btn-dark">update profile picture</button>

    </div>
    <div class="col-sm-4">
    <div><button type="button" class="btn btn-secondary  btn-lg">My Appointment</button></div>
    <br></br> <br></br> <br></br>
    <div><button type="button" class="btn btn-secondary  btn-lg">My Realestate</button></div>
    </div>
     </div>

    </div>
  );
  }

 