const express = require('express');
const consign = require ('consign');
const bodyParser =  require('body-parser');
const server = express();
const expressvalidator = require('express-validator');

server.set('view engine', 'ejs');
server.set('views', './app/views');

server.use(express.static('./app/public'));
server.use(bodyParser.urlencoded({extended: true}));
server.use(expressvalidator());

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(server);



module.exports = server;

