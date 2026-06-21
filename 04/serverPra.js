const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  console.log(req.url, req.method, req.headers);

  if (req.url == "/home") {
    res.write("<h1>welcome to home</h1>");
    return res.end();
  } else if (req.url == "/men") {
    res.write("<h1>welcome to men section</h1>");
    return res.end();
  } else if (req.url == "/women") {
    res.write("<h1>welcome to women section</h1>");
    return res.end();
  } else if (req.url == "/kid") {
    res.write("<h1>welcome to kid section</h1>");
    return res.end();
  } else if (req.url == "/cart") {
    res.write("<h1>welcome to cart section</h1>");
    return res.end();
  }

  res.write(`
    <html lang="en">
  <head>
    <title>myntra</title>
  </head>
  <body>
    <nav>
      <ul>
        <li>
          <a href="/home">home</a>
        </li>
        <li>
          <a href="/men">men</a>
        </li>
        <li>
          <a href="/women">women</a>
        </li>
        <li>
          <a href="/kid">kid</a>
        </li>
        <li>
          <a href="/cart">cart</a>
        </li>
      </ul>
    </nav>
  </body>
</html>
`);
  return res.end();
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`server is running on PORT: http://localhost:${PORT}`);
});
