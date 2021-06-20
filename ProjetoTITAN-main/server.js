const { response } = require('express');
const express = require('express');;
const {listaDePosts} = require('./Dados/todosPosts')
const routes = require('./Routes/routes')
const app = express();

app.use(express.urlencoded({
    extended: true  }))
app.set("view engine", "ejs");
app.use(express.static("public"))
app.use(routes);

//deixei aqui pq n consegui fuçar seu back n
app.get("/contato", function(req, res){
    res.render("pages/contato");
})


app.listen(8080);
console.log('rodando http://localhost:8080')  