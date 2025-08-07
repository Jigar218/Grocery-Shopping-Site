import mongoose from "mongoose";

const productScheme = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: Array, required: true },
    price: { type: Number, required: true },
    offerPrice: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, require: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.product || mongoose.model("product", productScheme);

export default Product;
