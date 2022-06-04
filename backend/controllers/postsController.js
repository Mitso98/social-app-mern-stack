import Post from "../models/postsModel.js";
import asyncHandler from "express-async-handler";
//@desc   getPosts
//@route  GET /api/posts
//@access public
export const getPosts = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

//@desc   create Post
//@route  POST /api/posts
//@access public
export const createPost = asyncHandler(async (req, res) => {
  if (
    !req.body.title ||
    !req.body.creator ||
    !req.body.message ||
    !req.body.tags
  ) {
    res.status(400);
    // this will ignit express default/overwritten errorHandler
    throw new Error("Please fill all required inputs");
  }
  const post = await Post.create({
    title: req.body.title,
    image: req.body.image,
    message: req.body.message,
    creator: req.body.creator,
    tags: req.body.tags,
  });
  res.status(200).json(post);
});
