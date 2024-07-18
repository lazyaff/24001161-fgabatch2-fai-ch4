const { Router } = require("express");
const userRouter = require("../routes/user.route");
const accountRouter = require("../routes/account.route");

const routes = Router();

routes.use("/api/v1/users", userRouter);
routes.use("/api/v1/accounts", accountRouter);

module.exports = routes;
