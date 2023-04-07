import mongoose, { model } from "mongoose";

const modelPostSchema = mongoose.Schema({
  name: String,
  value: Number,
});

const modelPost = mongoose.model("modelPostSchema", modelPostSchema);

export default modelPost;
