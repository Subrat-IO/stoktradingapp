const express = require("express");
const mongoose = require("mongoose");
const { HoldingsModel } = require("./models/HoldingModel");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

const uri = process.env.MONGO_URI;

app.get("/addHoldings", (req, res) => {
  let tempHoldings = [
    {
      name: "BHARTIARTL",
      qty: 2,
      avg: 538.05,
      price: 541.15,
      net: "+0.58%",
      day: "+2.99%",
    },
    {
      name: "HDFCBANK",
      qty: 2,
      avg: 1383.4,
      price: 1522.35,
      net: "+10.04%",
      day: "+0.11%",
    },
    {
      name: "HINDUNILVR",
      qty: 1,
      avg: 2335.85,
      price: 2417.4,
      net: "+3.49%",
      day: "+0.21%",
    },
    {
      name: "INFY",
      qty: 1,
      avg: 1350.5,
      price: 1555.45,
      net: "+15.18%",
      day: "-1.60%",
      isLoss: true,
    },
    {
      name: "ITC",
      qty: 5,
      avg: 202.0,
      price: 207.9,
      net: "+2.92%",
      day: "+0.80%",
    },
  ];

  tempHoldings.forEach((item) => {
    let newHolding = new HoldingsModel({
      name: { String },
      qty: { Number },
      avg: { Number },
      price: Number,
      net: String,
      day: String,
    });
  });
});

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
    await mongoose.connect(uri, {});

    console.log("db connected");
  } catch (error) {
    console.log("db connection failed:", error.message);
  }
};

startServer();
