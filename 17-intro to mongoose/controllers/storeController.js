const Home = require("../model/homeModel");
const Favourite = require("../model/favouriteModel");

const getHome = (req, res, next) => {
  // console.log("we are inside home", req.url, req.method, req.body);

  Home.find()
    .then((houseList) => {
      res.render("store/index", {
        houseList: houseList,
        pageTitle: "Home-Page",
        currentPage: "home",
      });
    })
    .catch((error) => {
      console.log("error while fetching", error);
    });
};

const getFavoriteList = (req, res, next) => {
  // console.log("we are inside favorites", req.url, req.method, req.body);
  Favourite.find()
    .populate("houseId")
    .then((favourites) => {
      const favouriteHomes = favourites.map((fav) => fav.houseId);
      // console.log(houseList);
      res.render("store/favoriteList", {
        favouriteHomes: favouriteHomes,
        pageTitle: "favourite",
        currentPage: "favouriteList",
      });
    });
};

const addFavouriteHome = (req, res, next) => {
  //it is post method
  const homeId = req.body.homeId;
  Favourite.findOne({ houseId: homeId })
    .then((existingFav) => {
      if (existingFav) {
        console.log("home already in favourites");
        return res.redirect("/favouriteList");
      }
      const fav = new Favourite({ houseId: homeId });
      return fav.save();
    })
    .then(() => {
      res.redirect("/favouriteList");
    })
    .catch((error) => {
      console.log("error while adding favourite", error);
    });
};

const getHomeList = (req, res, next) => {
  // console.log("we are inside favorites", req.url, req.method, req.body);

  Home.find().then((houseList) => {
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
  Home.findById(homeId).then((home) => {
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

const postDeleteFavourite = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("delete the home from fav", homeId);
  Favourite.findOneAndDelete({ houseId: homeId })
    .then(() => {
      res.redirect("/favouriteList");
    })
    .catch((error) => {
      console.log("error while deleting favourite", error);
    });
};

module.exports = {
  getHome,
  getBookings,
  getFavoriteList,
  getHomeList,
  getHomeDetails,
  addFavouriteHome,
  postDeleteFavourite,
};
