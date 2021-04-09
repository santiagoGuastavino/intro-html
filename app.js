const express = require('express');
const { homedir } = require('os');
const path = require('path');
const app = express();
const publicPath = path.resolve('./public');

app.use(express.static(publicPath));
app.listen(3000, () => console.log('Server running'));

const homePath = path.resolve('./views/home.html');
app.get('/', (req,res) => res.sendFile(homePath));