const Home = require("../model/homeModel");

const addHome = (req, res, next) => {
  console.log(req.url, req.method);
  res.render("host/editHome", {
    pageTitle: "Register house",
    currentPage: "addhome",
    editing: false,
    isLoggedIn: req.isLoggedIn,
  });
};

const getEditHome = (req, res, next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === "true";

  Home.findById(homeId).then((home) => {
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
      isLoggedIn: req.isLoggedIn,
    });
  });
};

const addedhome = (req, res, next) => {
  // console.log("post request details:", req.url, req.method, req.body);

  const { housename, contact, address, rent, photos, description } = req.body; //destructuring the req.body object to get the values of home, contact, address, rent, and photos

  const house = new Home({
    housename,
    contact,
    address,
    rent,
    photos,
    description,
  }); //creating a new instance of the Home model with the values from the req.body object
  house.save().then(() => {
    console.log("house added successfully");
    res.render("host/homeAdded", {
      pageTitle: "house register successfully ",
      currentPage: "homeAdded",
      isLoggedIn: req.isLoggedIn,
    });
  });
};

const getHostHomeList = (req, res, next) => {
  // console.log("we are inside favorites", req.url, req.method, req.body);

  Home.find().then((houseList) => {
    // console.log(houseList);
    res.render("host/hostHomeList", {
      houseList: houseList,
      pageTitle: "hostHomeList",
      currentPage: "hostHomeList",
      isLoggedIn: req.isLoggedIn,
    });
  }); //fetching the houseList from the model
};

const postEditHome = (req, res, next) => {
  const { id, housename, contact, address, rent, photos, description } =
    req.body;
  Home.findById(id)
    .then((house) => {
      house.housename = housename;
      house.contact = contact;
      house.address = address;
      house.rent = rent;
      house.photos = photos;
      house.description = description;
      house
        .save()
        .then((result) => {
          console.log("house updated successfully", result);
          res.redirect("/host/hostHomeList");
        })
        .catch((err) => [console.log("error while updating home", err)]);
    })
    .catch((err) => {
      console.log("error while finding home for updating", err);
    });
};

const postDeleteHome = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("delete the home ", homeId);
  Home.findByIdAndDelete(homeId)
    .then(() => {
      res.redirect("/host/hostHomeList");
    })
    .catch((error) => {
      console.log("error while deleting", error);
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
