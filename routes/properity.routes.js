const router = require("express").Router({ mergeParams: true });
const imageUploadController = require("../controllers/images.controller");
const propertyController = require("../controllers/properties.controller");
const parser = require("../middleware/upload.multiple");
router.get("/lands", propertyController.getLands);
router.get("/property/:id", propertyController.getproperty);
router.get("/villas", propertyController.getVillas);
router.post("/addWishItem", propertyController.addNewWishItem);
router.get("/getWishItem/:id", propertyController.fetcheWishlList);
router.get("/getWishItem/", propertyController.fetcheWishlList1);
router.delete("/deleteWishItem/:id", propertyController.deleteWishItem);
router.delete("/myProperties/:id", propertyController.deletemyProperties);
router.get("/roofs", propertyController.getRoof);
router.get("/shops", propertyController.getShop);
router.get("/offices", propertyController.getOffice);
router.get("/houses", propertyController.getHouse);
router.get("/apartments", propertyController.getApartment);
router.get("/myProperties/:id", propertyController.getuserproperty);
router.patch("/img_path/:id", propertyController.updatePath);
router.post("/new/:id", propertyController.addProperty);
router.get("/details/imgs/:id", propertyController.getImages);
router.get(
  "/filter/:type/:transactionType/:maxPrice/:minPrice/:maxArea/:minArea/:location",
  propertyController.getFilteredProps
);
module.exports = router;
