import React, { useContext } from "react";
import dragonbg from "../../assets/dragonbg.jpg";
import { ContextProvider } from "../AuthProviders/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
const Registration = () => {
  const { handleSubmit, handleGoogle, loading, passwordError } = useContext(ContextProvider);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    handleSubmit(e, navigate); // Pass navigate to the context's method
  };

  return (
    <div
      style={{
        backgroundImage: `url(${dragonbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
      className="min-h-[900px] pt-[30px] px-4 lg:min-h-[850px] lg:pt-[30px] relative"
    >
      <div className=" hero opacity-90 bg-base-200 w-11/12  lg:max-w-md absolute lg:right-[200px] rounded-xl">
        <div className="hero-content max-w-sm flex-col">
          <h1 className="text-3xl">Registration</h1>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form
              className="card-body max-w-md mx-auto lg:max-w-6xl"
              onSubmit={handleFormSubmit}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>

              
              </div>

              {loading ? (
                <div className="flex items-center justify-center ">
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              ) : (
                <></> // or null
              )}
              <div className="form-control mt-2">
                <button type="submit" className="btn btn-primary">
                  Registration
                </button>
              </div>


              {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}

              <p>
                Aready have an account? then click on{" "}
                <Link className="hover:text-red-300" to="/login">
                  Login
                </Link>
              </p>
            </form>
            <div className="form-control ">
              <button
                onClick={() => handleGoogle(navigate)}
                type="submit"
                className="btn btn-primary"
              >
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
