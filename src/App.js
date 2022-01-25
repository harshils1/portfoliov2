import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Portfolio/Navbar/Navbar";
import Profile from "./Portfolio/Home/Profile";
import AboutMe from "./Portfolio/AboutMe/AboutMe";
import ContactMe from "./Portfolio/ContactMe/ContactMe";

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
