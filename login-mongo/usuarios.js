var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = mongoose.Schema({
    name: String,
    mail: String,
    pass: String
})

//var usuario = moongoose.model("usuario",schema)
module.exports = mongoose.model('usuario',schema)