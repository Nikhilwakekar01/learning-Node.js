const Home = require("../model/homeModel");

const addHome = (req, res, next) => {
  // console.log(req.url, req.method);
  res.render("host/addHome", {
    pageTitle: "Register house",
    currentPage: "addhome",
  });
};

const addedhome = (req, res, next) => {
  // console.log("post request details:", req.url, req.method, req.body);

  const { home, contact, address, rent, photos } = req.body; //destructuring the req.body object to get the values of home, contact, address, rent, and photos

  const house = new Home(home, contact, address, rent, photos); //object creation from the class Home
  house.save();

  res.render("host/homeAdded", {
    pageTitle: "house register successfully ",
    currentPage: "homeAdded",
  });
};

const getHostHomeList = (req, res, next) => {
  // console.log("we are inside favorites", req.url, req.method, req.body);

  Home.fetchAll((houseList) => {
    // console.log(houseList);
    res.render("host/hostHomeList", {
      houseList: houseList,
      pageTitle: "hostHomeList",
      currentPage: "hostHomeList",
    });
  }); //fetching the houseList from the model
};

module.exports = { addHome, addedhome, getHostHomeList };
