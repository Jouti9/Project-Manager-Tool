const { Router } = require("express");

const passport = require("passport");
const { signin } = require("../Controllers/signin");

const authRouter = Router();

authRouter.post("/sigin", passport.authenticate("local"), signin);

module.exports = { authRouter };
