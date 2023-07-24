const express = require("express");
const router = express.Router();
const productController = require("../Controller/productsController");

router
  .get("/", productController.getAllproducts)
  .get("/:id", productController.getproductById)
  .post("/", productController.postNewproduct)
  .put("/:id", productController.replaceproduct)
  .patch("/:id", productController.updateproduct)
  .delete("/:id", productController.deleteproduct);

exports.router = router;
