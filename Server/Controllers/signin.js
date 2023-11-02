const { sign } = require("jsonwebtoken");

const signin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.send({ message: "Wrong credentials", status: 401 });
  } else {
    const generatedToken = sign(
      JSON.stringify(req.user),
      "<9~xVC;S%ZasbU`zw@#1@4E6n£$Kq"
    );
    res.status(200).send({
      access_token: generatedToken,
      message: "Successfuly authenticated",
    });
  }
};

module.exports = { signin };
