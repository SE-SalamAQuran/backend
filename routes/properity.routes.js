const router = require("express").Router({ mergeParams: true });

const propertyController = require("../controllers/properties.controller");

router.get("/lands", propertyController.getLands);
router.get("/villas", propertyController.getVillas);
router.post("/addWishItem", propertyController.addNewWishItem);
router.post("/new/:id", propertyController.addProperty);
router.get("/getWishItem/:id", propertyController.fetcheWishlList);
router.delete("/deleteWishItem/:id", propertyController.deleteWishItem);

module.exports = router;
