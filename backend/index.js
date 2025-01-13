const fs = require("fs/promises");
const path = require("path");
const express = require("express");

const app = express();

app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/meals", async (req, res) => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, "data", "meals.json"),
      "utf-8"
    );
    const meals = JSON.parse(data);
    res.json(meals);
  } catch (err) {
    res.status(500).json({ message: "Failed to load meals." });
  }
});

app.listen(3001, () => {
  console.log("Backend server is running on http://localhost:3001");
});
