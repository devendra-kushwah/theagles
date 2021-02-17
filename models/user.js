import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  mobile: {
    type: Number,
    required: true,
    trim: true,
    // max: 10,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    // min: 8,
  },
});

const User = mongoose.model("Users", UserSchema);

export default User;
