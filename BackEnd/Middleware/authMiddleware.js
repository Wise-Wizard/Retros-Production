const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");

const protectHandler = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_KEY);
      req.user = await User.findById(decode.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Authorization Failed, Token Failed!");
    }
  }
  else {
    res.status(401);
    throw new Error("Please provide a Token!");
  }
});

// User must be an admin
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};
module.exports = { protectHandler, admin };
