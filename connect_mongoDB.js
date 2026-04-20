const mongoose = require("mongoose");
const { throwError } = require("./utils/defined_error");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`📦 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    throwError(500, "MongoDB connection failed");
    process.exit(1);
  }
};

module.exports = connectDB;
