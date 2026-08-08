const { getdb } = require("../util/dataBaseUtil");

class favourite {
  constructor(homeId) {
    this.homeId = homeId;
  }
  save() {
    const db = getdb();
    return db
      .collection("favourites")
      .findOne({ homeId: this.homeId })
      .then((existing) => {
        if (existing) {
          console.log("favourite already exists");
          return existing;
        }
        return db.collection("favourites").insertOne(this);
      });
  }

  static getFavourite() {
    const db = getdb();
    return db.collection("favourites").find().toArray();
  }

  static favDeleteById(homeId) {
    const db = getdb();
    return db.collection("favourites").deleteOne({ homeId: homeId });
  }
}

module.exports = favourite;
