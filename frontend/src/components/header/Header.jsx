import "./Header.scss";
import { IoCreateOutline } from "react-icons/io5";
import logo from "../../assets/images/memories.png";

const Header = () => {
  const onClick = () => {
    window.scroll({
      top: 0,
   
      behavior: 'smooth'
    });
  };
  return (
    
      <div className="header-card">
        <div className="header-icons">
          <IoCreateOutline className="post-icon" onClick={onClick} />
        </div>
        <div className="header-brand">
          <span className="header-title">Memories</span>
          <img src={logo} alt="" />
        </div>
      </div>

  );
};
export default Header;
