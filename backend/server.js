const express = require("express");
const adminRoutes = require("./routes/adminRoutes");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const artworkRoutes = require("./routes/artworkRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes);
app.use("/api/artworks", artworkRoutes);

app.get("/", (req, res) => {
  res.send("Art Portfolio API is running");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error.message);
  });

module.exports = app;