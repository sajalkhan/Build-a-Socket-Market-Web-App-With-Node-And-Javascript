const fs = require('fs');  // include file module to read and write 
const http = require('http'); // include http module
const url = require('url'); // include url module to get url related information
const express = require('express'); // include express in our app

const app = express();
const port = 8080;

app.use(express.static('public')); // now we can use static file

app.get('/index.html',(req,res)=>{

    res.sendfile(__dirname+"/index.html");
});

app.get('/process_get', (req, res) => {
    
    response = {
        first_name : req.query.first_name,
        last_name : req.query.last_name
    };

    console.log(response);
    res.end(JSON.stringify(response));
});

app.listen(port, () => {
    console.log(`App running on ${port}...`);
});


