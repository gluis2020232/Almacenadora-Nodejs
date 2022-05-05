//  IMPORTACIONES
const express = require('express');
const controladorLiga = require('../controllers/ligas.controllers')

// MIDDLEWARES
const md_autenticacion = require('../middlewares/autenticacion');
const md_roles = require('../middlewares/roles')

//RUTAS
const api = express.Router();

//api.get('/obtenerProductos', [md_autenticacion.Auth, md_roles.verAdminVisua], controladorProducto.obtenerProductos);
api.get('/verLigas', controladorLiga.obtenerLigas);
api.post('/agregarLiga', controladorLiga.agregarLigas);
api.put('/editarLiga/:idLiga', controladorLiga.editarLigas);
api.delete('/eliminarLiga/:idLiga', controladorLiga.eliminarLigas);

module.exports = api;