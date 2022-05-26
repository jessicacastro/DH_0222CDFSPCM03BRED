const express = require('express')
const ProductsController = require("../controllers/ProductsController");
const multerConfig = require("../utils/multerConfig");
const auth = require('../middleware/auth')

const router = express.Router();

router.get("/", auth, ProductsController.index);
router.get("/detail/:id", auth, ProductsController.details);
router.delete("/delete/:id", auth, ProductsController.delete);
router.get("/edit/:id", auth, ProductsController.edit);
router.put(
  "/edit/:id",
  auth,
  multerConfig.single("image"),
  ProductsController.update
);
router.get("/create", auth, ProductsController.create);
router.post(
  "/",
  auth,
  multerConfig.single("image"),
  ProductsController.save
);

module.exports = router;
