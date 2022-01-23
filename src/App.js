import './App.css';
import Profile from './Portfolio/Home/Profile';
import Navbar from './Portfolio/Navbar/Navbar';
import AboutMe from './Portfolio/AboutMe/AboutMe'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <AboutMe/>
    </div>
  );
}

export default App;
