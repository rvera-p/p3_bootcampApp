const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");
const verificarToken = require("../middlewares/verificacionToken.js");

//RUTAS CREAR USUARIOS
router.post("/", verificarToken, userController.createUser);

//RUTA ELIMINAR USUARIO
router.delete("/:id", verificarToken, userController.deleteUserById);

//RUTAS ACTUALIZAR USUARIO
router.put("/", verificarToken, userController.updateUserById);

module.exports = router;
