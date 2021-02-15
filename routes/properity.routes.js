const router = require("express").Router({ mergeParams: true });
const propertyController = require("../controllers/properties.controller");

router.get("/lands", propertyController.getLands);
router.get("/villas", propertyController.getVillas);
module.exports = router;
