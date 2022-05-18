const mongoose = require('mongoose');
var Schema = mongoose.Schema; //Variable de esquema

//Crear variable
var equiposSchema = Schema({
    nombreEquipo: String,
    patrocinador: String,
    nombreEstadio: String,
    idAdmin: { type: Schema.Types.ObjectId, ref: 'Usuarios' } //Referencia a model Usuarios
})

module.exports = mongoose.model('Equipos', equiposSchema);