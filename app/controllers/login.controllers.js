const Admin = require("../models/admin.model");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  let { email, password } = req.body;

  let administrador = await Admin.findOne({
    where: {
      email,
      password,
    },
    attributes: ["id", "email"],
  });

  if (!administrador) {
    return res
      .status(401)
      .json({ code: 401, message: "Credenciales inválidas." });
  }

  let minutosVigencia = 5;
  let token = jwt.sign(
    {
      data: administrador.toJSON(),
      exp: Math.floor(Date.now() / 1000) + minutosVigencia * 60,
    },
    "secreto"
  );

  res.json({ code: 200, message: "Login ok", token, administrador });
};

module.exports = {
  login,
};
