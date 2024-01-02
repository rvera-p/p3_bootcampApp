const Bootcamp = require("./bootcamp.model.js");
const User = require("./user.model.js");
const Admin = require("./admin.model.js");

//RELACIÓN MUCHOS A MUCHOS ENTRE BOOTCAMPS Y USUARIOS

Bootcamp.belongsToMany(User, {
  through: "User_Bootcamp",
  foreignKey: "bootcamp_id",
  //as: "usuarios"
});
User.belongsToMany(Bootcamp, {
  through: "User_Bootcamp",
  foreignKey: "user_id",
  //as: "bootcamps"
});

module.exports = {
  User,
  Bootcamp,
  Admin,
};
