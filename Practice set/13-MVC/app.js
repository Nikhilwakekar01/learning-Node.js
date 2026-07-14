const express = require("express");
const storeRouter = require("./Route/storeRouter");
const { hostRouter, houseList } = require("./Route/hostRouter");
const path = require("path");
const rootdir = require("./util/pathUtil");
const pageNotFound = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "view");

// app.use("/", (req, res, next) => {
//   console.log(req.url, req.method);

//   next();
// });
app.use(express.urlencoded()); //body parser built in body parser middleware in express
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootdir, "public")));

app.use(pageNotFound);

const PORT = 5002;
app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
