//  IMPORTACIONES
const express = require('express');
const controladorPartido = require('../controllers/partidos.controller')

// MIDDLEWARES
const md_autenticacion = require('../middlewares/autenticacion');
const md_roles = require('../middlewares/roles')

//RUTAS
const api = express.Router();

//api.get('/obtenerProductos', [md_autenticacion.Auth, md_roles.verAdminVisua], controladorProducto.obtenerProductos);
api.get('/verPartidos', [md_autenticacion.Auth, md_roles.verCliente], controladorPartido.obtenerPartidos);
api.post('/agregarPartido', [md_autenticacion.Auth, md_roles.addCliente], controladorPartido.agregarPartido);
api.put('/editarPartido/:idPartido', [md_autenticacion.Auth, md_roles.EditCliente], controladorPartido.editarPartido);
api.delete('/eliminarPartido/:idPartido', [md_autenticacion.Auth, md_roles.deleteCliente], controladorPartido.eliminarPartido);

module.exports = api;