const express = require('express');
const router = express.Router();

const {
  createUser,
  logInUserData,
  getUserData,
 
} = require("../controller/controller");
module.exports = router;


router.post("/register", createUser);
router.post("/login", logInUserData);
router.get("/user/:userId", getUserData);