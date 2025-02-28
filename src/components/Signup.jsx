import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup");
  };
  return (
    <div className="">
      <h2 className="text-5xl text-center font-extrabold mt-8">Signup</h2>
      <form
        onSubmit={handleSignup}
        className="w-2/5 mx-auto space-y-4 my-8"
        action=""
      >
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Username" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input type="password" className="grow" placeholder="Password" />
        </label>
        <div className="form-control mt-2">
          <button className="btn btn-neutral">Signup</button>
        </div>
        <p className="text-xs font-semibold text-center px-4 py-2 rounded-md bg-purple-100  ">Already have an account ? please <NavLink to="/login" ><span className="text-primary">Login</span></NavLink> </p>
      </form>
      
    </div>
  );
};

export default Signup;
