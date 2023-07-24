const express = require("express");
const userController = require("../Controller/usersController");
const router = express.Router();

router
  .get("/", userController.getAllUsers)
  .get("/:id", userController.getUserById)
  .post("/", userController.postNewUser)
  .put("/:id", userController.replaceUser)
  .patch("/:id", userController.updateUser)
  .delete("/:id", userController.deleteUser);

exports.router = router;
