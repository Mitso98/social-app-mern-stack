import axios from "axios";

const API_URL = "/api/posts/";

const getPosts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

const createPost = async (postData) => {
  const response = await axios.post(API_URL, postData);

  return response.data;
};

const postService = {
  getPosts,
  createPost,
};

export default postService;
