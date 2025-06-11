import React, { useContext } from "react";
import dragonbg from "../../assets/Homebg.jpg";
import { ContextProvider } from "../AuthProviders/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddReview = () => {
  const { handleReview, user, loading } = useContext(ContextProvider);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    handleReview(e, navigate);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${dragonbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen pt-16 px-4 lg:px-20 flex items-center justify-center"
    >
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="bg-white bg-opacity-5 backdrop-blur-md p-10 rounded-2xl shadow-xl w-full max-w-2xl mt-4 text-gray-300">
          <h1 className="text-4xl text-white font-bold mb-6 ">Add Blog</h1>
          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className="form-control">
              <label className="label font-semibold">Blog Title/Name</label>
              <input
                type="text"
                placeholder="Blog Title"
                name="title"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Email</label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered w-full"
                defaultValue={user.email}
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Thumbnail URL</label>
              <input
                type="url"
                placeholder="Thumbnail URL"
                name="thumbnail"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Long Description</label>
              <textarea
                placeholder="Long Description"
                name="longdescription"
                className="textarea textarea-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Short Description</label>
              <input
                type="text"
                placeholder="Short Description"
                name="shortdescription"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Category</label>
              <select name="genre" className="select select-primary w-full">
                <option disabled selected>
                  Select a Category
                </option>
                <option>Technology</option>
                <option>Lifestyle</option>
                <option>Travel</option>
                <option>Food</option>
                <option>Health</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddReview;
