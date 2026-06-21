const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});

const PORT = 5001;

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
