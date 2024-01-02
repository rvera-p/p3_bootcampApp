const jwt = require("jsonwebtoken");

const verificarToken = async (req, res, next) => {
  try {
    let token = req.query.token;
    if (token) {
      let decoded = jwt.verify(token, "secreto");
      console.log(decoded);
      req.autenticado = true;
      req.token = token;
      return next();
    } else {
      let bearerToken = req.headers.authorization;
      if (!bearerToken) {
        if (!req.baseUrl.includes("api")) {
          req.autenticado = false;
          return next();
        }
      }
      token = bearerToken.split(" ")[1];
      console.log(token);
      if (token) {
        let decoded = jwt.verify(token, "secreto");
        console.log(decoded);
        req.autenticado = true;
        req.token = token;
        return next();
      }
    }

    return res
      .status(401)
      .json({ code: 401, message: "Debe proporcionar token." });
  } catch (error) {
    console.log(error);
    if (error.message == "jwt expired") {
      return res
        .status(401)
        .json({
          code: 401,
          message:
            "Su sesión ha expirado, cierre su cuenta y vuelva a uniciar sesión",
          codeToken: 1,
        });
    }
    return res
      .status(401)
      .json({
        code: 401,
        message: "Error en proceso de validación de credencialdes",
      });
  }
};

module.exports = verificarToken;
