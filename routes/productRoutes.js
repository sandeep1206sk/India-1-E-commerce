const { createProductController, 
    deleteProductController, 
    getProductController, 
    getSingleProductController,
     productPhotoController, 
     updateProductController, 
     productFiltersController,
     productCountController,
     productListController,
     searchProductController,
     productCategoryController,
     braintreeTokenController,
     brainTreePaymentController,
     updatereviweController,} = require('../controllers/productController');
const { isAdmin, requireSignIn } = require('../middlewares/protectedRoute');
const express = require('express');
const formidable =require("express-formidable");

const router = express.Router();

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

router.get("/get-product", getProductController);

router.get("/get-product/:slug", getSingleProductController);

router.get("/product-photo/:pid", productPhotoController);

router.delete("/delete-product/:pid", deleteProductController);

router.post("/product-filters", productFiltersController);

router.get("/product-count", productCountController);

router.get("/product-list/:page", productListController);

router.get("/search/:keyword", searchProductController);

router.get("/product-category/:slug", productCategoryController);

router.get("/braintree/token", braintreeTokenController);

router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

router.put(
  "/update-reviwe/:pid",
  requireSignIn,
  formidable(),
  updatereviweController
);
module.exports= router;