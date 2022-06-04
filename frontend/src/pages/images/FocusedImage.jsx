import "./FocusedImage.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setObj, toggleFocus } from "../../features/UI/uiSlice";

const FocusedImage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { obj } = useSelector((state) => state.ui);

  return (
    <div className="home-focused-image">
      <img
        onClick={() => {
          dispatch(toggleFocus());
          dispatch(setObj(""));
          navigate(-1);
        }}
        src={obj}
        alt="post-image"
      />
    </div>
  );
};
export default FocusedImage;
