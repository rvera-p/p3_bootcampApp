const { User, Bootcamp } = require("../models/index.js");

const viewHome = (req, res) => {
  res.render("home");
};

const viewUsers = async (req, res) => {
  let autenticado = req.autenticado;
  let token = req.token;
  let usuarios = await User.findAll({
    raw: true,
  });
  res.render("users", {
    usuarios,
    autenticado,
    token,
  });
};

const viewBootcamps = async (req, res) => {
  let bootcamps = await Bootcamp.findAll({
    include: {
      model: User,
    },
    order: [["id", "asc"]],
  });

  bootcamps = JSON.parse(JSON.stringify(bootcamps));

  bootcamps = bootcamps.map((bootcamp) => {
    bootcamp.cantidadAlumnos = bootcamp.Users.length;
    return bootcamp;
  });

  console.log(bootcamps);

  res.render("bootcamps", {
    bootcamps,
  });
};

const viewMatriculas = async (req, res) => {
  let usuarios = await User.findAll({
    raw: true,
  });

  let bootcamps = await Bootcamp.findAll({
    raw: true,
  });

  res.render("matriculas", {
    usuarios,
    bootcamps,
  });
};

const detailsUser = async (req, res) => {
  let { id } = req.params;
  let autenticado = req.autenticado;
  let usuario = await User.findByPk(id, {
    raw: true,
  });

  res.render("detalleUsuario", {
    usuario,
    autenticado,
  });
};

const viewLogin = async (req, res) => {
  res.render("login");
};

module.exports = {
  viewHome,
  viewUsers,
  viewBootcamps,
  viewMatriculas,
  detailsUser,
  viewLogin,
};
