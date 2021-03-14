import { React, useState ,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap"
import axios from "axios"
import Navbar from "./AppBar";
import Footer from "./Footer";


function Table() {

    let user = JSON.parse(sessionStorage.getItem("user"));

  const [wishList, setWishList] = useState([{"_id" : ""  , "propType": "" , "transType":"" ,  "city" : "" , "address": ""}]);
  const[count,setCount] = useState(0)
    function deleteItem(wishListId) {
      const id =  wishListId ; 

      axios.delete("http://localhost:5000/properity/deleteWishItem/" +id )
      .then((res) => {
        res.status(200);
      })
      .catch((err) => console.error("Error logging in!", err));
      window.location = "http://localhost:3000/table";

    }
    function goListedWishesPage (e)  {
        e.preventDefault();
        window.location = "http://localhost:3000/uploadNewRralEstateRequest";
      };  

    

const renderWishlist = (wishList , index )=>{
return (
<tr key= {index}>

<td>{wishList.propType}</td>
<td>{wishList.transType}</td>
<td>{wishList.address}</td>
<td>{wishList.city}</td>
<td className='opration'>
<button onClick={() => deleteItem(wishList._id)} type="button" class="btn btn-outline-danger"> Delete</button></td>
</tr>


)
}
useEffect(() => {
    axios
      .get("http://localhost:5000/properity/getWishItem/" + user._id, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setWishList(res.data);
      console.log(res.data) ;
      

      })
      .catch((err) => console.log(err));
  } , []);

  


  return(

<div>
<Navbar></Navbar>
<div style ={{padding:20}}>
<div className="form-row">
    <div className="form-group col-md-4">
    <button  onClick={goListedWishesPage} type="button" class="btn btn-secondary  btn-lg">Add a new request</button>

    </div>
    <div className="form-group col-md-4">
    <h3 style={{textAlign:"center"}}> requsted list (you have {wishList.length} request)</h3>
    </div>
    <div className="form-group col-md-4">
    <h1 style={{textAlign:"center"}}></h1>
    </div>
    </div>
  
    
<ReactBootStrap.Table striped bordered hover>

<thead>
    <tr>
        <th>proprty Type</th>
        <th>transaction Type</th>
        <th>Location address</th>
        <th>city</th>
        <th>delete request</th>


    </tr>
</thead>
<tbody>
    {wishList.map(renderWishlist)}
    </tbody>

</ReactBootStrap.Table>


<Footer />

</div>
</div>
  )
}
 
export default Table;
