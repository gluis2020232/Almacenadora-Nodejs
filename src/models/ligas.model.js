const mongoose = require('mongoose');
var Schema = mongoose.Schema; //Variable de esquema

//Crear variable
var ligasSchema = Schema({
    nombreLiga: String,
    proveedor: String,
    precio: String,
    idAdmin: { type: Schema.Types.ObjectId, ref: 'Usuarios' } //Referencia a model Usuarios
})

module.exports = mongoose.model('Ligas', ligasSchema);