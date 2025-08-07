import mongoose from "mongoose";

const orderScheme = new mongoose.Schema(
  {
    userId: { type: String, required: true, ref: "user" },
    items: [
      {
        product: { type: String, required: true, ref: "product" },
        quantity: { type: Number, required: true },
      },
    ],

    amount: { type: Number, required: true },
    address: { type: String, require: true, ref: "address" },
    status: { type: String, default: "Order placed" },
    payment: { type: String, require: true },
    paymentType: { type: String, require: true },
    isPaid: { type: Boolean, require: true, default: false },
  },
  { timestamps: true }
);

const Order = mongoose.models.order || mongoose.model("order", orderScheme);

export default Order;
