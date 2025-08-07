import mongoose from "mongoose";
const connectdb = async () => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database is connect")
    );
    await mongoose.connect(`${process.env.MONGO_URL}/grocery`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectdb;
