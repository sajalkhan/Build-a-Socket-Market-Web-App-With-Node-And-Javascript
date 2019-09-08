const fs = require('fs');  // include file module to read and write 
const http = require('http'); // include http module
const url = require('url'); // include url module to get url related information



const data =  fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8'); // read file 
const productData = JSON.parse(data); // parse json data

const Server = http.createServer((req, res) => {
    
    //console.log(req.url); // get url information
    //console.log(url.parse(req.url,true));
    
    const { query, pathname} = url.parse(req.url,true); // assign path and pathname
    //const pathname = req.url;
    //console.log(query);
    //console.log(pathname);

    if (pathname === '/' || pathname === '/Overview')
    {
        res.end('welcome to Product Overview');
    } 
    else if (pathname === '/product') 
    {
        console.log(query);
        res.end('This is the product');
    }
    else if(pathname === '/api'){
        
        // fs.readFile('./dev-data/data.json','utf-8',(err,data)=>{});                     
        // fs.readFile(`${__dirname}/dev-data/data.json`,'utf-8',(err,data)=>{               ----- This read file will read every time when
        //                                                                                   ----- api is call
        //     const productData = JSON.parse(data); // read json data
        //     res.writeHead(200,{'content-type':'application/json'});
        //     res.end(data);
        // });
        
        res.writeHead(200,{'content-type':'application/json'});
        res.end(data); 
        
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

