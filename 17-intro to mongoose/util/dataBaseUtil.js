const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const mongoURL =
  "mongodb+srv://nikhilvakekars_db_user:hYrRicED5lde0ZOo@practiceprojectcluster.ubjwpv8.mongodb.net/?appName=practiceProjectcluster";

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
