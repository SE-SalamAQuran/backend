const router = require("express").Router({ mergeParams: true });

const propertyController = require("../controllers/properties.controller");

router.get("/lands", propertyController.getLands);
router.get("/villas", propertyController.getVillas);
router.get("/roofs", propertyController.getRoof);
router.get("/shops", propertyController.getShop);
router.get("/offices", propertyController.getOfiice);
router.get("/apartments", propertyController.getApartment);

router.post("/addWishItem", propertyController.addNewWishItem);
router.post("/new/:id", propertyController.addProperty);
router.get("/getWishItem/:id", propertyController.fetcheWishlList);
router.delete("/deleteWishItem/:id", propertyController.deleteWishItem);

module.exports = router;
