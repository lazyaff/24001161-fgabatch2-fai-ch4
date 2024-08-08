const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const routes = require("./routes");
const setupSwagger = require("./utils/swagger");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(routes);

// set up swagger
setupSwagger(app);

// start server
dotenv.config();
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
