const fs = require("fs");
const path = require("path");
const rootdir = require("../util/pathUtil");
const favourite = require("./favouriteModel");

// fake storage

class Home {
  constructor(home, contact, address, rent, photos) {
    this.home = home;
    this.contact = contact;
    this.address = address;
    this.rent = rent;
    this.photos = photos;
  }

  save() {
    Home.fetchAll((houseList) => {
      if (this.id) {
        //for edit home
        houseList = houseList.map((home) => {
          // if (this.id === home.id) {
          //   return this;
          // } else {
          //   return home;
          // }

          return this.id === home.id ? this : home;
        });
      } else {
        //for adding new home
        this.id = Math.random().toString();
        houseList.push(this);
      }
      const filePath = path.join(rootdir, "data", "home.json");
      fs.writeFile(filePath, JSON.stringify(houseList), (err) => {
        console.log("me error hu re", err);
      });
    });
  }
  static fetchAll(callback) {
    const filePath = path.join(rootdir, "data", "home.json");
    fs.readFile(filePath, (err, data) => {
      // console.log("file read", err, data);
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const homeFound = homes.find((home) => home.id === homeId);
      callback(homeFound);
    });
  }

  static deleteById(homeId, callback) {
    this.fetchAll((homes) => {
      homes = homes.filter((home) => {
        return home.id !== homeId;
      });
      const filePath = path.join(rootdir, "data", "home.json");
      fs.writeFile(filePath, JSON.stringify(homes), (error) => {
        favourite.favDeleteById(homeId, callback);
      }); //yaha data overwrite ho raha he
    });
  }
}

module.exports = Home;
