import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> HOME </Link>
        <Link to="/createpost"> Napravi objavu </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
