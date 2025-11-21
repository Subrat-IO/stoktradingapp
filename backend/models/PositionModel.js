const { Model, model } = require("mongoose");

const {PostionSchema} = require('./../models/PositionSchema');

const PositionModel = new model("holding",PostionSchema);


module.exports= PositionModel;
