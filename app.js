var express = require('express');
var app = express();
var path = require('path');
var expresslayout = require('express-ejs-layouts');
var indexRouter = require('./routes/index')


require('dotenv').config()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.set('layout' , './layouts/webLayout')
//app.set('layout register', false)
app.use(express.static(path.join(__dirname, 'public')))
app.use(expresslayout)
app.set(express.urlencoded({extended: false}))
app.set(express.json());
app.use('/' , indexRouter)


//portNumber
app.listen(3000)
module.exports = app