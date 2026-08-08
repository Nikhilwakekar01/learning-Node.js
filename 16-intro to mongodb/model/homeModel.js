const db = require("../util/dataBaseUtil");
const favourite = require("./favouriteModel");
const { getdb } = require("../util/dataBaseUtil");
const { ObjectId } = require("mongodb");

// fake storage

class Home {
  constructor(home, contact, address, rent, photos, description, _id) {
    this.home = home;
    this.contact = contact;
    this.address = address;
    this.rent = rent;
    this.photos = photos;
    this.description = description;
    if (_id) {
      this._id = _id;
    }
  }

  save() {
    if (this._id) {
      const updatefields = {
        home: this.home,
        contact: this.contact,
        address: this.address,
        rent: this.rent,
        photos: this.photos,
        description: this.description,
      };
      const db = getdb();
      return db
        .collection("homes")
        .updateOne({ _id: new ObjectId(this._id) }, { $set: updatefields });
    } else {
      const db = getdb();
      return db.collection("homes").insertOne(this);
    }
  }
  static fetchAll() {
    const db = getdb();
    return db.collection("homes").find().toArray(); //this find() method will return a cursor object which is not an array so we need to convert it into an array using toArray() method
  }

  static findById(homeId) {
    const db = getdb();
    return db
      .collection("homes")
      .find({ _id: new ObjectId(homeId) })
      .next();
  }

  static deleteById(homeId) {
    const db = getdb();
    return db.collection("homes").deleteOne({ _id: new ObjectId(homeId) });
  }
}

module.exports = Home;
