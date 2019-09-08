const fs = require('fs');  // include file module to read and write 
const http = require('http'); // include http module
const url = require('url'); // include url module to get url related information
const express = require('express'); // include express in our app

const app = express();
const port = 8080;

app.use(express.static('public')); // now we can use static file

app.get('/', (req, res) => {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
});

app.post('/', (req, res) => {
    console.log("Got a POST request for the homepage");
    res.send('Hello POST');
});

app.delete('/del_user', (req, res) => {
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
})

app.listen(port, () => {
    console.log(`App running on ${port}...`);
});


