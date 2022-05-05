const mongoose = require('mongoose');
const Ligas = require('../models/ligas.model');
//const Admin = require('../models/usuario.model');

function obtenerLigas(req, res) {
    Ligas.find({}, (err, ligasEncontrados) => {

        return res.send({ ligas: ligasEncontrados })
    })
}


function agregarLigas(req, res) {
    const parametros = req.body; //Obtener todos lo parametros de postman body
    const modeloLigas = new Ligas();

    if (parametros.nombreLiga) {
        modeloLigas.nombreLiga = parametros.nombreLiga;
        modeloLigas.cantidadEquipos = parametros.cantidadEquipos;
        //modeloLigas.idAdmin = req.user.sub; // El id del Admin viene en el token

        modeloLigas.save((err, ligaGuardado) => { //Almacenar a la base de datos
            //Verificaciones
            if (err) return res.status(500).send({ mensaje: 'Error en la peticion ' });
            if (!ligaGuardado) return res.status(500).send({ mensaje: 'Error al agregar la liga' }); //Si no trae nada
            //Verificaciones

            return res.status(200).send({ ligas: ligaGuardado });
        })
    } else {
        return res.status(500).send({ mensaje: "Debe enviar los parámetros obligatorios." })
    }
}


module.exports = {
    obtenerLigas,
    agregarLigas
}