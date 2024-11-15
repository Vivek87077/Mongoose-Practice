import mongoose from "mongoose";
import { Category } from "./category.models";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    productImage: {
      type: String
    },
    price: {
      type: Number,
      default: 0
    },
    stock: {
      type: Number,
      default: 0
    },
    Category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  }, {timestamps: true}
)

export const Product = mongoose.model("Product", productSchema);