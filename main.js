const express = require('express');
const app = express();

const server = express();
server.get('/', function (req, res){ //requête et réponse
    res.setHeader('Content-Type', 'text/html');

});

app.get('/', (req, res) => {
    res.send("Bonjour l'univers");
});