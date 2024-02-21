import React from "react";
import logo from "../assets/logo.png";
export default function Navbar() {
  return (
    <>
      <nav className="w-full bg-transparent flex flex-row p-6 justify-between">
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
      </nav>
    </>
  );
}
