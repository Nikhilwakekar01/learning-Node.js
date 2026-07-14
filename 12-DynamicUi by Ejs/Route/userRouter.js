const express = require("express");
const userRouter = express.Router();
const path = require("path");
const rootdir = require("../util/pathUtil");
const { houseList } = require("./hostRouter");

userRouter.get("/", (req, res, next) => {
  console.log("we are inside home", req.url, req.method, req.body);
  console.log(houseList);
  res.render("homePage", {
    houseList: houseList,
    pageTitle: "Home-Page",
    currentPage: "home",
  });
});

module.exports = userRouter;
