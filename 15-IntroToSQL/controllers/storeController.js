const favourite = require("../model/favouriteModel");
const Home = require("../model/homeModel");

const getHome = (req, res, next) => {
  // console.log("we are inside home", req.url, req.method, req.body);

  Home.fetchAll()
    .then(([houseList]) => {
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
  favourite.getFavourite((favourites) => {
    Home.fetchAll().then(([houseList]) => {
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

  Home.fetchAll().then(([houseList]) => {
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
  Home.findById(homeId).then(([homes]) => {
    const home = homes[0];
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
  favourite.favDeleteById(homeId, (error) => {
    if (error) {
      console.log("error while deleting favourite", error);
    }
    res.redirect("/favouriteList");
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
