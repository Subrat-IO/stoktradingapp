const { Model, model } = require("mongoose");

const {OrderSchema} = require('./../model/OrderSchema');

const OrderModel = new model("holding",OrderSchema);


module.exports= OrderModel;
