const { Router } = require("express");
const userRouter = require("../routes/user.route");

const routes = Router();

routes.use("/api/v1/users", userRouter);

module.exports = routes;
