const express = require("express");
const userRouter = require("./Route/userRouter");
const { hostRouter, houseList } = require("./Route/hostRouter");
const path = require("path");
const rootdir = require("./util/pathUtil");

const app = express();

app.set("view engine", "ejs");
app.set("views", "view");

// app.use("/", (req, res, next) => {
//   console.log(req.url, req.method);

//   next();
// });
app.use(express.urlencoded()); //body parser built in body parser middleware in express
app.use(userRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootdir, "public")));

app.use((req, res, next) => {
  res
    .status(404)
    .render("404", { pageTitle: "page not found", currentPage: "404" });
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
