//  IMPORTACIONES
const express = require('express');
const controladorJornada = require('../controllers/jornadas.controller');

// MIDDLEWARES
const md_autenticacion = require('../middlewares/autenticacion');
const md_roles = require('../middlewares/roles')

//RUTAS
const api = express.Router();

api.get('/verJornadas', [md_autenticacion.Auth, md_roles.verCliente], controladorJornada.obtenerJornadas);
api.post('/agregarJornada', [md_autenticacion.Auth, md_roles.addCliente], controladorJornada.agregarJornada);
api.put('/editarJornada/:idJornada', [md_autenticacion.Auth, md_roles.EditCliente], controladorJornada.editarJornada);
api.delete('/eliminarJornada/:idJornada', [md_autenticacion.Auth, md_roles.deleteCliente], controladorJornada.eliminarJornada);

module.exports = api;