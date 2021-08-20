import PostMessage from "../models/postMessage.js";

//try catch method
export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//another way
export const createPost = async (req, res) => {
  const post = await Album.create(req.body);
  res.status(200).json({ data: post });
};
