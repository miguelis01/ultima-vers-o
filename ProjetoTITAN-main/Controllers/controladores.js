const express = require('express');
const {listaDePosts} = require('../Dados/todosPosts')
const routers = require ('../Routes/routes')

function home (req,res) {
    res.render("pages/index", {qualitys: listaDePosts});
    console.log ('index renderizado');
}

function consultaPost (req,res) {
    const postConsultado = listaDePosts.find(postConsultado => postConsultado.id === Number(req.params.idConsultado));

    if(!postConsultado) {
        res.send('O POST ' + req.params.idConsultado + ' NÃO FOI ENCONTRADO');
    }

    res.render("pages/post", {qualitys: postConsultado, });
}

function criaComent(req,res) {
    const postConsultado = listaDePosts.find(postConsultado => postConsultado.id === Number(req.params.idConsultado));

    const coment = req.body;
    postConsultado.comentarios.push(coment);
    console.log(postConsultado);

}


module.exports = {home, consultaPost,criaComent};