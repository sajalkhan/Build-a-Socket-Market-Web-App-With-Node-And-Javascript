const fs = require('fs');  // include file module to read and write 
const http = require('http'); // include http module
const url = require('url'); // include url module to get url related information
const express = require('express'); // include express in our app
const path = require('path'); //include path
const exphbs  = require('express-handlebars');

const app = express();
const port =  process.env.PORT || 8080;

//set Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname,'public'))); // now we can use static file

//set handle bars routs
app.get('/',()=>{

    res.render('home');
});

app.listen(port, () => { console.log(`App running on ${port}...`); });


