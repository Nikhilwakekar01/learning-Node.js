const fs = require("fs");
const { URLSearchParams } = require("url");

const requestHandler = (req, res) => {
  //   console.log(req);
  console.log(req.url, req.method);

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
    const body = [];
    req.on("data", (chunks) => {
      console.log(chunks);
      body.push(chunks);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const bodyObject = {};
      const params = new URLSearchParams(fullBody);
      for (const [key, val] of params.entries()) {
        bodyObject[key] = val;
      }
      console.log(bodyObject);
      fs.writeFileSync("user-detail.txt", JSON.stringify(bodyObject));
    });

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
};

module.exports = requestHandler;
