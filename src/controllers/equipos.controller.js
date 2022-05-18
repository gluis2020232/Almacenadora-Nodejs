const mongoose = require('mongoose');
const Equipos = require('../models/equipos.model');
//const Admin = require('../models/usuario.model');

function obtenerEquipos(req, res) {
    Equipos.find({}, (err, equiposEncontrados) => {

        return res.send({ equipos: equiposEncontrados })
    })
}


function agregarEquipo(req, res) {
    const parametros = req.body; //Obtener todos lo parametros de postman body
    const modeloEquipos = new Equipos();

    if (parametros.nombreEquipo) {
        modeloEquipos.nombreEquipo = parametros.nombreEquipo;
        modeloEquipos.patrocinador = parametros.patrocinador;
        modeloEquipos.nombreEstadio = parametros.nombreEstadio;
        //modeloLigas.idAdmin = req.user.sub; // El id del Admin viene en el token

        modeloEquipos.save((err, equipoGuardado) => { //Almacenar a la base de datos
            //Verificaciones
            if (err) return res.status(500).send({ mensaje: 'Error en la peticion ' });
            if (!equipoGuardado) return res.status(500).send({ mensaje: 'Error al agregar un equipo' }); //Si no trae nada
            //Verificaciones

            return res.status(200).send({ ligas: equipoGuardado });
        })
    } else {
        return res.status(500).send({ mensaje: "Debe enviar los parámetros obligatorios." })
    }
}



function editarEquipo(req, res) {
    var idEqui = req.params.idEquipo; //Obtener el valor de la variable en ruta
    var parametros = req.body; //Obtener los los parámetros en el body

    Equipos.findByIdAndUpdate(idEqui, parametros, { new: true }, (err, equipoEditado) => {

        //Verificaciones
        if (err) return res.status(500).send({ mensaje: 'Error en la peticion' });
        if (!equipoEditado) return res.status(404).send({ mensaje: 'Error al Editar el equipo' });
        //Verificaciones

        return res.status(200).send({ ligas: equipoEditado });
    })
}


function eliminarEquipo(req, res) {
    var idEqui = req.params.idEquipo; //Obtener el valor de la variable en ruta

    Equipos.findByIdAndDelete(idEqui, (err, equipoEliminado) => {

        //Verificaciones
        if (err) return res.status(500).send({ mensaje: 'Error en la peticion' });
        if (!equipoEliminado) return res.status(500).send({ mensaje: 'Error al eliminar el equipo' })
            //Verificaciones

        return res.status(200).send({ producto: equipoEliminado });
    })
}

module.exports = {
    obtenerEquipos,
    agregarEquipo,
    editarEquipo,
    eliminarEquipo
}