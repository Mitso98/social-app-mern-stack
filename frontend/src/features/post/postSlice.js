import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
  posts: [],
  getPostsAtt: {
    isError: false,
    isSuccess: false,
    isLoading: true,
  },
  createPostAtt: {
    isError: false,
    isSuccess: false,
    isLoading: true,
  },

  message: "",
};

//GET posts
export const getPosts = createAsyncThunk(
  "posts/getAll",
  async (_, thunkAPI) => {
    try {
      return postService.getPosts();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/create",
  async (postData, thunkAPI) => {
    try {
      console.log(postData);
      return await postService.createPost(postData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.getPostsAtt.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.getPostsAtt.isLoading = false;
        state.getPostsAtt.isSuccess = true;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.getPostsAtt.isLoading = false;
        state.getPostsAtt.isError = true;
        state.getPostsAtt.message = action.payload;
      })
      .addCase(createPost.pending, (state) => {
        state.createPostAtt.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.createPostAtt.isLoading = false;
        state.createPostAtt.isSuccess = true;
        state.posts.push(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.createPostAtt.isLoading = false;
        state.createPostAtt.isError = true;
        state.createPostAtt.message = action.payload;
      });
  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
