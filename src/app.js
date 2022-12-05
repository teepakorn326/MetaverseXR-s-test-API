// const { sequelize } = require("./models");
// sequelize.sync({ force: true });

const express = require("express");
const cors = require("cors");
const listRoute = require("./routes/listRoute");

const error = require("./middleware/error");
const notFound = require("./middleware/notFound");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/pokemon", listRoute);
app.use(error);
app.use(notFound);

const port = 3005;
app.listen(port, () => console.log(`server running on port : ${port}`));
