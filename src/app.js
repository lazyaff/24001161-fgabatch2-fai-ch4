const express = require("express");
const dotenv = require("dotenv");
const routes = require("./utils/routes");
const setupSwagger = require("./utils/swagger");

const app = express();

app.use(express.json());
app.use(routes);

// set up swagger
setupSwagger(app);

// start server
dotenv.config();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
