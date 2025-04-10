import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {


  // const authInfo = useContext(AuthContext)
  const {user, signOutUser} = useContext(AuthContext)
  console.log(user)

  const handleSignOut = () => {
    signOutUser()
    .then(()=>{
      console.log("user signed out successfully")
    })
    .catch(error => {
      console.log("ERROR", error.message)
    })
  }
  

  return (
    <div className="navbar bg-base-100 px-28">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
            <li>
              {
                user && <> <NavLink to="/orders">Orders</NavLink> </>
              }
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
          {/* <li>
            <NavLink to="/orders">Orders</NavLink>
          </li> */}
          <li>
            {
              user && <> <NavLink to="/orders">Orders</NavLink> </>
            }
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {
          user? 
          <>
            <span> {user.email} </span>
            <a onClick={handleSignOut} className="btn"> Sign Out </a>
          </>
          : <Link to="/login">Login</Link>
        }
      </div>
    </div>
  );
};
export default Navbar;
