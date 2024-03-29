import { Router } from "express";
import Conversion from "../models/Conversion.js";

const router = Router();

router.post("/conversions/create", async (req, res) => {
  try {
    // Create a new Conversion object
    const newConversion = new Conversion(req.body);
    // Insert new conversion in the conversion collection (table)
    newConversion
      .save()
      .then(() => {
        res.json({ message: "Conversion saved successfully" });
      })
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (err) {
    res
      .status(500)
      .json({
        error: `Internal server error:\n${err.message ? err.message : err}`,
      });
  }
});

router.get("/conversions", async (_, res) => {
  try {
    // Get all Conversions in the database
    const conversions = await Conversion.find();
    res.json(conversions);
  } catch (err) {
    res
      .status(500)
      .json({
        error: `Internal server error:\n${err.message ? err.message : err}`,
      });
  }
});

router.delete("/conversions", async (_, res) => {
  try {
    // Delete all entries in the conversion collection
    await Conversion.deleteMany({});
    res.json({ message: "Conversion history deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({
        error: `Internal server error:\n${err.message ? err.message : err}`,
      });
  }
});

export default router;
