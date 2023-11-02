const express = require("express");
const passport = require("passport");
const app = express();
const PORT = 4000;
const cookieParser = require("cookie-parser");

const session = require("express-session");
const { db } = require("./Config/dataBase");
const { authRouter } = require("./Routes/Auth");

db();
app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET ?? "esdfnsdt345" }));

app.use(passport.initialize());
app.use(passport.session());

require("../Server/Config/passport");

app.use("/auth", authRouter);

app.use((req, res, next) => {
  console.log(req.path);
  res.status(400).send({ message: "Bad Request" });
});

app.listen(PORT, () => console.log("Server listening on port: ", PORT));
