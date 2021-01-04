const router = require("express").Router({ mergeParams: true });
const dotenv = require("dotenv").config({
  path: "C:/Users/ELIFE/Desktop/backend/.env'",
});
var userController = require("../controllers/users.controller");

router.put("/update/:id", userController.updateUserData);
router.get("/user/:id", userController.fetcheUserData);
router.post("/login", userController.userLogin);
router.post("/logout/:id", userController.logout);
router.post("/register", userController.addNewUser);

module.exports = router;
