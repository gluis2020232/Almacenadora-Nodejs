const mongoose = require('mongoose');
const Torneos = require('../models/torneos.model');
//const Admin = require('../models/usuario.model');

function obtenerTorneos(req, res) {
    Torneos.find({}, (err, torneosEncontrados) => {

        return res.send({ ligas: torneosEncontrados })
    })
}


function agregarTorneos(req, res) {
    const parametros = req.body; //Obtener todos lo parametros de postman body
    const modeloTorneos = new Torneos();

    if (parametros.nombreTorneo) {
        modeloTorneos.nombreTorneo = parametros.nombreTorneo;
        modeloTorneos.categorias = parametros.categorias;
        //modeloLigas.idAdmin = req.user.sub; // El id del Admin viene en el token

        modeloTorneos.save((err, torneoGuardado) => { //Almacenar a la base de datos
            //Verificaciones
            if (err) return res.status(500).send({ mensaje: 'Error en la peticion ' });
            if (!torneoGuardado) return res.status(500).send({ mensaje: 'Error al agregar el torneo' }); //Si no trae nada
            //Verificaciones

            return res.status(200).send({ ligas: torneoGuardado });
        })
    } else {
        return res.status(500).send({ mensaje: "Debe enviar los parámetros obligatorios." })
    }
}



function editarTorneos(req, res) {
    var idTorn = req.params.idTorneo; //Obtener el valor de la variable en ruta
    var parametros = req.body; //Obtener los los parámetros en el body

    Torneos.findByIdAndUpdate(idTorn, parametros, { new: true }, (err, torneoEditado) => {

        //Verificaciones
        if (err) return res.status(500).send({ mensaje: 'Error en la peticion' });
        if (!torneoEditado) return res.status(404).send({ mensaje: 'Error al Editar el torneo' });
        //Verificaciones

        return res.status(200).send({ ligas: torneoEditado });
    })
}


function eliminarTorneos(req, res) {
    var idTorn = req.params.idTorneo; //Obtener el valor de la variable en ruta

    Torneos.findByIdAndDelete(idTorn, (err, torneoEliminado) => {

        //Verificaciones
        if (err) return res.status(500).send({ mensaje: 'Error en la peticion' });
        if (!torneoEliminado) return res.status(500).send({ mensaje: 'Error al eliminar el torneo' })
            //Verificaciones

        return res.status(200).send({ producto: torneoEliminado });
    })
}

module.exports = {
    obtenerTorneos,
    agregarTorneos,
    editarTorneos,
    eliminarTorneos
}