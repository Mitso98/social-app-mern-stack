import "./Post.scss";


import { useState } from "react";
/*
  const visible = useState()

  onClick image visible => true;

  if (true) => another view with the desired image in the full page 
    will also include X button to set visible false so we can return back to normal view. 

*/

const Post = ({ elm }) => {
  const [visible, setVisible] = useState(false);
  const [img, setImg] = useState("");

  if (visible) {
    return <img src={img} onClick={() => setVisible(!visible)} />;
  }

  return (
    <div className="post-card-wrapper">

      <p className="post-title">{elm.title}</p>
      <img
        onClick={() => {
          setVisible(!visible);
          setImg(elm.image);
        }}
        className="post-image"
        src={elm.image}
        alt="post-image"
      />
      <p className="post-tags">{elm.tags.map((tag) => `#${tag}`)}</p>
      <p className="post-message">{elm.message}</p>
    </div>
  );
};
export default Post;
