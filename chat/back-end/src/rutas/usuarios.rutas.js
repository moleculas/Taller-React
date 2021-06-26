const { Router } = require('express');
const router = Router();
const  verifySignUp  = require("../middlewares/verifySignUp");
const controller = require("../controllers/usuarios.controller");

router.post("/signup", [verifySignUp.checkDuplicadoNombre], controller.signup);
router.post("/signin", controller.signin);
router.get("/", controller.getUsuarios);
router.get("/usuario/:id", controller.getUsuario);

module.exports = router;