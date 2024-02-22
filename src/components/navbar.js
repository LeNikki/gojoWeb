import React from "react";
import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header>
      <nav className="w-full bg-transparent flex flex-row p-6 justify-between">
        <ul className=" w-1/4 flex flex-row justify-between items-center">
          <img src={logo} alt="logo" className="w-12" />
          <NavLink to="/" className="hover:font-bold">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:font-bold">
            About Us
          </NavLink>
          <NavLink to="/services" className="hover:font-bold">
            Services
          </NavLink>
        </ul>
        <section className="w-1/4 flex flex-row items-center ">
          <section>
            <input
              type="text"
              className="border-solid border-2 rounded-md bg-none  focus:outline-none focus:ring-0 p-1"
            ></input>
            <i className="fa-solid fa-magnifying-glass ml-4"></i>
          </section>
          <Link to="/profile">
            <i className="fa-solid fa-user ml-5"></i>
          </Link>
        </section>
      </nav>
    </header>
  );
}
