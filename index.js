require("dotenv").config();
const express = require("express");
const { resolve } = require("path");
const connectDB = require("./config/database");
const userController = require("./controllers/userController");

const app = express();
const port = 3010;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.static("static"));

// Routes
app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

// API Routes
app.post("/api/users/register", userController.registerUser);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
