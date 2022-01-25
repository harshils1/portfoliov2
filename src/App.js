import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Portfolio/Navbar/Navbar";
import Profile from "./Portfolio/Home/Profile";
import AboutMe from "./Portfolio/AboutMe/AboutMe";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
