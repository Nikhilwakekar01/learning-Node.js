const db = require("../util/dataBaseUtil");
const favourite = require("./favouriteModel");

// fake storage

class Home {
  constructor(home, contact, address, rent, photos, description, id) {
    this.home = home;
    this.contact = contact;
    this.address = address;
    this.rent = rent;
    this.photos = photos;
    this.description = description;
    this.id = id;
  }

  save() {
    if (this.id) {
      return db.execute(
        "UPDATE homes SET home=?,contact=?,address=?,rent=?,photos=?,description=? WHERE id=?",
        [
          this.home,
          this.contact,
          this.address,
          this.rent,
          this.photos,
          this.description,
          this.id,
        ],
      );
    } else {
      return db.execute(
        "INSERT INTO homes (home,contact,address,rent,photos,description) VALUES(?,?,?,?,?,?)",
        [
          this.home,
          this.contact,
          this.address,
          this.rent,
          this.photos,
          this.description,
        ],
      );
    }
  }
  static fetchAll() {
    return db.execute("SELECT * FROM homes");
  }

  static findById(homeId) {
    return db.execute("SELECT * FROM homes WHERE id = ?", [homeId]);
  }

  static deleteById(homeId) {
    return db.execute("DELETE FROM homes WHERE id = ?", [homeId]);
  }
}

module.exports = Home;
