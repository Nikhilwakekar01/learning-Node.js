const fs = require("fs");
const path = require("path");
const rootdir = require("../util/pathUtil");

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
      this.id = Math.random().toString();
      houseList.push(this);
      const filePath = path.join(rootdir, "data", "home.json");
      fs.writeFile(filePath, JSON.stringify(houseList), (err) => {
        console.log(err);
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
}

module.exports = Home;
