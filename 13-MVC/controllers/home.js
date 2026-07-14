const Home = require("../model/homeModel");

const addHome = (req, res, next) => {
  console.log(req.url, req.method);
  res.render("addHome", {
    pageTitle: "Register house",
    currentPage: "addhome",
  });
};

const addedhome = (req, res, next) => {
  console.log("post request details:", req.url, req.method, req.body);

  const { home, contact, address, rent, photos } = req.body; //destructuring the req.body object to get the values of home, contact, address, rent, and photos

  const house = new Home(home, contact, address, rent, photos); //object creation from the class Home
  house.save();

  res.render("homeAdded", {
    pageTitle: "house register successfully ",
    currentPage: "homeAdded",
  });
};

const getHome = (req, res, next) => {
  console.log("we are inside home", req.url, req.method, req.body);

  Home.fetchAll((houseList) => {
    console.log(houseList);
    res.render("homePage", {
      houseList: houseList,
      pageTitle: "Home-Page",
      currentPage: "home",
    });
  }); //fetching the houseList from the model
};

const pageNotFound = (req, res, next) => {
  res
    .status(404)
    .render("404", { pageTitle: "page not found", currentPage: "404" });
};

module.exports = { getHome, addHome, addedhome, pageNotFound };
