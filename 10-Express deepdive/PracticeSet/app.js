const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use((req, res, next) => {
  console.log(req.url, req.method, " i am in first midd");
  next();
});
app.use((req, res, next) => {
  console.log(req.url, req.method, "i am in 2nd midd");
  next();
});

// app.use((req, res, next) => {
//   console.log("i am in 3rd middle ware",req.url,req.method,);
//   res.send("<p>hello welcome</p>");
// });

app.get("/", (req, res, next) => {
  res.send("<p> welcome to home page</p>");
});

app.get("/contact-us", (req, res, next) => {
  res.send(
    `<h1>enter your details</h1>
    <form type="submit" action="/contact-us" method="post">
      <input placeholder="enter your name" type="text" name="name"></input>
      <br></br>
      <input placeholder="enter your email" type="email" name="email"></input>
      <input type='submit' value='submit'/> 
    </form>`,
  );
});

app.use(bodyParser.urlencoded()); ///built in body parser middleware which is depricated(not recommended)

app.post("/contact-us", (req, res, next) => {
  console.log("it handle /contact us and post method", req.url, req.method);
  const bodyObj = req.body;
  console.log(bodyObj);
  fs.writeFile("file.txt", JSON.stringify(bodyObj), (error) => {
    if (error) {
      console.log("error occur while creating file");
    }
  });

  res.send(`<h1>we will contact you shortly</h1>`);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
