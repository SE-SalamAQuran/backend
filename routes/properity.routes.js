const router = require("express").Router({ mergeParams: true });

var propertyController = require("../controllers/properties.controller");

router.get("/lands", propertyController.getLands);
router.get("/property/:id", propertyController.getproperty);
router.get("/villas", propertyController.getVillas);
router.post("/addWishItem",propertyController.addNewWishItem);
router.get("/getWishItem/:id",propertyController.fetcheWishlList);
router.get("/getWishItem/",propertyController.fetcheWishlList1);
router.delete("/deleteWishItem/:id",propertyController.deleteWishItem);




module.exports = router;
