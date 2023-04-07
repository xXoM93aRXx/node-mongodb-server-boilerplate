import modelPost from "../models/modelPost.js";

export const getPosts = async (req, res) => {
  try {
    const modelPosts = await modelPost.find();
    res.status(200).json(modelPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
