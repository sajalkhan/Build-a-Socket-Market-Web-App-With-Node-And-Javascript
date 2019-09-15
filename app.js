const fs = require('fs');  // include file module to read and write 
const http = require('http'); // include http module
const url = require('url'); // include url module to get url related information
const path = require('path'); //include path

const express = require('express'); // include express in our app
const exphbs = require('express-handlebars');
const request = require('request');
const bodyparser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

//set Handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//use bodyparser middleware
app.use(bodyparser.urlencoded({ extended: false }));

//API key: pk_a4db854aeb4c4f18bd467fd70841b876

function call_api(finishApi) {
    request('https://cloud.iexapis.com/stable/stock/fb/quote?token=pk_a4db854aeb4c4f18bd467fd70841b876', { json: true }, (err, res, body) => {

        if (err) return console.log(err);

        if (res.statusCode == 200) {
            finishApi(body);
        };

    });
}

//set handle bars get routs
app.get('/', (req, res) => {

    call_api(function (doneApi) {  // it's a callback function
        res.render('home', {
            stock: doneApi
        });
        // console.log(doneApi);
    });
});

//set handle bars get routs
app.post('/', (req, res) => {

    parseData = req.body.search_value;
    call_api(function (doneApi) {  // it's a callback function
        res.render('home', {
            stock: doneApi,
            parseData: parseData
        });
    });
});

app.get('/about', (req, res) => {

    res.render('about', {
        status: "yes about page is working perfectly :)"
    });
});

app.use(express.static(path.join(__dirname, 'public'))); // now we can use static file
app.listen(port, () => { console.log(`App running on ${port}...`); });


