const router = require("express").Router({ mergeParams: true });

var userController = require("../controllers/users.controller");

router.post("/login", userController.userLogin);
router.post("/logout", userController.logout);
router.post("/register", userController.addNewUser);

module.exports = router;
