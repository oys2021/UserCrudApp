var express=require('express');
var app=express();
var exphbs=require('express-handlebars');
var bodyParser=require('body-parser');
require('./models/db')
var person=require('./controllers/person')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// configuring the template engine and setting the main template
app.engine('hbs',exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));

// Setting template Engine
app.set('view engine','hbs');






app.listen(4500,()=>{
    console.log('Done')
});
app.use('/employee', person);