const { Router } = require("express");
const userRouter = require("./user.route");
const accountRouter = require("./account.route");
const transactionRouter = require("./transaction.route");

const routes = Router();

routes.use("/api/v1/users", userRouter);
routes.use("/api/v1/accounts", accountRouter);
routes.use("/api/v1/transactions", transactionRouter);

module.exports = routes;
