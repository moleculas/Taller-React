const { Schema, model } = require('mongoose');

const MensajeSchema = new Schema(
  {
    key: String,
    texto: {
      type: String,
      required: true,
    },
    id_user: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//mongo creará una colección llamada mensajes
module.exports = model('Mensaje', MensajeSchema);