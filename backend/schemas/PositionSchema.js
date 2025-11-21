const { Schema } = require("mongoose");

const PositionSchema = new Schema({
  product: { type: String },
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  avg: { type: Number },
  price: { type: Number },
  net: { type: String },
  day: { type: String },
  isLoss: { type: Boolean, default: false },
});

module.exports = { PositionSchema };
