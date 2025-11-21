const { Schema } = require("mongoose");

const HoldingSchema = new Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  avg: { type: Number },
  price: { type: Number },
  net: { type: String },
  day: { type: String },
  isLoss: { type: Boolean, default: false }, // optional
});

module.exports = { HoldingSchema };
