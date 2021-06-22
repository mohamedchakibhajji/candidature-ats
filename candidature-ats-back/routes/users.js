const express = require("express");
const userrouter = express.Router();
const userController = require("../controller/UserController");




userrouter.post("/add",userController.create);
userrouter.get("/all",userController.get);
userrouter.get("/profile/:user_id",userController.showprofile);

module.exports = userrouter;