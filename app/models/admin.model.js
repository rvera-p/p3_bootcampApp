const { DataTypes } = require("sequelize");
const sequelize = require("../database/config.js");

const Admin = sequelize.define(
  "Admin",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      llowNull: false,
    },
  },
  {
    tableName: "Administrador",
    timestamps: false,
  }
);

module.exports = Admin;
