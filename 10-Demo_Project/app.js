const express = require("express");
const userRouter = require("./Route/userRouter");
const hostRouter = require("./Route/hostRouter");
const path = require("path");
const rootdir = require("./util/pathUtil");

const app = express();

app.use("/", (req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use(express.urlencoded()); //body parser built in body parser middleware in express
app.use(userRouter);
app.use("/host", hostRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootdir, "view", "404.html"));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is listning on http://localhost:${PORT}`);
});
