import "./App.scss";
import HomePage from "./pages/home/HomePage";
import FocusedImage from "./pages/images/FocusedImage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/images" element={<FocusedImage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
