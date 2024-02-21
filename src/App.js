import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <div className="App">
      {/* <nav className="w-full bg-transparent flex flex-row p-6 justify-between">
        <ul className=" w-1/4 flex flex-row justify-between items-center">
          <img src={logo} alt="logo" className="w-12" />
          <li className="hover:font-bold">Home</li>
          <li className="hover:font-bold">About Us</li>
          <li className="hover:font-bold">Services</li>
        </ul>
        <section className="w-1/4 flex flex-row items-center ">
          <section>
            <input
              type="text"
              className="border-solid border-2 rounded-md bg-none  focus:outline-none focus:ring-0 p-1"
            ></input>
            <i className="fa-solid fa-magnifying-glass ml-4"></i>
          </section>
          <i className="fa-solid fa-user ml-5"></i>
        </section>
      </nav> */}

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
