import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About";
import Services from "./pages/Services";
import Profile from "./pages/Profile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}>
            Homes
          </Route>
          <Route path="/about" element={<About />}>
            About
          </Route>
          <Route path="/services" element={<Services />}>
            Services
          </Route>
          <Route path="/profile" element={<Profile />}>
            Profile
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
