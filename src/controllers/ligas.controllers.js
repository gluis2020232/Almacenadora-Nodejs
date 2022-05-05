const mongoose = require('mongoose');
const Ligas = require('../models/ligas.model');

function obtenerLigas(req, res) {
    Ligas.find({}, (err, ligasEncontrados) => {

        return res.send({ ligas: ligasEncontrados })
    })
}




module.exports = {
    obtenerLigas
}