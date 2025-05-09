import React, { useContext } from "react";
import loginbg from "../../assets/loginbg.jpg";
import { ContextProvider } from "../AuthProviders/AuthProvider";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { handleSubmit2, loading } = useContext(ContextProvider);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    handleSubmit2(e, navigate);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat bg-right flex items-center justify-center px-4 py-10"
      style={{
        backgroundImage: `url(${loginbg})`,
      }}
    >
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
        <h2 className="text-3xl text-white font-bold text-center mb-6">Welcome Back</h2>
        <form onSubmit={handleFormSubmit} className="space-y-5">
      
          <div>
            <label className="block text-sm font-medium text-white mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

    
          <div>
            <label className="block text-sm font-medium text-white mb-1">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-right mt-1">
              <a href="#" className="text-blue-300 hover:underline">Forgot password?</a>
            </p>
          </div>

        
          {loading ? (
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-lg text-white"></span>
            </div>
          ) : (
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Login
            </button>
          )}

      
          <p className="text-sm text-center text-white mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-300 hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
