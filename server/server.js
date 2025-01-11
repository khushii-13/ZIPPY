const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/authRoutes");
const mongoose = require("mongoose");

const app = express();
dotenv.config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", authRoute);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("DB is connected!!");
    app.listen(PORT, () => {
      console.log(`Server is listening on http://${HOST}:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
