const http = require("http");
const homePage = require("./home");

const server = http.createServer(homePage);

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`server running on the http://localhost:${PORT}`);
});
