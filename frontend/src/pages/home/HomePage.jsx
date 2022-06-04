import "./HomePage.scss";
import Posts from "../../components/post/Posts";
import Form from "../../components/form/Form";
import Header from "../../components/header/Header";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFocus } from "../../features/UI/uiSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { focus } = useSelector((state) => state.ui);

  if (focus) {
    
    navigate("/images");
  }

  return (
    <div className="homePage-container">
      <Header />
      <Form />
      <Posts />
    </div>
  );
};

export default HomePage;
