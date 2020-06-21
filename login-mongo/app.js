const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const usuario = require('./usuarioController')

mongoose.connect('mongodb://127.0.0.1:27017/mydb');
mongoose.Promise = global.Promise;
mongoose.connection.on("error",function(e){
    console.error(e);
})

//importando el modelo
//var usuario = require("usuarios");

app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.get("/registro",(req,res)=>{
    res.sendFile(path.join(__dirname, './public', 'registro.html'));
})


app.post("/registro",usuario.create,(req,res)=>{
    //var usuario = new usuarios(); // Creamos una nueva instancia del modelo de usuarios
    /*usuario.name = req.body.usuario; 
    usuario.mail = req.body.email; 
    usuario.pass = req.body.password
    
    usuarios(function(err) {
      if (err){ //Si hay un error, lo regresamos
        res.send(err);
      }*/
    //Si no hay errores, regresamos un mensaje de que todo salió bien
    res.send('se creo el usuario',req.body );
})


app.listen(3000, () => {
    console.log('Listening on port 3000');
})