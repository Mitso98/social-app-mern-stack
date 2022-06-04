import "./Post.scss";

import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  setObj,
  toggleSideMenu,
  toggleFocus,
  setOpenedUi,
} from "../../features/UI/uiSlice";


const Post = ({ elm }) => {
  const dispatch = useDispatch();
  const { sideMenu, openedUI } = useSelector((state) => state.ui);

  return (
    <>
      {sideMenu && openedUI == elm._id ? (
        <div className="post-options-menu">
          <ul className="post-options-ul">
            <li className="post-options-li">Delete</li>
            <li className="post-options-li">Edit</li>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
      <div className="post-card-wrapper">
        <div className="post-head">
          <span className="post-title">{elm.title}</span>
          <BsThreeDotsVertical
            id={elm._id}
            className="post-icon"
            onClick={() => {
              if (sideMenu && elm._id != openedUI) {
                /*
                  menu X lready opened but we want to open menu Y
                  Result: menu X will be closed then Y will Open
                */
                dispatch(toggleSideMenu(false));
                dispatch(setOpenedUi(elm._id));
                dispatch(toggleSideMenu(true));
              } else {

                dispatch(toggleSideMenu(!sideMenu));
                openedUI == "" // if we clicked same menu we need to clear openedUI no worries with sideMenu as ! will do the job with boolean value
                  ? dispatch(setOpenedUi(elm._id))
                  : dispatch(setOpenedUi(""));
              }
            }}
          />
        </div>

        {elm.image ? (
          <img
            onClick={() => {
              dispatch(toggleFocus());
              dispatch(setObj(elm.image));
            }}
            className="post-image"
            src={elm.image}
            alt="post-image"
          />
        ) : (
          <div className="post-image-filler"></div>
        )}
        <p className="post-tags">{elm.tags.map((tag) => `#${tag}`)}</p>
        <p className="post-message">{elm.message}</p>
      </div>
    </>
  );
};
export default Post;
