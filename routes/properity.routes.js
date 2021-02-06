const router =require("express").Router({mergeParams:true});
const propertyController=require("../controllers/properties.controller");

router.get("/allLands",propertyController.getLands);
module.exports=router;