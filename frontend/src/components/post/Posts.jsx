import "./Posts.scss";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../features/post/postSlice";
import { useEffect } from "react";

// createdAt: "2022-05-28T16:32:23.122Z"
// creator: "sd"
// image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAA
// likeCount: 0
// message: "sd"
// tags: ['sd']
// title: sd

const Posts = () => {
  const { posts, getPostsAtt } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // if still loading return loading...
  if (getPostsAtt.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="posts-wrapper">
      {posts.map((elm) => (
        <Post key={elm._id} elm={elm} />
      ))}
    </section>
  );
};
export default Posts;
