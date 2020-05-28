var mongoose = require("mongoose");
Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost/users");
var modelSchemaC = new Schema({
    autor: {type:String,required:true},
    mensaje: {type:String,required:true},
    fecha: {type:Date,required:true}
});
model = mongoose.model('comments',modelSchemaC,'comments');
module.exports = model;
