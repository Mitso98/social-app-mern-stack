import "./Form.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../features/post/postSlice";

const Form = () => {
  const [creator, setCreator] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImg] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const splittedTags = tags.split(" ");

    dispatch(
      createPost({ creator, title, message, tags: splittedTags, image })
    );
    setCreator("");
    setTitle("");
    setMessage("");
    setTags("");
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = (event) => {
    const file = event.target.files[0];
    convertBase64(file).then((value) => setImg(value));
  };

  return (
    <section className="section-form-wrapper">
      <form className="form-wrapper" onSubmit={onSubmit}>
        <p className="form-title">Create Post</p>
        <input
          name="creator"
          type="text"
          placeholder="Creator"
          className="form-input"
          value={creator}
          onChange={(e) => setCreator(e.target.value)}
        />
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          name="message"
          type="text"
          placeholder="Message"
          className="form-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          name="tags"
          type="text"
          placeholder="Tags"
          className="form-input"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <input accept="image/*" type="file" onChange={(e) => uploadImage(e)} />
        <button className="blue-button-submit-post" type="submit">
          POST!
        </button>
      </form>
    </section>
  );
};
export default Form;
