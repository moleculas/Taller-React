const express = require("express");
const cors = require('cors');

const app = express();

// settings
app.set('port', process.env.PORT || 4000)
app.use(cors());
app.use(express.json());

// rutas
app.use('/api', require('./rutas/index.rutas'));
app.use('/api/mensajes', require('./rutas/mensajes.rutas'));
app.use('/api/usuarios', require('./rutas/usuarios.rutas'));

module.exports= app