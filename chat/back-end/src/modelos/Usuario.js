const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema(
  {
    key: String,
    nombre: {
      type: String,
      required: true,
    },
    password: {
        type: String,
        required: true,
      }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//mongo creará una colección llamada usuarios
module.exports = model('Usuario', UsuarioSchema);