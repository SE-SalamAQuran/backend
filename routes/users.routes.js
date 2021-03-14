const router = require("express").Router({ mergeParams: true });
const passport = require("passport");
const homeController = require("../controllers/home");
var userController = require("../controllers/users.controller");

router.get("/", homeController.getHome);
router.put("/update/:id", userController.updateUserData);
router.put("/uploadProfile/:id", userController.updateUserPicture);
router.get("/user/:id", userController.fetcheUserData);
router.post("/login", userController.userLogin);
router.post("/sendmail", userController.forgotPasswordMail);
router.post("/sendSMS", userController.forgotPasswordSMS);
router.post("/logout/:id", userController.logout);
router.post("/register", userController.registerNewUser);
router.patch("/updatePass", userController.changePassword);


module.exports = router;
