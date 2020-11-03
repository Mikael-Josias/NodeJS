const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o APP
const app = express();

//Iniciando o MongoDB
mongoose.connect(
    'mongodb://localhost:27017/NodeJS', 
    {useNewUrlParser: true}
);
requireDir("./src/models"); 

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001); 
