import React from "react";
import borcelle from "../assets/borcelle.png";
import catmoon from "../assets/catmoon.png";
import rimberio from "../assets/rimberio.png";
import twintails from "../assets/twintails.png";
function Partners() {
  return (
    <div className="bg-slate-100 pt-10">
      <h1 className="text-3xl font-bold text-center">Our Trusted Partners</h1>
      <div className="flex flex-row p-5 justify-around w-full ">
        <img src={borcelle} alt="borcelle" className="w-32" />
        <img src={catmoon} alt="catmoon" className="w-32" />
        <img src={rimberio} alt="rimberio" className="w-32" />
        <img src={twintails} alt="twintails" className="w-32" />
      </div>
    </div>
  );
}

export default Partners;
