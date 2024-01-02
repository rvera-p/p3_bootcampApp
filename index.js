const app = require("./app/server.js");
const sequelize = require("./app/database/config.js");

//IMPORTAR MODELOS
let { User, Bootcamp, Admin } = require("./app/models/index.js");

const main = async () => {
  console.log("Iniciando proyecto");
  await sequelize.sync({ force: true, alter: true });

  //CREAR USUARIOS INICIALES
  await User.create({
    firstName: "Mateo",
    lastName: "Díaz",
    email: "mateo.diaz@correo.com",
  });
  await User.create({
    firstName: "Santiago",
    lastName: "Mejías",
    email: "santiago.mejias@correo.com",
  });
  await User.create({
    firstName: "Lucas",
    lastName: "Rojas",
    email: "lucas.rojas@correo.com",
  });
  await User.create({
    firstName: "Facundo",
    lastName: "Fernandez",
    email: "facundo.fernandez@correo.com",
  });

  //CREAR BOOTCAMPS INICIALES
  await Bootcamp.create({
    title: "Introduciendo El Bootcamp De React.",
    cue: 10,
    description:
      "React es la librería más usada en JavaScript para el desarrollo de interfaces.",
  });

  await Bootcamp.create({
    title: "Bootcamp Desarrollo Web Full Stack.",
    cue: 10,
    description:
      "Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS.",
  });

  await Bootcamp.create({
    title: "Bootcamp Big Data, Inteligencia Artificial & Machine Learning.",
    cue: 10,
    description:
      "Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados  de Artificial Intelligence y Machine Learning.",
  });

  //CREAR ADMIN DE PRUEBA
  await Admin.create({
    email: "admin1@gmail.com",
    password: "123456",
  });
  await Admin.create({
    email: "admin2@gmail.com",
    password: "123456",
  });

  app.listen(3000, () => console.log("escuchando en http://localhost:3000."));
};

main();
