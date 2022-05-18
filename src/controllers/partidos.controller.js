const mongoose = require('mongoose');
const Partidos = require('../models/partidos.model');
//const Admin = require('../models/usuario.model');

function obtenerPartidos(req, res) {
    Partidos.find({}, (err, partidosEncontrados) => {

        return res.send({ partidos: partidosEncontrados })
    })
}


function agregarPartido(req, res) {
    const parametros = req.body; //Obtener todos lo parametros de postman body
    const modeloPartidos = new Partidos();

    if (parametros.equipoLocal, parametros.equipoVisitante) {
        modeloPartidos.equipoLocal = parametros.equipoLocal;
        modeloPartidos.equipoVisitante = parametros.equipoVisitante;
        //modeloLigas.idAdmin = req.user.sub; // El id del Admin viene en el token

        modeloPartidos.save((err, partidoGuardado) => { //Almacenar a la base de datos
            //Verificaciones
            if (err) return res.status(500).send({ mensaje: 'Error en la peticion ' });
            if (!partidoGuardado) return res.status(500).send({ mensaje: 'Error al agregar un partido' }); //Si no trae nada
            //Verificaciones

            return res.status(200).send({ partidos: partidoGuardado });
        })
    } else {
        return res.status(500).send({ mensaje: "Debe enviar los parámetros obligatorios." })
    }
}



function editarPartido(req, res) {
    var idPartid = req.params.idPartido; //Obtener el valor de la variable en ruta
    var parametros = req.body; //Obtener los los parámetros en el body

    Partidos.findByIdAndUpdate(idPartid, parametros, { new: true }, (err, partidoEditado) => {

        //Verificaciones
        if (err) return res.status(500).send({ mensaje: 'Error en la peticion' });
        if (!partidoEditado) return res.status(404).send({ mensaje: 'Error al Editar el partido' });
        //Verificaciones

        return res.status(200).send({ partidos: partidoEditado });
    })
}


function eliminarPartido(req, res) {
    var idPartid = req.params.idPartido; //Obtener el valor de la variable en ruta

    Partidos.findByIdAndDelete(idPartid, (err, partidoEliminado) => {

        //Verificaciones
        if (err) return res.status(500).send({ mensaje: 'Error en la peticion' });
        if (!partidoEliminado) return res.status(500).send({ mensaje: 'Error al eliminar el partido' })
            //Verificaciones

        return res.status(200).send({ partidos: partidoEliminado });
    })
}

module.exports = {
    obtenerPartidos,
    agregarPartido,
    editarPartido,
    eliminarPartido
}