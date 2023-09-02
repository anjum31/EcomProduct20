const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    firstName: {
      type:String,
      trim: true,
      required: true,
    },
    lastName: {
      type:String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    address: {
      type:String,
      trim: true,
    },
    phoneNumber: {
      type:String,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);

DataSchema.virtual('cartItems', {
    ref: 'cart',
    localField: '_id',
    foreignField: 'user',
  });
  

  DataSchema.virtual('orders', {
    ref: 'order',
    localField: '_id',
    foreignField: 'user',
  });
  
 
  DataSchema.pre('remove', async function (next) {
    await this.model('cart').deleteMany({ user: this._id });
    await this.model('order').deleteMany({ user: this._id });
    next();
  });

const userModel = mongoose.model("user", DataSchema);
module.exports = userModel;
