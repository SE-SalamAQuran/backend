import React, {PropTypes} from 'react';
import pic from '../images/ppic.jpg';
import pic1 from '../images/seaside.jpg';
import Button from '@material-ui/core/Button';
import GridList from '../GridList';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
const axios = require("axios");


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="http://localhost:3000/">
          Pal Estate
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

class ProfilePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id: "5fbd4a8096d6e639d044c02b" ,
      fname : "" ,
      lname: "" , 
      email:"",
      gender:"",
      PhoneNumber :"" , 
      address: "" ,
      Password : "" ,
      userName :" ",
      isActive: false ,
      isActiveEditProfileInformation: false ,
      profileImage: null ,
      profileImagem: " "
    };
        this.onSaveEditInformation=this.onSaveEditInformation.bind(this);
  }
 
  onChange = (e) => {
  
    this.setState({
      profileImage:e.target.files[0] 
    });
  console.log(this.state.profileImage);
  
  };
  
    UpdateProfileHandler=(e)=>{
      console.log("start uploading "); 
      e.preventDefault();
      
      //create object of form data
      const data = {
        profileImagem:this.state.profileImage,
        user_id:this.state.user_id}
      //update-profile
      axios.post("http://localhost:5000/users/updateProfileImage",data,{
          headers: {
              "content-type": "application/json"
            }
      }).then(res=>{
          console.log(res);
      })
      .catch(err=>console.log(err))
  }
    
     
  

  editProfilePic = () => {
    this.setState({
      isActive: true
    });
  };

  editUerInformation = () => {
    this.setState({
      isActiveEditProfileInformation: true
    });
  };
  cancelEditUerInformation = () => {
    this.setState({
      isActiveEditProfileInformation: false
    });
    window.location ='http://localhost:3000/profile';
  
  };

  disCardEditting = () => {
    this.setState({
      isActive: false 
    });
  
  };
  update_profile=()=>{

    console.log("updating start")
  }
  onSaveEditInformation(e){
    e.preventDefault();
    const data = {
      fname:this.state.fname,
      lname:this.state.lname,
      address:this.state.address,
      phoneNumber:this.state.PhoneNumber
      };
    console.log(data) ;
    axios.put('http://localhost:5000/users/update/'+this.state.user_id,data)
    .then(res => {
     
      res.status(200);
    })
    .catch(err => console.error("Error logging in!",err));
    window.location ='http://localhost:3000/profile';
}

logOut= (e)=>{
  e.preventDefault();
  axios.put('http://localhost:5000/users/logOut/'+this.state.user_id)
    .then(res => {
      res.status(200);
    })
    .catch(err => console.error("Error logging in!",err));
    window.location ='http://localhost:3000';
}


  changeFName = (e) => {
    this.setState({
      fname: e.target.value 
    });
  };
  changeLName = (e) => {
    
    this.setState({
      lname: e.target.value 
    });
  };
  changeAddress = (e) => {
    this.setState({
      address: e.target.value 
    });
  };
  changePhoneNumbe = (e) => {
    this.setState({
      PhoneNumber: e.target.value 
    });
  };
  

  fetchUserDetails=()=>{
    
    axios.get("http://localhost:5000/users/user/"+this.state.user_id,{
        headers: {
            "content-type": "application/json"
          }
    }).then(res=>{
      console.log(this.state.profileImage) ;
        console.log(res);

        this.setState({fname:res.data.fname});
        this.setState({lname:res.data.lname});
        this.setState({address:res.data.address});
        this.setState({email:res.data.email});
        this.setState({PhoneNumber:res.data.phoneNo});
        this.setState({userName:res.data.fname + " " + res.data.lname});
        this.setState({profileImage:res.data.profile});
        console.log(this.state.profileImage) ;
        console.log(this.state.PhoneNumber) ;
        console.log(this.state.email) ;
        console.log(this.state.userName);
         })
    .catch(err=>console.log(err))
}
componentDidMount(){
  this.fetchUserDetails();
  }

  render() {

    if(this.state.profileImage){
      var imagestr=this.state.profileImage;
      var profilePic=pic;
  }else{
       profilePic= pic;
  }

    function sayHello() {
        alert('You want to edit profile picture');
      }
      
    function fun2() {
        alert('You want to edit profile information');
      }
      
  
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "20px",
        fontFamily: "Arial"
        };
        const mystyle0 = {
          backgroundColor: "AliceBlue",
          margin:0,
          padding:80
          };

        const mystyle1 = {
            backgroundColor: "AliceBlue",
          /*  backgroundImage:`url(${pic1})`,*/
            margin:0,
            padding:50
            };

            
            const mystyle2 = {
                backgroundColor: "AliceBlue",
                margin:0,
                padding:5
                };

                
           
if (this.state.isActive){
    return (
        <div>
          <div style = {mystyle2}>
        <h1 style={mystyle}>Profile Page</h1>
        <button 
        style= {{paddingRight :10}}
        onClick={this.logOut} >logOut</button>
        <span>    </span>

        <button onClick={fun2} >Edit User Info</button>
        <span>    </span>
        
         <button

    type="button" 
    onClick={(e) => {
      e.preventDefault();
      window.location.href='http://localhost:3000/';
      }}
> MainPage</button>
<button onClick={sayHello}  style={{
  position: 'absolute', left: '85%'
          }}>upload your realstae  </button>

          </div>
          <div style={mystyle0} >
          <button onClick={sayHello}  style={{
            position: 'absolute', left: '90%',top:'70',
            transform: 'translate(-50%, -50%)'
          }}>MY APPOINTMENT</button>

          <br />  <br />   <br /> <br />

<button onClick={sayHello}  style={{

            position: 'absolute', left: '90%',top:'30',
            transform: 'translate(-50%, -50%)'
          }}>MY REAL STATE</button>
            
          <img src={profilePic} alt="cur" class="center"
          style={{
            position: 'absolute', left: '50%', top: '50%',width:250 , height : 250 ,
            transform: 'translate(-50%, -50%)'
          }}/>


       <h1 >{this.state.userName} </h1>
       <br /><br />  <br />
      
          <form style = {{position :'absolute', left: '50%', top: '72%',transform: 'translate(-50%, -50%)'}}>
              <input type="file" name="profileImage" onChange= {this.onChange} />
              <button onClick= {this.UpdateProfileHandler}>Update</button>
              <button onClick={this.disCardEditting }>disCardEditting</button>
              
          </form>
          


          </div>
          
          <GridList></GridList>
          <Copyright />

        </div>

    );}
    else{

      if (this.state.isActiveEditProfileInformation){

      return (
        <div>
          <div style = {mystyle2}>
        <h1 style={mystyle}>Profile Page</h1>
          </div>
          <div style={mystyle0} >
          <button onClick={sayHello}  style={{
            position: 'absolute', left: '90%',top:'70',
            transform: 'translate(-50%, -50%)'
          }}>MY APPOINTMENT</button>

          <br />  <br />   <br /> <br />

<button onClick={sayHello}  style={{

            position: 'absolute', left: '90%',top:'30',
            transform: 'translate(-50%, -50%)'
          }}>MY REAL STATE</button>
          <form
          style={{position: 'absolute', left: '20%',top:'50', transform: 'translate(-50%, -50%)'}} >
            <h4>Update your information</h4> 
            <label for="FirstName">FirstName &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    	  <input  
          type="text" defaultValue = {this.state.fname}  placeholder = {this.state.fname} onChange={this.changeFName}
          required
        />
        <br/><br/>
        <label for="LasttName">LaststName&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    	  <input  
          type="text" defaultValue = {this.state.lname}  placeholder = {this.state.lname} onChange={this.changeLName}
          required
        />
        <br/><br/>
        <label for="Adress">Adress&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
    	  <input  
          type="text" defaultValue = {this.state.address} placeholder = {this.state.address} onChange={this.changeAddress}
          required
        />
        <br/><br/>
        <label for="PhoneNumber">PhoneNumber&nbsp;&nbsp;&nbsp;</label>
    	  <input  
          type="text" defaultValue = {this.state.PhoneNumber} placeholder = {this.state.PhoneNumber} onChange={this.changePhoneNumbe}
          required
        />
        <br/><br/><br/><br/>
        <button onClick={this.onSaveEditInformation} >SaveChanges</button>
        <button onClick={this.cancelEditUerInformation}>Cancel</button>
    	</form>


          <img src={profilePic} alt="cur" class="center"
          style={{
            position: 'absolute', left: '50%', top: '50%',width:250 , height : 250 ,
            transform: 'translate(-50%, -50%)'
          }}/>


        <h1 
         style={{
          position: 'absolute', left: '50%', top: '20%',
          transform: 'translate(-50%, -50%)'
        }}
        >{this.state.userName}</h1>
       <br /><br /> <br /> <br /> <br /><br /> <br />
      

          </div>
          
          <GridList></GridList>
          <Copyright />

        </div>

    );

    }
    else{

      return (
        <div>
          <div style = {mystyle2}>
        <h1 style={mystyle}>Profile Page</h1>
        <button 
        style= {{paddingRight :10}}
        onClick={this.logOut} >logOut</button>
        <span>    </span>

        <button onClick={this.editUerInformation} >Edit User Info</button>
        <span>    </span>
        
         <button

    type="button" 
    onClick={(e) => {
      e.preventDefault();
      window.location.href='http://localhost:3000/';
      }}
> MainPage</button>


<button style={{
  position: 'absolute', left: '85%'
          }}>upload your realstae  </button>

          </div>
          <div style={mystyle0} >
          <button onClick={sayHello}  style={{
            position: 'absolute', left: '90%',top:'70',
            transform: 'translate(-50%, -50%)'
          }}>MY APPOINTMENT</button>

          <br />  <br />   <br /> <br />

<button onClick={sayHello}  style={{

            position: 'absolute', left: '90%',top:'30',
            transform: 'translate(-50%, -50%)'
          }}>MY REAL STATE</button>


          <img src={profilePic} alt="cur" class="center"
          style={{
            position: 'absolute', left: '50%', top: '50%',width:250 , height : 250 ,
            transform: 'translate(-50%, -50%)'
          }}/>


        <h1 >{this.state.userName}</h1>
       <br /><br /> <br /> 
       <button onClick={this.editProfilePic}  style={{

position: 'absolute', left: '50%',top:'20',
transform: 'translate(-50%, -50%)'
}}>editProfilePic</button>






          </div>
          
          <GridList></GridList>
          <Copyright />

        </div>

    );







    }
  }
  }

}

ProfilePage.propTypes = {
};

export default ProfilePage;