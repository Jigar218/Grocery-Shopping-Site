import mongoose from "mongoose";

const addressScheme = new mongoose.Schema({
  userId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, require: true },
  state: { type: String, require: true },
  zipcode: { type: Number, require: true },
  country: { type: String, require: true },
  phone: { type: String, require: true },
});

const Address =
  mongoose.models.address || mongoose.model("address", addressScheme);

export default Address;
