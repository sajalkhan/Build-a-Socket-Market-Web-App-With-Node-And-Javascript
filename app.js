const fs = require('fs');  // include file module to read and write 
const http = require('http'); // include http module
const url = require('url'); // include url module to get url related information
const express = require('express'); // include express in our app

const app = express();
const port = 8080;

app.get('/', (req,res)=>{

    // res.status(200).send('Welcome to Node.js Express!');
    res.status(200).json({message:'Welcome to node.js express!', app:'new app'});
});

app.post('/', (req,res)=>{

    res.send('yes it is a post request!');
});

app.listen(port, ()=>{
    console.log(`App running on ${port}...`);
});


