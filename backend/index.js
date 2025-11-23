const express = require("express");
const mongoose = require("mongoose");
const HoldingModel = require("./models/HoldingModel.js");
const PositionModel = require("./models/PositionModel.js");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const PORT = process.env.PORT;
const uri = process.env.MONGO_URI;

app.get("/allholdings", async (req, res) => {
  const allHoldings = await HoldingModel.find({});
  res.json(allHoldings);
});

app.get("/allpositions", async (req, res) => {
  const allPosition = await PositionModel.find({});
  res.json(allPosition);
});

const startServer = async () => {
  try {
    await mongoose.connect(uri, {});
    console.log("db connected");

    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("db connection failed:", error.message);
  }
};

startServer();
