import mongoose from "mongoose";

// create post schema

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creater: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// create model mongoose
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
