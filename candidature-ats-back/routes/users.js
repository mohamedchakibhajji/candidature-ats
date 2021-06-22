const express = require("express");
const userrouter = express.Router();
const userController = require("../controller/UserController");

var cors = require('cors');


userrouter.post("/add",userController.create);
userrouter.get("/all",userController.get);
userrouter.get("/profile/:user_id",userController.showprofile);

module.exports = userrouter;