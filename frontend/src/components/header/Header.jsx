import "./Header.scss";
const Header = ({ img }) => {
  return (
    <div className="header-card">
      <span className="header-title">Memories</span>
      <img src={img} alt="" />
    </div>
  );
};
export default Header;
