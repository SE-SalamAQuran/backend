const router = require('express').Router();
const Users = require('../models/users.model');
const search = require("regex-collection");
var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+file.originalname)
  }
});

const fileFilter=(req, file, cb)=>{
 if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
     cb(null,true);
 }else{
     cb(null, false);
 }

}

var upload = multer({ 
  storage:storage,
  limits:{
      fileSize: 1024 * 1024 * 5
  },
  fileFilter:fileFilter
});

// image path
// limit: 5mb
// filter : png, jpeg,jpg


router.route('/').get((req, res) => {
  Users.find({})
  .then(users=>{
    res.status(200).json({
        message:"OK",
        results:users
    });
  })
  .catch(err=>{
    res.json(err);
  })
});






router.route('/register').post((req,res)=>{
   
        const newUser = new Users({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            password: req.body.password,
            address: req.body.address,
            gender: req.body.gender,
        });
        newUser.save()
        .then(()=> res.json("User added!"))
        .catch(err => res.status(400).send("Error" + err));
     
});




router.route('/login').post((req,res)=>{
 const email = req.body.username;
 const password = req.body.password;
Users.findOne({email: email},(err,user)=>{
   if(err) {
     console.log(err);
   }else{
     if(user){
       if(user.password === password){
         res.json(user);
         console.log(user);
       }else{
         res.send("Wrong password");
       }
     }
   }
  });
});
 

  router.route('/user/:id').get((req,res)=>{
    const id = req.params.id;
    Users.findOne({_id: id}, (err,result)=>{
      if(err){
        res.sendStatus(400).send("Error", err);
      }else{
        res.json(result);
      }
    })
  });

  router.route('/update/:id').put((req, res)=>{
    console.log(req.params.id);
   const id = req.params.id
    console.log(id);
   Users.findOneAndUpdate(
      {_id:id},
       {
        $set: {
         fname: req.body.fname,
         lname: req.body.lname,
         address: req.body.address,
         phoneNo: req.body.phoneNumber,
        
        } }
        ,(err, docs)=>{

     if(err) res.json(err);
       else
       { 
       console.log("updating done ");
     }
     });
    });
    router.route('/logOut/:id').put((req, res)=>{
     const id = req.params.id
      console.log(id);
     Users.findOneAndUpdate(
        {_id:id},
         {
          $set: {
            is_active: false
          
          } }
          ,(err)=>{
  
       if(err) res.json(err);
         else
         { 
         console.log("you are logged out ");
       }
       });
      });

        router.route('/updateProfileImage/',upload.single('profileImage')).post((req, res)=>{
          const id = req.body.user_id ;
          console.log(id) ;
         var profilePic= req.body.profileImage;
         console.log(profilePic) ; 
        
     });

    
  




module.exports = router;