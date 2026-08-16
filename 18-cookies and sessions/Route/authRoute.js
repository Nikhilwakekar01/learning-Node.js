const express = require("express");
const {
  getLogin,
  postLogin,
  postLogOut,
} = require("../controllers/authController");

const authRouter = express.Router();

authRouter.get("/login", getLogin);
authRouter.post("/login", postLogin);
authRouter.post("/logout", postLogOut);

module.exports = authRouter;
