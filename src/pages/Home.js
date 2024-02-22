import React from "react";
import Navbar from "../components/navbar";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="bg-hero">
      <Navbar />
      <div className="w-full h-auto flex flex-row justify-between">
        <section className="w-1/2 p-12">
          <h1 className="text-8xl font-bold">Lorem Ipsum Dolor Silet.</h1>
          <p className="mt-6 mb-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link
            to="/services"
            className="mt-9 w-44 p-3 bg-yellow-800 text-slate-100 hover:bg-slate-800"
          >
            Services
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </Link>
        </section>

        <section className="w-1/2"></section>
      </div>
      <div className="w-full h-56 "></div>
      <Partners />
      <div className="w-full h-32 "></div>
      <Testimonials />
    </div>
  );
}

export default Home;
