const mongo = require("mongodb");
const dotenv = require("dotenv").config();

const MongoClient = mongo.MongoClient;

const mongoURL = process.env.URL;

let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(mongoURL)
    .then((client) => {
      console.log("Connected to mongoDB");
      _db = client.db("airbnb");
      callback();
    })
    .catch((err) => {
      console.log("Error while connecting to mongoDB", err);
    });
};

const getdb = () => {
  if (!_db) {
    throw new Error("No database found");
  }
  return _db;
};

module.exports = { mongoConnect, getdb };
