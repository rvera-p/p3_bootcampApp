const { User, Bootcamp } = require("../models/index.js");

const createBootcamp = async (req, res) => {
  try {
    let { title, cue, description } = req.body;

    let bootcamp = await Bootcamp.create({ title, cue, description });

    res.json({
      code: 201,
      message: "Bootcamp creado correctamente con ID: " + bootcamp.id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ code: 500, message: "No se pudo crear el bootcamp." });
  }
};

const addUser = async (req, res) => {
  try {
    let { bootcamp_id, user_id } = req.body;

    console.log(req.body);

    //validar si existe el usuario
    let usuario = await User.findByPk(user_id);

    if (!usuario) {
      return res
        .status(404)
        .json({ code: 404, message: "El usuario indicado no existe." });
    }

    //validar si existe el boocamp

    let bootcamp = await Bootcamp.findByPk(bootcamp_id);

    if (!bootcamp) {
      return res
        .status(404)
        .json({ code: 404, message: "El bootcamp indicado no existe." });
    }

    await bootcamp.addUser(usuario);

    res
      .status(201)
      .json({ code: 201, message: "Usuario matriculado al bootcamp." });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      code: 500,
      message: "No se pudo matricular al alumno en el bootcamp.",
    });
  }
};

const findById = async (req, res) => {};

const findAll = async (req, res) => {};

const updateBootcampById = async (req, res) => {
  try {
    let { id, title, cue, description } = req.body;

    let bootcamp = await Bootcamp.findByPk(id);

    if (!bootcamp) {
      return res.status(404).json({
        code: 404,
        message:
          "El bootcamp que intenta eliminar no existe o ya fue eliminado.",
      });
    }

    if (title) bootcamp.title = title;
    if (cue) bootcamp.cue = cue;
    if (description) bootcamp.description = description;

    await bootcamp.save();

    res
      .status(201)
      .json({ code: 201, message: "Bootcamp actualizado correctamente." });
  } catch (error) {
    res
      .status(500)
      .json({ code: 500, message: "No se pudo  actualizar el bootcamp." });
  }
};

const deleteBootcampById = async (req, res) => {
  let { id } = req.params;
  try {
    let bootcamp = await Bootcamp.findByPk(id);

    if (!bootcamp) {
      return res.status(404).json({
        code: 404,
        message:
          "El bootcamp que intenta eliminar no existe o ya fue eliminado.",
      });
    }

    await bootcamp.destroy();
    res.json({
      code: 200,
      message: `Bootcamp con ID: ${id} eliminado correctamente.`,
    });
  } catch (error) {
    res
      .status(500)
      .json({ code: 500, message: "No se pudo eliminar el bootcamp." });
  }
};

module.exports = {
  createBootcamp,
  addUser,
  findById,
  findAll,
  updateBootcampById,
  deleteBootcampById,
};
