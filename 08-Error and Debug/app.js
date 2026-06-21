const http = require("http");
const handleSyntax = require("./syntax");
const runtimehand = require("./runTime");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  handleSyntax();
  runtimehand();
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
