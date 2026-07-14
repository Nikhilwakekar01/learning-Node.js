const express = require("express");
const path = require("path");

const hostRouter = express.Router();
const rootdir = require("../util/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(rootdir, "view", "addHome.html"));
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log("post request details:", req.url, req.method, req.body);
  res.sendFile(path.join(rootdir, "view", "homeAdded.html"));
});

module.exports = hostRouter;
