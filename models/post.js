import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
  postTitle: String,
  postMedia: String,
  postStory: String,
  author: {
    id: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
  },
  data: {
    type: Date,
    default: Date.now,
  },
  timestamps: { createdAt: "created_at" },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
