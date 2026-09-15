const http = require("http");

http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Home page");
    } 
    else if (req.url === "/about") {
        res.end("About Page");
    } 
    else {
        res.statusCode = 404;
        res.end('Page not found <br><a href="/">Home Page</a>');
    }

}).listen(8000);

console.log("Server started: http://localhost:8000");