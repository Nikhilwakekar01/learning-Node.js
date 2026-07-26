const express = require("express");
const {
  addHome,
  addedhome,
  getHostHomeList,
  getEditHome,
  postEditHome,
  postDeleteHome,
} = require("../controllers/hostController");

const hostRouter = express.Router();

hostRouter.get("/add-home", addHome);

hostRouter.post("/add-home", addedhome);
hostRouter.get("/hosthomelist", getHostHomeList);
hostRouter.get("/editHome/:homeId", getEditHome);
hostRouter.post("/editHome", postEditHome);
hostRouter.post("/deleteHome/:homeId", postDeleteHome);
module.exports = { hostRouter };
