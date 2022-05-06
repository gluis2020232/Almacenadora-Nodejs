//------------Si no es rol ADMIN no lo deja visualizar----------------
exports.verAdmin = function(req, res, next) {
    if (req.user.rol !== "ADMIN") return res.status(403).send({ mensaje: "Solo el Administrador puede visualizar" })

    next();
}

//Si no es de ROL_CLIENTE no lo deja visualizar
exports.verCliente = function(req, res, next) {
    if (req.user.rol !== "ROL_CLIENTE") return res.status(403).send({ mensaje: "Solo el cliente puedes visualizar" })

    next();
}

//----------------Si no es de rol ADMIN no lo dejo agregar-------------
exports.addAdmin = function(req, res, next) {
    if (req.user.rol !== "ADMIN") return res.status(403).send({ mensaje: "Solo puede agregar el Administrador" })

    next();
}

//Si no es de ROL_CLIENTE no lo dejo agregar
exports.addCliente = function(req, res, next) {
    if (req.user.rol !== "ROL_CLIENTE") return res.status(403).send({ mensaje: "Solo puede agregar el Cliente" })

    next();
}

//------------Si no es rol ADMIN no lo deja editar--------------------
exports.EditAdmin = function(req, res, next) {
    if (req.user.rol !== "ADMIN") return res.status(403).send({ mensaje: "Solo puede editar el Administrador" })

    next();
}

//Si no es de ROL_CLIENTE no lo dejo editar
exports.EditCliente = function(req, res, next) {
    if (req.user.rol !== "ROL_CLIENTE") return res.status(403).send({ mensaje: "Solo puede editar el Cliente" })

    next();
}

//-------------Si no es rol ADMIN no lo deja eliminar----------------
exports.deleteAdmin = function(req, res, next) {
    if (req.user.rol !== "ADMIN") return res.status(403).send({ mensaje: "Solo puede eliminar el Administrador" })

    next();
}

//Si no es de ROL_CLIENTE no lo dejo eliminar
exports.deleteCliente = function(req, res, next) {
    if (req.user.rol !== "ROL_CLIENTE") return res.status(403).send({ mensaje: "Solo puede eliminar el Cliente" })

    next();
}