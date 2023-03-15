import mongoose, { Schema, model, Model } from "mongoose";
import { FlyBondyTravels } from "../interface";

const FlySchema = new Schema({
  data: { type: String, required: true, default: Date.now() },
  origin: [
    {
      type: String,
      enum: {
        values: ["BRC", "COR", "EPA", "MDZ"],
        message: "{VALUE} no es un origen valido",
      },
      required: true,
      default: "BRC",
    },
  ],
  destination: [
    {
      type: String,
      enum: {
        values: ["BRC", "COR", "EPA", "MDZ"],
        message: "{VALUE} no es un origen valido",
      },
      required: true,
      default: "BRC",
    },
  ],
  price: { type: Number, required: true, default: 0 },
  availability: { type: Number, required: true, default: 0 },
});

const Fly: Model<FlyBondyTravels> =
  mongoose.models.Fly || model("Fly", FlySchema);

export default Fly;
