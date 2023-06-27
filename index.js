const express = require('express');
const app = express();

const server = express();
server.get('/', function (req, res){ //requête et réponse
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send("<h1>Bonjours l'univers, je viens de turbo naître</h1>");

});

server.listen(8080, function() {
    console.log("ça fonctionne et c'est trop bien !! Sur le post 8080");
});