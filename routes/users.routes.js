const router = require("express").Router({ mergeParams: true });
let dotenv = require("dotenv").config({
  path: "C:Users/user/Desktop/Pal Estate/backend/.env",
});
const passport = require("passport");
var userController = require("../controllers/users.controller");

router.put("/update/:id", userController.updateUserData);
router.get("/user/:id", userController.fetcheUserData);
router.post("/login", userController.userLogin);

router.post("/logout/:id", userController.logout);
router.post("/register", userController.registerNewUser);

module.exports = router;
