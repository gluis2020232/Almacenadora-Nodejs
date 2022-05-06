//  IMPORTACIONES
const express = require('express');
const controladorLiga = require('../controllers/ligas.controllers')

// MIDDLEWARES
const md_autenticacion = require('../middlewares/autenticacion');
const md_roles = require('../middlewares/roles')

//RUTAS
const api = express.Router();

//api.get('/obtenerProductos', [md_autenticacion.Auth, md_roles.verAdminVisua], controladorProducto.obtenerProductos);
api.get('/verLigas', [md_autenticacion.Auth, md_roles.verCliente], controladorLiga.obtenerLigas);
api.post('/agregarLiga', [md_autenticacion.Auth, md_roles.addCliente], controladorLiga.agregarLigas);
api.put('/editarLiga/:idLiga', [md_autenticacion.Auth, md_roles.EditCliente], controladorLiga.editarLigas);
api.delete('/eliminarLiga/:idLiga', [md_autenticacion.Auth, md_roles.deleteCliente], controladorLiga.eliminarLigas);

module.exports = api;