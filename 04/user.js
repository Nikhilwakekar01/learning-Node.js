const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req);
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>node practice</title></head>");
    res.write("<body><h1>Enter your details</h1></br>");

    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeHolder="enter your name"   />',
    );
    res.write("</br>");
    res.write('<label for="male" >Male<label>');
    res.write('<input id="male" type="radio" name="gender" value="male">');
    res.write('<label for="female" >female<label>');
    res.write('<input id="female" type="radio" name="gender" value="female">');
    res.write("</br>");
    res.write('<input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    fs.writeFileSync("user-detail.txt", "nikhil wakekar");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>node practice</title></head>");
  res.write("<body><h1>bye bye</h1></body>");
  res.write("</html>");
  return res.end();
});

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
