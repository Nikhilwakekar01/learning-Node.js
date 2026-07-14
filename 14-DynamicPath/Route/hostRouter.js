const express = require("express");
const {
  addHome,
  addedhome,
  getHostHomeList,
} = require("../controllers/hostController");

const hostRouter = express.Router();

hostRouter.get("/add-home", addHome);

hostRouter.post("/add-home", addedhome);
hostRouter.get("/hosthomelist", getHostHomeList);

module.exports = { hostRouter };
