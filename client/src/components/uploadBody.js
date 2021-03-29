import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



 function UploadBody() {

  const [nameOfProperty, setNameOfProperty] = useState("");
  const [type, setType] = useState("house");
  const [city, setCity] = useState("Ramallah");
  const [location, setLocation] = useState("");
  const [transactionType, setTransactionType] = useState("sale-cash");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [bedRoom, setBedRoom] = useState("1");
  const [bathRoom, setBathRoom] = useState("1");
  const [bulidingFloors, setBulidingFloors] = useState("1");
  const [appartmentFloor , setAppartmentFloor] = useState("1");
  const [classification , setClassification] = useState("A");
  const [useability , setUseability] = useState("Agricultural Land");


  
  function  selectType(e){
    setType(e.target.value)
  }

  const Describtion = (type) => {

  switch(type) {
  case "house" :  return (
    <div>
    <h3 style = {{justifyContent:"center"}}> more details and description </h3>

      <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputType Bedroom">number of Bedroom</label>
    <select  class="form-control" id="sel1">
    <option value = "1">1</option>
    <option value = "2">2</option>
    <option value = "3">3</option>
    <option value = "4">4</option>
    <option value = "5">5</option>
    <option value = "6">6</option>
    <option value = "7" >7</option>
    <option value = "8">8</option>
    <option value = "9">9</option>
    <option value = "10" >10</option>
    <option value = "more than 10" >more than 10</option>

  </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputType Bathroom">number of Bathroom</label>
      <select class="form-control" id="sel1" >
    <option value = "1">1</option>
    <option value = "2">2</option>
    <option value = "3">3</option>
    <option value = " more than 3 ">more than 3</option>
  </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputType floors">number of floors</label>
      <select class="form-control" id="sel1" >
    <option value = "1">1</option>
    <option value = "2">2</option>
    <option value = "3">3</option>
    <option value = " more than 3 ">more than 3</option>
  </select>
    </div>
  </div>
  
  
</form>
</div>
      
    );
  break ;
  case "villa" : {
    return(
      <div>
      <h3 style = {{justifyContent:"center"}}> more details and description </h3>
      <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputType Bedroom">number of Bedroom</label>
    <select  class="form-control" id="sel1">
    <option value = "1">1</option>
    <option value = "2">2</option>
    <option value = "3">3</option>
    <option value = "4">4</option>
    <option value = "5">5</option>
    <option value = "6">6</option>
    <option value = "7" >7</option>
    <option value = "8">8</option>
    <option value = "9">9</option>
    <option value = "10" >10</option>
    <option value = "more than 10" >more than 10</option>

  </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputType Bathroom">number of Bathroom</label>
      <select class="form-control" id="sel1" >
    <option value = "1">1</option>
    <option value = "2">2</option>
    <option value = "3">3</option>
    <option value = "4">4</option>
    <option value = "5">5</option>
    <option value = " more than 3 ">more than 3</option>
  </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputType floors">number of floors</label>
      <select class="form-control" id="sel1" >
    <option value = "1">1</option>
    <option value = "2">2</option>
    <option value = "3">3</option>
    <option value = " more than 3 ">more than 3</option>
  </select>
    </div>
  </div>
</form>
</div>

    );
  } 
  break ;
  case "land" : {
    return(
      <div>
      <h3 style = {{justifyContent:"center"}}> more details and description </h3>
<form>
    <div class="form-row">
    
    <div class="form-group col-md-6">
      <label for="input Classification"> Classification</label>
      < select class="form-control" id="sel1" >
    <option value= "A" >A</option>
    <option value = "B" >B</option>
    <option value = "C" >C</option>
   
  </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputAddress"> land is  </label>
      < select class="form-control" id="sel1" >
    <option value= "Agricultural Land" >Agricultural Land</option>
    <option value = "Land to build" >Land to build</option>
    <option value = "Agricultural land and suitable for construction" >Agricultural land and suitable for construction</option>
   
  </select>
      
    </div>
  </div>
  
</form>
</div>

    );
  }
  break ;
  case "appartment" : {
    return(
      <div>
      <h3 style = {{justifyContent:"center"}}> more details and description </h3>
      <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputType Bedroom">number of Bedroom</label>
    <select  class="form-control" id="sel1">
    <option value = "1">1</option>
    <option value = "2">2</option>
    <option value = "3">3</option>
    <option value = "4">4</option>
    <option value = "5">5</option>
    <option value = "6">6</option>
    <option value = "7" >7</option>
    <option value = "8">8</option>
    <option value = "9">9</option>
    <option value = "10" >10</option>
    <option value = "more than 10" >more than 10</option>
  </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputType Bathroom">number of Bathroom</label>
      <select class="form-control" id="sel1" >
    <option value = "1">1</option>
    <option value = "2">2</option>
    <option value = "3">3</option>
    <option value = "4">4</option>
    <option value = "5">5</option>
    <option value = " more than 3 ">more than 3</option>
  </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputType floors">buliding floors number </label>
      <select class="form-control" id="sel1" >
      <option value = "1">1</option>
    <option value = "2">2</option>
    <option value = "3">3</option>
    <option value = "4">4</option>
    <option value = "5">5</option>
    <option value = "6">6</option>
    <option value = "7" >7</option>
    <option value = "8">8</option>
    <option value = "9">9</option>
    <option value = "10" >10</option>
    <option value = "8">11</option>
    <option value = "9">12</option>
    <option value = "10" >13</option>
    <option value = "8">14</option>
    <option value = "9">15</option>
    <option value = "more than 15" >more than 15</option>
  </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputType floors">appartment floor number </label>
      <select class="form-control" id="sel1" >
      <option value = "1">1</option>
    <option value = "2">2</option>
    <option value = "3">3</option>
    <option value = "4">4</option>
    <option value = "5">5</option>
    <option value = "6">6</option>
    <option value = "7" >7</option>
    <option value = "8">8</option>
    <option value = "9">9</option>
    <option value = "10" >10</option>
    <option value = "8">11</option>
    <option value = "9">12</option>
    <option value = "10" >13</option>
    <option value = "8">14</option>
    <option value = "9">15</option>
    <option value = "more than 15" >more than 15</option>
  </select>
    </div>
  </div>
</form>
</div>

    );
  }
}
  
  };

  return(

<div className="container" style={{padding:20 , justifyContent:"center"}}>
<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputTitle">The name of the property</label>
      <input type="Text" class="form-control" id="inputText" placeholder="The name of the property"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputType">Type of property</label>
      <select class="form-control" id="sel1" onChange ={selectType}>
    <option value = "house">house</option>
    <option value = "villa">villa</option>
    <option value = "land">land</option>
    <option value = "appartment">appartment</option>
    <option value = "shop">shop</option>
    <option value = "office">office</option>
    <option value = "roof" >roof</option>
  </select>
    </div>
  </div>
  <div class="form-row">
    
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <select class="form-control" id="sel1" >
    <option>Ramallah</option>
    <option>AlBireh</option>
    <option>Nablus</option>
    <option>Hebron</option>
    <option>Bethlehem</option>
    <option>Tulkarm</option>
    <option>Qalqilia</option>
    <option>Salfit</option>
    <option>Tubas</option>
    <option>Jenin</option>
    <option>Jericho</option>
    <option>Jerusalem</option>
  </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputAddress">Location address</label>
      <input type="text" class="form-control" id="inputText" placeholder="Location address"/>
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
      <label for="inputTypeOfTransaction">transaction type</label>
      <select class="form-control" id="sel1" >
    <option>sale-cash</option>
    <option>sale-installment</option>
    <option>rent</option>
  </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputAreaInM">The total area</label>
      <input type="number" class="form-control" id="inputText" placeholder="The total area"/>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputPrice">Price</label>
      <input type="number" class="form-control" id="inputText" placeholder="price"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputcurrency">currency</label>
      <select class="form-control" id="sel1" >
    <option>USD</option>
    <option>JOD</option>
    <option>ILS</option>
  </select>
    </div>
  </div>
  
</form>

 <div>
   { Describtion (type)}
   </div> 
</div>
  )
}
 
export default UploadBody ; 