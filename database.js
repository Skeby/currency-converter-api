import mongoose from "mongoose";
import dotenv from "dotenv";

// Load content of .env file into process.env
dotenv.config();

const { connect, connection } = mongoose;
const DB_BASE_URI =
  process.env.NODE_ENV === "development"
    ? "mongodb://127.0.0.1:27017"
    : process.env.DB_BASE_URI;

const connectToDB = (databaseName) => {
  // Connect to the specified database
  connect(DB_BASE_URI + "/" + databaseName);
  connection.on("connected", () => {
    console.log("Database connected succesfully");
  });
};

export default connectToDB;
