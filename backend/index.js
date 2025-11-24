const express = require("express");
const mongoose = require("mongoose");
const HoldingModel = require("./models/HoldingModel.js");
const PositionModel = require("./models/PositionModel.js");
const cors = require("cors");
const orderModel = require("./models/OrderModel.js")

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
  const allPosition = await PositionModel.find({
    name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:String,
  });
  res.json(allPosition);
});


app.post("/neworder", async(req,res)=>{
  let neworder = new orderModel({});
  neworder.save();

  res.send("new order saved");
})

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
