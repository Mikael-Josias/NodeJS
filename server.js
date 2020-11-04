const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o APP
const app = express();

app.use(express.json());
app.use(cors());
//Iniciando o MongoDB
mongoose.connect(
    'mongodb://localhost:27017/NodeJS', 
    {useNewUrlParser: true}
);
requireDir("./src/models"); 

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001); 
