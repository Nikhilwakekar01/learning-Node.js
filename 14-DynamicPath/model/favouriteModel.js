const fs = require("fs");
const path = require("path");
const rootdir = require("../util/pathUtil");

class favourite {
  static addToFavourite(homeId, callback) {
    favourite.getFavourite((favourites) => {
      if (favourites.includes(homeId)) {
        callback("Home already in favourite");
      } else {
        favourites.push(homeId);
        const filePath = path.join(rootdir, "data", "favourite.json");
        fs.writeFile(filePath, JSON.stringify(favourites), callback);
      }
    });
  }

  static getFavourite(callback) {
    const filePath = path.join(rootdir, "data", "favourite.json");
    fs.readFile(filePath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
}

module.exports = favourite;
