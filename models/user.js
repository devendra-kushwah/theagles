import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  mobile: {
    type: Number,
    required: true,
    trim: true,
    // max: 10,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    // min: 8,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
