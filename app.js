const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve('./public');

app.use(express.static(publicPath));

const homePath = path.resolve('./views/pruebas.html');
app.get('/', (req,res) => res.sendFile(homePath));

const showcasePath = path.resolve('./views/showcase.html');
app.get('/showcase', (req,res) => res.sendFile(showcasePath));

const pruebaPath = path.resolve('./views/prueba.html');
app.get('/prueba', (req,res) => res.sendFile(pruebaPath));

const formulariosPath = path.resolve('./views/formularios.html');
app.get('/formularios', (req,res) => res.sendFile(formulariosPath));

app.listen(3001, () => console.log('Server running: 3001'));