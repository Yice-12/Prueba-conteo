import mongoose, { Schema } from "mongoose";

const productShema = new Schema({
  code: {
    type: Number,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  creation: {
    type: Date,
    default: Date.now,
  },
});

export const Product = mongoose.model("Product", productShema);
