const Usuario = require("../modelos/Usuario");

checkDuplicadoNombre = (req, res, next) => {

  Usuario.findOne({
    nombre: req.body.nombre
  }).exec((err, usuario) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (usuario) {
      res.status(400).send({ message: "Fallo! El nombre ya está en uso." });
      return;
    }
    next();    
  });
};

const verifySignUp = {
    checkDuplicadoNombre
};

module.exports = verifySignUp;