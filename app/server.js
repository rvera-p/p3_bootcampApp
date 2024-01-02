const express = require("express");
const { create } = require("express-handlebars");
const path = require("path");

//importación de rutas
const viewRoutes = require("./routes/views.routes.js");
const userRoutes = require("./routes/user.routes.js");
const bootcampRoutes = require("./routes/bootcamp.routes.js");
const loginRoutes = require("./routes/login.routes.js");

const app = express();

//MIDDLEWARES GENERALES
app.use(express.json());

// INICIO CONFIGURACIÓN HANDLEBARS
const hbs = create({
  partialsDir: [path.resolve(__dirname, "./views/partials/")],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));
//FIN CONFIGUCACIÓN HANDLEBARS

//INCLUIR RUTAS A LA APP -> vistas
app.use("/", viewRoutes);

//INCLUIR RUTAS A LA APP -> endpoints
app.use("/api/users", userRoutes);
app.use("/api/bootcamps", bootcampRoutes);
app.use("/api/login", loginRoutes);

module.exports = app;
