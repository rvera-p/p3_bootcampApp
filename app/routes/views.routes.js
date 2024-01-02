const express = require("express");
const router = express.Router();
const viewController = require("../controllers/views.controllers.js");
const verificarToken = require("../middlewares/verificacionToken.js");

//RUTAS DE VISTAS
router.get(["/", "/home"], viewController.viewHome);
router.get(["/users", "/usuarios"], verificarToken, viewController.viewUsers);
router.get("/users/details/:id", verificarToken, viewController.detailsUser);

router.get("/bootcamps", viewController.viewBootcamps);
router.get("/matriculas", verificarToken, viewController.viewMatriculas);

//vista login de usuarios administradores
router.get("/login", viewController.viewLogin);

module.exports = router;
