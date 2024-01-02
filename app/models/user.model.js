const { DataTypes } = require("sequelize");
const sequelize = require("../database/config.js");

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "El Campo del nombre es requerido",
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "El Campo del apellido es requerido",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "el correo electronico es requerido",
        },
        isEmail: {
          args: true,
          msg: "Formato de correo invalido",
        },
      },
      unique: {
        args: true,
        msg: "correo electronico actualmente registrado en la base de datos!",
      },
    },
  },
  { tableName: "User" }
);

module.exports = User;
