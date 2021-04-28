import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
  title: String,
  description: String,
  subject: String,
  media: {
    photo: String,
    video: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const PostModel = mongoose.model("Post", PostSchema);

export default PostModel;
