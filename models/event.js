// const mongoose = require("mongoose");
import mongoose, { Schema } from "mongoose";

const eventSchema = new Schema({
  title: {
    type: String,
  },
  des: {
    type: String,
  },
  price: {
    price: Number,
  },
  date: {
    type: Date,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
export default mongoose.model("Event", eventSchema);
