const fs = require('fs');  // include file module to read and write 
const http = require('http'); // include http module
const url = require('url'); // include url module to get url related information

const Server = http.createServer((req, res) => {
    //console.log(req.url); // get url information
    const pathName = req.url;
    // console.log(pathName);
    if (pathName == '/' || pathName == '/Overview')
    {
        res.end('welcome to Product Overview');
    } 
    else if (pathName == '/product') 
    {
        res.end('This is the product');
    }
    else 
    {
        res.writeHead(404);
        res.end('Page Not Found!');
    }
});

Server.listen(8080, () => {
    console.log('listining from 8080');
});

