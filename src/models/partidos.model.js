const mongoose = require('mongoose');
var Schema = mongoose.Schema; //Variable de esquema

//Crear variable
var partidosSchema = Schema({
    equipoLocal: String,
    equipoVisitante: String,
    idAdmin: { type: Schema.Types.ObjectId, ref: 'Usuarios' } //Referencia a model Usuarios
})

module.exports = mongoose.model('Partidos', partidosSchema);