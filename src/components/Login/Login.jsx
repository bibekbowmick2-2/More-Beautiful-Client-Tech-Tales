import React, { useContext } from "react";
import loginbg from "../../assets/loginbg.jpg";
import { ContextProvider } from "../AuthProviders/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
const Login = () => {
  const { signInUser, handleSubmit2, loading} = useContext(ContextProvider);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    handleSubmit2(e, navigate); // Pass navigate to the context's method
  };
  return (
    <div
      style={{
        backgroundImage: `url(${loginbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
      className="min-h-[600px] pt-[50px] px-4 lg:min-h-[800px] lg:pt-[30px] relative"
    >
      <div className=" hero  bg-[#9F4B44] w-11/12 opacity-70  lg:max-w-md absolute lg:right-[200px] rounded-xl mt-16 pb-16">
        <div className="hero-content max-w-sm flex-col">
          <h1 className="text-3xl">Login</h1>
          {/* <div className="card  w-full shrink-0 shadow-2xl "> */}
            <form
              className="card-body max-w-md mx-auto lg:max-w-6xl bg-[#F3944E] p-16 rounded-xl opacity-70"
              onSubmit={handleFormSubmit}
            >
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
                <>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
                </> // or null
              )}
             

            </form>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
