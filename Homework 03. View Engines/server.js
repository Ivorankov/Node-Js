"use strict";
var jade = require('jade');
var express = require('express');
var app = express();
var PORT = 1911;
var data = require('./data');

app.set('view engine', 'jade');
app.set('views', './views');

app.use('/site', express.static(__dirname + '/site'));

app.get('/', function (req, res) {
    res.render('home-view.jade', data);
});
app.get('/phones', function (req, res) {
    res.render('smartphones-view.jade', data);
});
app.get('/tablets', function (req, res) {
    res.render('tablets-view.jade', data);
});
app.get('/clothes', function (req, res) {
    res.render('clothes-view.jade', data);
});

app.listen(PORT, function(){console.log('Serv up and running on Port: ' + PORT)});