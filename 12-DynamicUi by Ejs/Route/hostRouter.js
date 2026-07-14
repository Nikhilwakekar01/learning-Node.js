const express = require("express");
const path = require("path");

const hostRouter = express.Router();
const rootdir = require("../util/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  console.log(req.url, req.method);
  res.render("addHome", {
    pageTitle: "Register house",
    currentPage: "addhome",
  });
});

const houseList = [];
hostRouter.post("/add-home", (req, res, next) => {
  console.log("post request details:", req.url, req.method, req.body);

  houseList.push(req.body);
  // console.log(houseList);

  res.render("homeAdded", {
    pageTitle: "house register successfully ",
    currentPage: "homeAdded",
  });
});

module.exports = { hostRouter, houseList };
