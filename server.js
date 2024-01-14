import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectToDB from "./db.js";
import conversionController from "./controllers/conversionController.js";

dotenv.config();
const { urlencoded, json } = bodyParser;
const port = process.env.PORT || 3000;
const server = express();
connectToDB("currency-converter");

// parse application/x-www-form-urlencoded
server.use(urlencoded({ extended: false }));

// parse application/json
server.use(json());

server.use("/api", conversionController);

server.listen(port, () => {
  console.log(
    `Server is listening on port ${port} => http://localhost:${port}`
  );
});
