const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const homeRouter = require("./Route/homeRoute");
const contRouter = require("./Route/contactRoute");
const path = require("path");
const rootdir = require("./util/rootUtil");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method, " i am in first midd");
  next();
});
app.use((req, res, next) => {
  console.log(req.url, req.method, "i am in 2nd midd");
  next();
});
app.use(express.urlencoded());
app.use(homeRouter);
app.use(contRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(rootdir, "view", "404.html"));
});

// app.use((req, res, next) => {
//   console.log("i am in 3rd middle ware",req.url,req.method,);
//   res.send("<p>hello welcome</p>");
// });

// app.use(bodyParser.urlencoded()); ///built in body parser middleware which is depricated(not recommended)

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
