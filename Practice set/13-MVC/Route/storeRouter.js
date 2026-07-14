const express = require("express");
const storeRouter = express.Router();
const {
  getHome,
  getBookings,
  getFavoriteList,
  getHomeList,
} = require("../controllers/storeController");

storeRouter.get("/", getHome);
storeRouter.get("/favoriteList", getFavoriteList);
storeRouter.get("/homeList", getHomeList);
storeRouter.get("/bookings", getBookings);

module.exports = storeRouter;
