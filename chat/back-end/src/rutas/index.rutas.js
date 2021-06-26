const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    msg: "Bienvenido a la api chat v0.1",
  });
});

module.exports = router;