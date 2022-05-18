const mongoose = require('mongoose');
var Schema = mongoose.Schema; //Variable de esquema

//Crear variable
var jornadasSchema = Schema({
    jornada: String,
    idAdmin: { type: Schema.Types.ObjectId, ref: 'Usuarios' } //Referencia a model Usuarios
})

module.exports = mongoose.model('Jornadas', jornadasSchema);