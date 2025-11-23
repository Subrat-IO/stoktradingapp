const { model } = require("mongoose");
const { PositionSchema } = require("../schemas/PositionSchema.js");

const PositionModel = model("Position", PositionSchema);

module.exports = PositionModel;
    