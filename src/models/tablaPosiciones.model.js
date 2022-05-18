const mongoose = require('mongoose');
var Schema = mongoose.Schema; //Variable de esquema

//Crear variable
var tablaPosicionesSchema = Schema({
    nombreEquipo: String,
    puntos: String,
    golesEncontra: String,
    golesAfavor: String,
    idAdmin: { type: Schema.Types.ObjectId, ref: 'Usuarios' } //Referencia a model Usuarios
})

module.exports = mongoose.model('TablaPosiciones', tablaPosicionesSchema);