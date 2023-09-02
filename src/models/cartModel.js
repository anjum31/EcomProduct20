const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    trim: true,
    ref: "user",
    required: true,
  },
  product: {
    type: Schema.Types.ObjectId,
    trim: true,
    ref: "product",
    required: true,
  },
  quantity: {
    type: Number,
    trim: true,
    required: true,
    min: 1,
  },
},{ timestamps: true, versionKey: false });

const cartModel = mongoose.model("cart", DataSchema);

module.exports = cartModel;
