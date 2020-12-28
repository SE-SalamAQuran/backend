const router = require("express").Router({ mergeParams: true });
const dotenv = require("dotenv").config({
  path: "C:/Users/user/Desktop/Pal Estate/backend.env",
});
const passport = require("passport");
var userController = require("../controllers/users.controller");

const ssl = process.env.SSL;

router.get("/auth/facebook", passport.authenticate("facebook"));

router.get(
  `/auth/facebook/PalestinianEstate/?SSL=${ssl}`,
  passport.authenticate("facebook", {
    successRedirect: "/",
    failureRedirect: "/fail",
  })
);

router.get("/auth/google", passport.authenticate("google"));
router.get(
  "/auth/google/PalestinianEstate",
  passport.authenticate("google", {
    successRedirect: "/success",
    failureRedirect: "/fail",
    scope: "https://www.googleapis.com/auth/plus.login",
  })
);

router.get("/fail", (req, res) => {
  res.send("Failed attempt");
});
router.get("/success", (req, res) => {
  res.send("Success");
});

router.post("/login", userController.userLogin);
router.post("/logout", userController.logout);
router.post("/register", userController.addNewUser);

module.exports = router;
