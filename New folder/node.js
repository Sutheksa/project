file1.js
var http = require('http');
var dt = require('./ownmodule2');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end();
}).listen(8080);

console.log("Server running"); 

file2.js
exports.myDateTime = function () {
    return Date();
}; 