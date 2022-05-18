//  IMPORTACIONES
const express = require('express');
const controladorEquipo = require('../controllers/equipos.controller')

// MIDDLEWARES
const md_autenticacion = require('../middlewares/autenticacion');
const md_roles = require('../middlewares/roles')

//RUTAS
const api = express.Router();

//api.get('/obtenerProductos', [md_autenticacion.Auth, md_roles.verAdminVisua], controladorProducto.obtenerProductos);
api.get('/verEquipos', [md_autenticacion.Auth, md_roles.verCliente], controladorEquipo.obtenerEquipos);
api.post('/agregarEquipo', [md_autenticacion.Auth, md_roles.addCliente], controladorEquipo.agregarEquipo);
api.put('/editarEquipo/:idEquipo', [md_autenticacion.Auth, md_roles.EditCliente], controladorEquipo.editarEquipo);
api.delete('/eliminarEquipo/:idEquipo', [md_autenticacion.Auth, md_roles.deleteCliente], controladorEquipo.eliminarEquipo);

module.exports = api;