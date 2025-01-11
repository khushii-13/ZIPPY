const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
});
