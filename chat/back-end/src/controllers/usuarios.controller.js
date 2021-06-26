const Usuario = require("../modelos/Usuario");

var bcrypt = require("bcryptjs");

exports.signup =async (req, res) => {
    const usuario = new Usuario({
        nombre: req.body.nombre,
        password: bcrypt.hashSync(req.body.password, 8)
    });

    await usuario.save((err, usuario) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }else{
            return res.json(usuario);
        }
    });
};

exports.signin = async (req, res) => {
    await Usuario.findOne({
        nombre: req.body.nombre
    })        
        .exec((err, usuario) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!usuario) {
                return res.status(404).send({ message: "Usuario no encontrado." });
            }

           let passwordIsValid = bcrypt.compareSync(
                req.body.password,
                usuario.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Password no correcto!"
                });
            }

                res.status(200).send({
                id: usuario._id,
                nombre: usuario.nombre
            });
        });
};

exports.getUsuarios =async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);   
};

exports.getUsuario =async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
};