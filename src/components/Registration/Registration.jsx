import React, { useContext } from "react";
import { ContextProvider } from "../AuthProviders/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import Lottie from "lottie-react";
import Animation from "./Animation.json";

const Registration = () => {
  const { handleSubmit, handleGoogle, loading, passwordError } = useContext(ContextProvider);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    handleSubmit(e, navigate);
  };

  return (
    <div className="min-h-screen bg-[#080325] flex flex-col lg:flex-row items-center justify-center px-6 py-10">
      
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
        <Lottie animationData={Animation} loop={true} className="w-full max-w-[500px]" />
      </div>

    
      <div className="bg-[#0b0435] text-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center mb-6">Create Your Account</h2>
        <form onSubmit={handleFormSubmit} className="space-y-5">
      
          <div>
            <label className="block mb-1 text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

      
          <div>
            <label className="block mb-1 text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        
          <div>
            <label className="block mb-1 text-sm font-semibold">Photo URL</label>
            <input
              type="text"
              name="photo"
              required
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

      
          <div>
            <label className="block mb-1 text-sm font-semibold">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Create a password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-right mt-1">
              <a href="#" className="text-blue-400 hover:underline">Forgot password?</a>
            </p>
          </div>

    
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}

    
          {loading && (
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-lg text-white"></span>
            </div>
          )}

        
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Register
          </button>

         
          <div className="text-center text-sm text-gray-400 mt-2">or</div>

    
          <button
            onClick={() => handleGoogle(navigate)}
            type="button"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Continue with Google
          </button>

      
          <p className="text-sm mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
