const express = require("express");
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../Controller/productController");
const { protectHandler, admin } = require("../Middleware/authMiddleware");

//Router Call
const router = express.Router();

//Fetch All Products from MongoDB
router
  .route("/products")
  .get(getProducts)
  .post(protectHandler, admin, createProduct);

//Reviews Route
//   router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);
//   router.get('/top', getTopProducts);

//Fetch Single Product using ID
router
  .route("/products/:id")
  .get(getProduct)
  .put(protectHandler, admin, updateProduct)
  .delete(protectHandler, admin, deleteProduct);

module.exports = router;
