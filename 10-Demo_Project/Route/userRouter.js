const express = require("express");
const userRouter = express.Router();
const path = require("path");
const rootdir = require("../util/pathUtil");

userRouter.get("/", (req, res, next) => {
  console.log("we are inside home", req.url, req.method, req.body);
  res.sendFile(path.join(rootdir, "view", "homePage.html"));
});

module.exports = userRouter;
