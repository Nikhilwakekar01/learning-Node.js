const { URLSearchParams } = require("url");

const requestHandleSum = (req, res) => {
  const body = [];
  req.on("data", (chunks) => {
    console.log(chunks);
    body.push(chunks);
  });
  req.on("end", () => {
    const fullBody = Buffer.concat(body).toString();
    console.log(fullBody);
    const params = new URLSearchParams(fullBody);
    console.log(params);
    const bodyObject = Object.fromEntries(params);
    console.log(bodyObject);
    const total = Number(bodyObject.first) + Number(bodyObject.second);
    console.log(total);

    res.setHeader("Content-Type", "text/html");
    res.write(`
    <html lang="en">
      <head>
        <title>Calculator</title>
      </head>
      <body>
      <h1> Yout sum is ${total}</h1>
        
      </body>
    </html>`);
    return res.end();
  });
};

module.exports = requestHandleSum;
