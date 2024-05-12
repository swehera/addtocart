import mongoose from "mongoose";

export const connect = async () => {
  try {
    const mongodbUrl = process.env.MONGODB_URL || "default mongodb url";
    await mongoose.connect(mongodbUrl);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    connection.on("error", (error) => {
      console.log(
        "MongoDB connection error, make sure MongoDB is running" + error
      );
      process.exit();
    });
  } catch (error) {
    console.log("DB Connect Error", error);
  }
};
