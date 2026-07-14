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
      console.log("file read", err, data);
      callback(!err ? JSON.parse(data) : []);
    });
  }
}

module.exports = Home;
