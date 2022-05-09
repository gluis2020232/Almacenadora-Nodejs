//  IMPORTACIONES
const express = require('express');
const controladorTorneo = require('../controllers/torneos.controllers')

// MIDDLEWARES
const md_autenticacion = require('../middlewares/autenticacion');
const md_roles = require('../middlewares/roles')

//RUTAS
const api = express.Router();

//api.get('/obtenerProductos', [md_autenticacion.Auth, md_roles.verAdminVisua], controladorProducto.obtenerProductos);
api.get('/verTorneos', [md_autenticacion.Auth, md_roles.verAdmin], controladorTorneo.obtenerTorneos);
api.post('/agregarTorneo', [md_autenticacion.Auth, md_roles.addAdmin], controladorTorneo.agregarTorneos);
api.put('/editarTorneo/:idTorneo', [md_autenticacion.Auth, md_roles.EditAdmin], controladorTorneo.editarTorneos);
api.delete('/eliminarTorneo/:idTorneo', [md_autenticacion.Auth, md_roles.deleteAdmin], controladorTorneo.eliminarTorneos);

module.exports = api;