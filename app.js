const express = require("express");
const feedRoutes = require("./routes/feed");
require("dotenv").config();

const app = express();

app.use("/feed", feedRoutes);

app.listen(process.env.PORT);
