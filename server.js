import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./database.js";
import conversionController from "./controllers/conversionController.js";

// Load content of .env file into process.env
dotenv.config();
connectToDB("currency-converter");

const { urlencoded, json } = bodyParser;
const server = express();
const port = process.env.PORT || 3000;

// Middleware: CORS
server.use(cors());
server.use((_req, res, next) => {
  // Define headers
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Middleware: Body parser
server.use(urlencoded({ extended: false }));
server.use(json());

// Middleware: Routes
server.use("/api", conversionController);

server.listen(port, () => {
  console.log(
    `Server is listening on port ${port} => http://localhost:${port}`
  );
});
