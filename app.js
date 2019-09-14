const fs = require('fs');  // include file module to read and write 
const http = require('http'); // include http module
const url = require('url'); // include url module to get url related information
const path = require('path'); //include path

const express = require('express'); // include express in our app
const exphbs  = require('express-handlebars');

const app = express();
const port =  process.env.PORT || 8080;

//set Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


//set handle bars routs
app.get('/',(req,res)=>{

    res.render('home',{
        status:"now we can pass data :)"
    });
});

app.get('/about',(req,res)=>{

    res.render('about',{
        status:"yes about page is working perfectly :)"
    });
});

app.use(express.static(path.join(__dirname,'public'))); // now we can use static file
app.listen(port, () => { console.log(`App running on ${port}...`); });


