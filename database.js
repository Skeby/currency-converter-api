import mongoose from "mongoose";
import dotenv from "dotenv";

// Load content of .env file into process.env
dotenv.config();

const { connect, connection } = mongoose;
const DB_BASE_URI = process.env.DB_BASE_URI || "mongodb://127.0.0.1:27017";

const connectToDB = (databaseName) => {
  // Connect the specified collection (table) in the database
  connect(DB_BASE_URI + "/" + databaseName);
  connection.on("connected", () => {
    console.log("Database connected succesfully");
  });
};

export default connectToDB;
