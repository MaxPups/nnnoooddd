const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {


    // console.log(req.url);
        let result;
        if(req.url ==='/home') result = `<h2>Home</h2>`;
        if(req.url ==='/about') result = `<h2>About</h2>`;
        if(req.url ==='/') result = `<h1>Main head page</h1>`


        



    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(result);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});