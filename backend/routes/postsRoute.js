import express from "express";
import { getPosts, createPost } from "../controllers/postsController.js";

const router = express.Router();

// localhost:3000/posts/
router.get("/", getPosts).post("/", createPost);

export default router;
