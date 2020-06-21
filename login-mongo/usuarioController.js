var mongoose = require('mongoose')
var Usuario = require("./usuarios")

var usuarioController = {}


usuarioController.show = function(req, res){
    usuario.findOne({_id: req.params.id}).exec(function(err, usuario){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('./public/index', {usuario: usuario} );
    });
    
};

usuarioController.create = function(req, res){
    res.render('/public/registro');
};

usuarioController.save = function(req, res){
    var usuario = new Usuario( req.body );
    
    product.save(function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Successfully created a user. :)");
        res.redirect('/public/login');
        
    });
};

module.exports = usuarioController;