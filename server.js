import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./db.js";
import conversionController from "./controllers/conversionController.js";

dotenv.config();
const { urlencoded, json } = bodyParser;
const port = process.env.PORT || 3000;
const server = express();
connectToDB("currency-converter");

// Middleware: Headers for CORS
server.use(cors());
server.use((_req, res, next) => {
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
