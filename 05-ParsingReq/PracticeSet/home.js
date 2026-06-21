const requestHandleSum = require("./sum");

const homePage = (req, res) => {
  console.log(req.url, req.method);

  if (req.url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html lang="en">
        <head>
          <title>Calculator</title>
        </head>
        <body>
        <h1>welcome to home page</h1>
          <nav>
            <ul>
              <li>
                <a href="/calculator">Calculator </a>
              </li>
            </ul>
          </nav>
        </body>
      </html>`);
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html lang="en">
        <head>
          
            <title>Calculator</title>
        </head>
        <body>
            <form action="/calculate-sum" method="POST" >
            <h1> sum calculator</h1>
            <input placeholder="enter value one" name='first' type='text'  />
            <br/>
            <input placeholder="enter 2nd value" name='second' type='text'  />
            <br/>
            <input type="submit" value="Sum"></input>

            </form>
        </body>
      </html>`);
    return res.end();
  } else if (req.url === "/calculate-sum" && req.method === "POST") {
    return requestHandleSum(req, res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
    <html lang="en">
      <head>
        <title>Calculator</title>
      </head>
      <body>
      <h1> 404 page not found</h1>
        <nav>
          <ul>
            <li>
              <a href="/">go to home page </a>
            </li>
          </ul>
        </nav>
      </body>
    </html>`);
  return res.end();
};

module.exports = homePage;
