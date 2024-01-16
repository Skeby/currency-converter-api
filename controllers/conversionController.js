import { Router } from "express";
import Conversion from "../models/Conversion.js";

const router = Router();

router.post("/create", async (req, res) => {
  try {
    const {
      sourceCurrency,
      targetCurrency,
      sourceAmount,
      targetAmount,
      dateTime,
    } = req.body;
    const newConversion = new Conversion({
      sourceCurrency,
      targetCurrency,
      sourceAmount,
      targetAmount,
      dateTime,
    });
    newConversion
      .save()
      .then(() => {
        res.json({ message: "Conversion saved successfully" });
      })
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (error) {
    console.error("An error occured", error);
  }
});

router.get("/history", async (_req, res) => {
  try {
    const conversions = await Conversion.find();
    res.json(conversions);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/delete-history", async (_req, res) => {
  try {
    await Conversion.deleteMany({});
    res.json({ message: "Conversion history deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
