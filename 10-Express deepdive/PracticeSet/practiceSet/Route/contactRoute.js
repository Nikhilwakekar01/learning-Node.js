const express = require("express");
const path = require("path");
const contRouter = express.Router();
const rootdir = require("../util/rootUtil");

contRouter.get("/contact-us", (req, res, next) => {
  console.log("i am inside the contact route:-", req.url, req.method, req.body);
  res.sendFile(path.join(rootdir, "view", "contact.html"));
});

contRouter.post("/contact-us", (req, res, next) => {
  console.log("req is found to post method:-", req.url, req.method, req.body);
  res.sendFile(path.join(rootdir, "view", "addedContact.html"));
});

module.exports = contRouter;
