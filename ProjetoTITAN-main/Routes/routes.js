const express = require('express');
const controladores = require('../Controllers/controladores');

const routes = express();

//mostrando HOME
routes.get("/",controladores.home);

//Abrindo posts individuais  
routes.get("/post/:idConsultado",controladores.consultaPost);

routes.post("/post/:idConsultado",controladores.criaComent);


module.exports = routes;

