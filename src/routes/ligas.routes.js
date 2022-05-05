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
api.post('/agregarLigas', controladorLiga.agregarLigas);
api.put('/editarLiga/:idLiga', controladorLiga.editarLigas);

module.exports = api;