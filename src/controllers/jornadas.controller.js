const mongoose = require('mongoose');
const Jornadas = require('../models/jornadas.model');
//const Admin = require('../models/usuario.model');

function obtenerJornadas(req, res) {
    Jornadas.find({}, (err, jornadasEncontrados) => {

        return res.send({ jornadas: jornadasEncontrados })
    })
}


function agregarJornada(req, res) {
    const parametros = req.body; //Obtener todos lo parametros de postman body
    const modeloJornada = new Jornadas();

    if (parametros.jornada) {
        modeloJornada.jornada = parametros.jornada;
        //modeloLigas.idAdmin = req.user.sub; // El id del Admin viene en el token

        modeloJornada.save((err, jornadaGuardado) => { //Almacenar a la base de datos
            //Verificaciones
            if (err) return res.status(500).send({ mensaje: 'Error en la peticion ' });
            if (!jornadaGuardado) return res.status(500).send({ mensaje: 'Error al agregar una jornada' }); //Si no trae nada
            //Verificaciones

            return res.status(200).send({ jornadas: jornadaGuardado });
        })
    } else {
        return res.status(500).send({ mensaje: "Debe enviar los parámetros obligatorios." })
    }
}


function editarJornada(req, res) {
    var idJorna = req.params.idJornada; //Obtener el valor de la variable en ruta
    var parametros = req.body; //Obtener los los parámetros en el body

    Jornadas.findByIdAndUpdate(idJorna, parametros, { new: true }, (err, jornadaEditado) => {

        //Verificaciones
        if (err) return res.status(500).send({ mensaje: 'Error en la peticion' });
        if (!jornadaEditado) return res.status(404).send({ mensaje: 'Error al Editar la jornada' });
        //Verificaciones

        return res.status(200).send({ jornadas: jornadaEditado });
    })
}


function eliminarJornada(req, res) {
    var idJorna = req.params.idJornada; //Obtener el valor de la variable en ruta

    Jornadas.findByIdAndDelete(idJorna, (err, jornadaEliminado) => {

        //Verificaciones
        if (err) return res.status(500).send({ mensaje: 'Error en la peticion' });
        if (!jornadaEliminado) return res.status(500).send({ mensaje: 'Error al eliminar la jornada' })
            //Verificaciones

        return res.status(200).send({ jornadas: jornadaEliminado });
    })
}

module.exports = {
    obtenerJornadas,
    agregarJornada,
    editarJornada,
    eliminarJornada
}