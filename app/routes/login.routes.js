const express = require('express');
const router = express.Router();
const loginController = require("../controllers/login.controllers.js");


//RUTAS CREAR USUARIOS
router.post("/", loginController.login);

module.exports = router;