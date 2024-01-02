const { User } = require("../models/index");

const createUser = async (req, res) => {
  try {
    let { firstName, lastName, email } = req.body;

    let usuario = await User.create({ firstName, lastName, email });

    res.json({
      code: 201,
      message: "Usuario creado correctamente con ID: " + usuario.id,
    });
  } catch (error) {
    res
      .status(500)
      .json({ code: 500, message: "No se pudo crear el usuario." });
  }
};

const findUserById = async (req, res) => {
  //se incluye en la vista
};

const findAll = async (req, res) => {
  //se incluye en la vista
};

const updateUserById = async (req, res) => {
  try {
    let { id, firstName, lastName, email } = req.body;

    let usuario = await User.findByPk(id);

    if (!usuario) {
      return res.status(404).json({
        code: 404,
        message:
          "El usuario que intenta eliminar no existe o ya fue eliminado.",
      });
    }

    if (firstName) usuario.firstName = firstName;
    if (lastName) usuario.lastName = lastName;
    if (email) usuario.email = email;

    await usuario.save();

    res
      .status(201)
      .json({ code: 201, message: "Usuario actualizado correctamente." });
  } catch (error) {
    res
      .status(500)
      .json({ code: 500, message: "No se pudo  actualizar el usuario." });
  }
};

const deleteUserById = async (req, res) => {
  let { id } = req.params;
  try {
    let usuario = await User.findByPk(id);

    if (!usuario) {
      return res.status(404).json({
        code: 404,
        message:
          "El usuario que intenta eliminar no existe o ya fue eliminado.",
      });
    }

    await usuario.destroy();
    res.json({
      code: 200,
      message: `Usuario con ID: ${id} eliminado correctamente.`,
    });
  } catch (error) {
    res
      .status(500)
      .json({ code: 500, message: "No se pudo eliminar el usuario." });
  }
};

module.exports = {
  createUser,
  findUserById,
  findAll,
  updateUserById,
  deleteUserById,
};
