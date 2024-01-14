import { Schema, model } from "mongoose";

const conversionSchema = new Schema({
  sourceCurrency: { type: String, required: true },
  targetCurrency: { type: String, required: true },
  sourceAmount: { type: Number, required: true },
  targetAmount: { type: Number, required: true },
  dateTime: { type: Date, default: Date.now },
});

const Conversion = model("Conversion", conversionSchema);

export default Conversion;
