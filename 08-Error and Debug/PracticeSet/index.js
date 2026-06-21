const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

const PORT = 5002;
server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
