const express = require("express");
const router = express.Router();
const bootcampController = require("../controllers/bootcamp.controller.js");
const verificarToken = require("../middlewares/verificacionToken.js");

//RUTAS CREAR BOOTCAMP
router.post("/", verificarToken, bootcampController.createBootcamp);

//RUTA ELIMINAR BOOTCAMP
router.delete("/:id", verificarToken, bootcampController.deleteBootcampById);

//RUTAS ACTUALIZAR BOOTCAMP
router.put("/", verificarToken, bootcampController.updateBootcampById);

//RUTA PARA MATRICULAR ALUMNOS A UN BOOTCAMP
router.post("/matricular", verificarToken, bootcampController.addUser);

module.exports = router;
