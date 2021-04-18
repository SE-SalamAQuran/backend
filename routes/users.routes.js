const router = require("express").Router({ mergeParams: true });
const passport = require("passport");
var userController = require("../controllers/users.controller");

router.put("/update/:id", userController.updateUserData);
router.get("/user/:id", userController.fetcheUserData);
router.get("/users", userController.fetcheAllUserData);
router.post("/login", userController.userLogin);
router.post("/sendmail", userController.forgotPasswordMail);
router.post("/sendSMS", userController.forgotPasswordSMS);
router.post("/logout/:id", userController.logout);
router.post("/register", userController.registerNewUser);
router.patch("/updatePass", userController.changePassword);
router.get("/:id", userController.getProfileImg);

module.exports = router;
