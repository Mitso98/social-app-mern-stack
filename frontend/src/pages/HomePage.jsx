import "./HomePage.scss";
import Posts from "../components/post/Posts";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import logo from "../assets/images/memories.png";

const HomePage = () => {
  return (
    <div className="homePage-container">
      <Header img={logo} />
      <div className="app-titles">
        <h2>Posts</h2>
        <h2>Forms</h2>
      </div>
      <div className="app-center">
        <Posts />
        <Form />
      </div>
    </div>
  );
};

export default HomePage;
