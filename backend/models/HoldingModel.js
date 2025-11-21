const { Model, model } = require("mongoose");

const {HoldingSchema} = require('./../models/HoldingSchema');

const HoldingModel = new model("holding",HoldingSchema);


module.exports= HoldingModel
