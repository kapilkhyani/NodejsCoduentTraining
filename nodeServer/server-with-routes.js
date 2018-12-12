const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  const parts = url.parse(request.url);
  if (parts.pathname === '/') {
    response.writeHead("200", {'Content-Type': 'text/plain'});
    response.end("Home Page");
  } else if (parts.pathname === '/about') {
    response.writeHead("200",  {'Content-Type': 'text/plain'});
    response.end("About Page");
  } else {
    response.writeHead("404",  {'Content-Type': 'text/plain'});
    response.end("Page Not found");    
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});