const Home = require("../model/homeModel");

const addHome = (req, res, next) => {
  console.log(req.url, req.method);
  res.render("host/editHome", {
    pageTitle: "Register house",
    currentPage: "addhome",
    editing: false,
  });
};

const getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("home for editing is not found");
      return res.redirect("/host/hostHomeList");
    }
    console.log(homeId, editing, home);
    res.render("host/editHome", {
      home: home,
      pageTitle: "edit your home",
      currentPage: "hostHomeList",
      editing: editing,
      homeId: homeId,
    });
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

const postEditHome = (req, res, next) => {
  const { id, home, contact, address, rent, photos } = req.body;
  const house = new Home(home, contact, address, rent, photos);
  house.id = id;
  house.save();
  res.redirect("/host/hostHomeList");
};

const postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("delete the home ", homeId);
  Home.deleteById(homeId, (error) => {
    if (error) {
      console.log("error while deleting", error);
    }
    res.redirect("/host/hostHomeList");
  });
};

module.exports = {
  addHome,
  addedhome,
  getHostHomeList,
  getEditHome,
  postEditHome,
  postDeleteHome,
};
