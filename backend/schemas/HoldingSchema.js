const { Schema } = require("mongoose");

const HoldingSchema = new Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },

  // Always exist and safe
  avg: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true, default: 0 },

  net: { type: String, default: "0" },
  day: { type: String, default: "0" },

  isLoss: { type: Boolean, default: false },
});

module.exports = { HoldingSchema };
