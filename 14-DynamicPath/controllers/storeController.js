const favourite = require("../model/favouriteModel");
const Home = require("../model/homeModel");

const getHome = (req, res, next) => {
  // console.log("we are inside home", req.url, req.method, req.body);

  Home.fetchAll((houseList) => {
    // console.log(houseList);
    res.render("store/index", {
      houseList: houseList,
      pageTitle: "Home-Page",
      currentPage: "home",
    });
  });
};

const getFavoriteList = (req, res, next) => {
  // console.log("we are inside favorites", req.url, req.method, req.body);
  favourite.getFavourite((favourites) => {
    Home.fetchAll((houseList) => {
      const favouriteHomes = houseList.filter((home) =>
        favourites.includes(home.id),
      );
      // console.log(houseList);
      res.render("store/favoriteList", {
        favouriteHomes: favouriteHomes,
        pageTitle: "favourite",
        currentPage: "favouriteList",
      });
    });
  });
};

const addFavouriteHome = (req, res, next) => {
  //it is post method
  const homeId = req.body.homeId;
  favourite.addToFavourite(homeId, (error) => {
    if (error) {
      console.log("error while marking favourite :", error);
    }
    res.redirect("/favouriteList");
  });
};

const getHomeList = (req, res, next) => {
  // console.log("we are inside favorites", req.url, req.method, req.body);

  Home.fetchAll((houseList) => {
    res.render("store/homeList", {
      houseList: houseList,
      pageTitle: "homeList",
      currentPage: "homeList",
    });
  });
};

const getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "your bookings",
    currentPage: "bookings",
  });
};

const getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("home not found");
      res.redirect("/");
    } else {
      res.render("store/homeDetails", {
        home: home,
        pageTitle: "home details",
        currentPage: "homeList",
      });
    }
  });
};

module.exports = {
  getHome,
  getBookings,
  getFavoriteList,
  getHomeList,
  getHomeDetails,
  addFavouriteHome,
};
