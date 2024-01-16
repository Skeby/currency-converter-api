import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { connect, connection } = mongoose;
// const DB_BASE_URI = process.env.DB_BASE_URI || "mongodb://127.0.0.1:27017";
const DB_BASE_URI = "mongodb://127.0.0.1:27017";

const connectToDB = (collectionName) => {
  connect(DB_BASE_URI + "/" + collectionName);
  connection.on("connected", () => {
    console.log("Database connected succesfully");
  });
};

export default connectToDB;
