const mongoose=require ('mongoose');
const Schema = mongoose.Schema;

const DataSchema=new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        trim: true,
        required: true,
      },
      items: [
        {
          product: {
            type: Schema.Types.ObjectId,
            ref: 'product',
            trim: true,
            required: true,
          },
          quantity: {
            type: Number,
            trim: true,
            required: true,
            min: 1, 
          },
        },
      ],
      totalAmount: {
        type: Number,
        trim: true,
        required: true,
        min: 0.01, 
      },
      shippingAddress: {
        type: String,
        trim: true,
        required: true,
      },
      status: {
        type: String,
        trim: true,
        required: true,
        default: 'Pending',
      },
},{ timestamps: true, versionKey: false })


const orderModel=module.exports('order',DataSchema);