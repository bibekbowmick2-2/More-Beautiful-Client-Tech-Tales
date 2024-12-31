import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ContextProvider } from "../AuthProviders/AuthProvider";
import { Tooltip as ReactTooltip } from "react-tooltip";
const Header = () => {
  const { user, signOutUser,handleToggle } = useContext(ContextProvider);
  // console.log(user);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("sign out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const link = (
    <>
    <button>
      <input type="checkbox" value="bw" className="toggle " onChange={handleToggle} />
    </button>
     
      <li>
        <NavLink to="/home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allReviews">All Blogs</NavLink>
      </li>

      <li>
              <NavLink to="/calendar">Calendar</NavLink>
            </li>
      {user && (
        <>
          <li>
            <NavLink to="/addReviews">Add Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/myReviews">My Review</NavLink>
          </li>
          <li>
            <NavLink to="/gameWatchList">WishList</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/faq">FAQ</NavLink>
      </li>

      {
        !user && (
          <>
          <li>
              <NavLink to="/registration">Registration</NavLink>
            </li>

            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </>
        )
      }
      
    </>
  );
  return (
    <div className="navbar bg-[#2489a0] ">
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
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Tech-Tales</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button data-tooltip-id="my-tooltip-2" className=" lg:btn mr-2 text-[12px]">
              {user?.email}
              <br/>{user?.displayName}
            </button>
            <ReactTooltip
              id="my-tooltip-2"
              place="left-start"
              variant="info"
              content=<>
                <div class="avatar z-10">
                  <div class="w-24 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>

                
              </>
            />

            
            <a className="btn" onClick={handleSignOut}>
              Sign Out
            </a>
          </>
        ) : (
          <>
            {/* <li>
              <NavLink to="/login">Login</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/registration">Registration</NavLink>
            </li> */}

            

            
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
