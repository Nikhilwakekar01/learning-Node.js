const Home = require("../model/homeModel");

const getHome = (req, res, next) => {
  console.log("we are inside home", req.url, req.method, req.body);

  Home.fetchAll((houseList) => {
    console.log(houseList);
    res.render("store/index", {
      houseList: houseList,
      pageTitle: "Home-Page",
      currentPage: "home",
    });
  }); //fetching the houseList from the model
};

const getFavoriteList = (req, res, next) => {
  console.log("we are inside favorites", req.url, req.method, req.body);

  Home.fetchAll((houseList) => {
    console.log(houseList);
    res.render("store/favoriteList", {
      houseList: houseList,
      pageTitle: "favorite",
      currentPage: "favoriteList",
    });
  }); //fetching the houseList from the model
};

const getHomeList = (req, res, next) => {
  console.log("we are inside favorites", req.url, req.method, req.body);

  Home.fetchAll((houseList) => {
    console.log(houseList);
    res.render("store/homeList", {
      houseList: houseList,
      pageTitle: "homeList",
      currentPage: "homeList",
    });
  }); //fetching the houseList from the model
};

const getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "your bookings",
    currentPage: "bookings",
  });
};

module.exports = { getHome, getBookings, getFavoriteList, getHomeList };
