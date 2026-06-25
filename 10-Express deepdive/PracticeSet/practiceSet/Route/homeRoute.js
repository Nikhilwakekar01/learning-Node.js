const express = require("express");
const homeRouter = express.Router();
const path = require("path");
const rootFile = require("../util/rootUtil");

homeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootFile, "view", "home.html"));
});

module.exports = homeRouter;
