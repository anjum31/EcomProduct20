const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  name: {
    type: String,
      trim: true,
      required: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    trim: true,
    required: true,
    min: 0.01,
  },
  stock: {
    type: Number,
    trim: true,
    required: true,
    min: 0,
  },
  category: {
    type:String,
    trim: true,
    required: true,
  },
  imageURL: {
    type:String,
    trim: true,
  },
},{ timestamps: true, versionKey: false });

const productModel = mongoose.model("product", DataSchema);
module.exports = productModel;
