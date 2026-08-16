const express = require("express");
const storeRouter = require("./Route/storeRouter");
const { hostRouter, houseList } = require("./Route/hostRouter");
const path = require("path");
const rootdir = require("./util/pathUtil");
const pageNotFound = require("./controllers/error");
const authRouter = require("./Route/authRoute");

const mongoose = require("mongoose");
const session = require("express-session");
const dotenv = require("dotenv").config();
const mongoDBStore = require("connect-mongodb-session")(session);

const app = express();
const DB_Path = process.env.URL;

app.set("view engine", "ejs");
app.set("views", "view");

// app.use("/", (req, res, next) => {
//   console.log(req.url, req.method);

//   next();
// });

const store = new mongoDBStore({
  uri: DB_Path,
  collection: "sessions",
});
app.use(express.urlencoded()); //body parser built in body parser middleware in express
app.use(
  session({
    secret: "aibnb secrets",
    resave: false,
    saveUninitialized: true,
    store: store,
  }),
);
app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn;
  next();
});
app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if (req.isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
});
app.use("/host", hostRouter);
app.use(authRouter);

app.use(express.static(path.join(rootdir, "public")));

app.use(pageNotFound);

const PORT = process.env.PORT;

mongoose
  .connect(DB_Path)
  .then(() => {
    console.log("connected to mongoDB using mongoose");
    app.listen(PORT, () => {
      console.log(`server is listening on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("error while connecting to mongoDB using mongoose", error);
  });
