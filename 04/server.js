const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req)
    console.log(req.url,req.method,req.headers);


    if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>node practice</title></head>');
    res.write('<body><h1>hello welcome to home page</h1></body>');
    res.write('</html>');
    return res.end()


    }else if(req.url==='/product'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>node practice</title></head>');
    res.write('<body><h1>wellcome to product section</h1></body>');
    res.write('</html>');
    return res.end()

    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>node practice</title></head>');
    res.write('<body><h1>bye bye</h1></body>');
    res.write('</html>');
    return res.end()


})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})