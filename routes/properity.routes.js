const router = require("express").Router({ mergeParams: true });
const imageUploadController = require("../controllers/images.controller");
const propertyController = require("../controllers/properties.controller");
const parser = require("../middleware/upload.multiple");
router.get("/lands", propertyController.getLands);
router.get("/villas", propertyController.getVillas);
router.get("/roofs", propertyController.getRoof);
router.get("/shops", propertyController.getShop);
router.get("/offices", propertyController.getOfiice);
router.get("/houses", propertyController.getHouse);
router.get("/apartments", propertyController.getApartment);
router.patch("/img_path/:id", propertyController.updatePath);
router.post("/addWishItem", propertyController.addNewWishItem);
router.post("/new/:id", propertyController.addProperty);
router.get("/getWishItem/:id", propertyController.fetcheWishlList);
router.delete("/deleteWishItem/:id", propertyController.deleteWishItem);

module.exports = router;
