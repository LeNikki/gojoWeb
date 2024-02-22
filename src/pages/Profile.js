import React from "react";
import Navbar from "../components/navbar";
function Profile() {
  return (
    <div>
      <Navbar />
      <div className="w-full max-h-screen flex justify-center">
        <div className=" w-1/4 mb-32 p-20 h-full bg-slate-100">
          <h1 className="font-bold text-lg text-center">Sign Up</h1>
          <br></br>
          <label for="userName">UserName: </label>
          <input type="text" id="userName" />
          <br></br>
          <label for="email">Email: </label>
          <input type="email" id="email" />
          <br></br>
          <label for="password">Password: </label>
          <input type="text" id="password" />
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Profile;
