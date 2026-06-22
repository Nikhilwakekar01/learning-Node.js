const express = require("express");
// const http = require("http");
const requestHandler = require("./user");

const app = express();
app.use((req, res, next) => {
  console.log("i am in first middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("i am in second middleware", req.url, req.method);
  res.send("<p>welcome to expressjs</p>");
});
// const server = http.createServer(app);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
