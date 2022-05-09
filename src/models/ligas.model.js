const mongoose = require('mongoose');
var Schema = mongoose.Schema; //Variable de esquema

//Crear variable
var ligasSchema = Schema({
    nombreLiga: String,
    cantidadEquipos: Number
})

module.exports = mongoose.model('Ligas', ligasSchema);