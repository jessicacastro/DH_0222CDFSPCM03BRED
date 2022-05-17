const express = require("express");
const ProductsController = require("../controllers/ProductsController");
const multerConfig = require("../utils/multerConfig");
const createProductValidator = require("../validators/createProductValidator");

const router = express.Router();

router.get("/", ProductsController.index);
router.get("/detail/:id", ProductsController.details);
router.delete("/delete/:id", ProductsController.delete);
router.get("/edit/:id", ProductsController.edit);
router.put(
  "/edit/:id",
  multerConfig.single("image"),
  ProductsController.update
);
router.get("/create", ProductsController.create);
router.post(
  "/",
  createProductValidator,
  multerConfig.single("image"),
  ProductsController.save
);

module.exports = router;
