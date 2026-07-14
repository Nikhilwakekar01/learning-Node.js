const express = require("express");
const { addHome, addedhome } = require("../controllers/home");

const hostRouter = express.Router();

hostRouter.get("/add-home", addHome);

hostRouter.post("/add-home", addedhome);

module.exports = { hostRouter };
