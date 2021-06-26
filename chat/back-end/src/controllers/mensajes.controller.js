const Mensaje = require('../modelos/Mensaje');

exports.setMensaje = async (req, res) => {
    let mensajeRec = req.body.mensaje;
    let id_userRec = req.body.id_user;
    // guardar en bbdd
    const guardaMensaje = new Mensaje({
        texto: mensajeRec,
        id_user: id_userRec
    });
    await guardaMensaje.save();
    return res.json(guardaMensaje);
};

exports.getMensajes = async (req, res) => {
    const mensajes = await Mensaje.find();
    res.json(mensajes);
};

exports.limpiarMensajes = async (req, res) => {
    const mensajes = await Mensaje.deleteMany();
    res.json(mensajes);
};