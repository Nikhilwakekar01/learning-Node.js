const mongoose = require("mongoose");
const Favourite = require("./favouriteModel");

const homeSchema = new mongoose.Schema({
  housename: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  rent: {
    type: Number,
    required: true,
  },
  photos: {
    type: String,
  },
  description: {
    type: String,
  },
});

homeSchema.pre("findOneAndDelete", async function () {
  const homeId = this.getQuery()["_id"];
  await Favourite.deleteMany({ houseId: homeId });
});

module.exports = mongoose.model("Home", homeSchema);
