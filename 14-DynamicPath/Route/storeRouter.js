const express = require("express");
const storeRouter = express.Router();
const {
  getHome,
  getBookings,
  getFavoriteList,
  getHomeList,
  getHomeDetails,
  addFavouriteHome,
} = require("../controllers/storeController");

storeRouter.get("/", getHome);
storeRouter.get("/favouriteList", getFavoriteList);
storeRouter.get("/homeList", getHomeList);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/homeList/:homeId", getHomeDetails);
storeRouter.post("/favouriteList", addFavouriteHome);

module.exports = storeRouter;
