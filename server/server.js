const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const authRouter = require("./routes/authRouter");

const app = express();
dotenv.config();
const HOST = process.env.HOST;
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/v1/auth", authRouter);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("DB is Connected");
    app.listen(PORT, () => {
      console.log(`Server is running at http://${HOST}:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.status(200).send("Hello from Zippy");
});
