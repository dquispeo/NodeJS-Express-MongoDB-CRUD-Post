var mongoose = require("mongoose");
Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/users");

var modelSchemaC = new Schema({
    autor: {type:String,required:true},
    mensaje: {type:String,required:true},
    fecha: {type:Date,required:true}
});

var modelSchema = new Schema({
    titulo: {type:String,required:true},
    descripcion: {type:String,required:true},
    categoria: {type:String,required:true},
    fecha: {type:String,required:true},
    comentarios : [modelSchemaC]
});


var model  = mongoose.model('contacts',modelSchema,'contacts');
//var comments = mongoose.model('contacts', modelSchemaC);

//model = mongoose.model('contacts',modelSchema,'contacts');
module.exports = model;
