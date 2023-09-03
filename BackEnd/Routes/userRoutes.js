const express = require("express");
const {
  registerUser,
  authController,
  getUserProfile,
  updateUserProfile,
  getFavourites,
  addToFavorites,
  removeFavorite,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} = require("../Controller/usersController");
const { protectHandler, admin } = require("../Middleware/authMiddleware");
//Router Call
const router = express.Router();

//Register User
router.route("/").post(registerUser).get(protectHandler, admin, getUsers);
//Post Email and Password
router.post("/login", authController);

//Fetches User Profile Data
router
  .route("/profile")
  .get(protectHandler, getUserProfile)
  .put(protectHandler, updateUserProfile);

//Fetches User's Favourites
router.route("/favourites").get(protectHandler, getFavourites);

router
  .route("/favourites/:id")
  .post(protectHandler, addToFavorites)
  .delete(protectHandler, removeFavorite);

//Fetches Admin Routes
router
  .route("/:id")
  .delete(protectHandler, admin, deleteUser)
  .get(protectHandler, admin, getUserById)
  .put(protectHandler, admin, updateUser);

module.exports = router;
