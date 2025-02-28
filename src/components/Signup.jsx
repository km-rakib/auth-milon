import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log(name, email, username, password);
    e.target.reset();
  };
  return (
    <div className=" min-h-screen ">
      <h2 className="text-5xl text-center font-extrabold mt-8">Signup</h2>
      <form
        onSubmit={handleSignup}
        className="w-2/5 mx-auto space-y-4 my-8"
        action=""
      >
        <label className="input input-bordered flex items-center gap-2">
          <input 
            required
            type="text" 
            name="name"
            className="grow" 
            placeholder="Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            required 
            type="text"
            name="email" 
            className="grow" 
            placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input 
            required
            type="text" 
            name="username"
            className="grow" 
            placeholder="Username" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input 
          required
          type="password"
          name="password" 
          className="grow" 
          placeholder="Password" />
        </label>
        <div className="form-control mt-2">
          <button className="btn btn-neutral">Signup</button>
        </div>
      </form>
      <div className="w-2/5 mx-auto space-y-4">
        <p className="text-xs font-semibold text-center px-4 py-2 rounded-md bg-purple-100  ">
          Already have an account ? please 
          <NavLink to="/login">
            <span className="text-primary"> Login</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
