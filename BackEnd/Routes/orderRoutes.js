const express = require("express");
const {
  addOrderItem,
  getOrderById,
  getOrders,
  updateOrderToPaid,
  updateOrderToDelivered,
} = require("../Controller/orderController");
const { protectHandler, admin } = require("../Middleware/authMiddleware");

//Router Call
const router = express.Router();
router
  .route("/")
  .post(protectHandler, addOrderItem)
  .get(getOrders);
//Get order by ID
router.route("/:id").get(protectHandler, getOrderById);
//router.route("/:id/pay").put(protectHandler, updateOrderToPaid);
router.route("/:id/deliver").put(protectHandler, admin, updateOrderToDelivered);
module.exports = router;
