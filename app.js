const express = require("express");
const feedRoutes = require("./routes/feed");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "Options, Post, Get, Put, Patch, Delete"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});

app.use("/feed", feedRoutes);

mongoose
  .connect(process.env.DB_URL)
  .then((result) => {
    app.listen(process.env.PORT);
  })
  .catch((err) => console.log(err));
