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

const Product = mongoose.model('Product');

//Primeira Rota
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with reactive',
        url: 'https://github.com/facebook/react-native' 
    });

    return res.send('Hello World');
});

app.listen(3001); 