const { Router } = require('express');
const router = Router();
const controller = require("../controllers/mensajes.controller");

router.post("/set", controller.setMensaje);
router.get("/", controller.getMensajes);
router.get("/drop", controller.limpiarMensajes);

module.exports = router;