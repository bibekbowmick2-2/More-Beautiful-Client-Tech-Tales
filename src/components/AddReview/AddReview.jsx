import React, { useContext } from "react";
import dragonbg from "../../assets/dragonbg.jpg";
import { ContextProvider } from "../AuthProviders/AuthProvider";
import { useNavigate, Link } from "react-router-dom";

const AddReview = () => {
   const { handleReview,user,loading} = useContext(ContextProvider);
   const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    handleReview(e, navigate); // Pass navigate to the context's method
  };
  return (
    <div
      style={{
        backgroundImage: `url(${dragonbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom center",
        
      }}
      className="min-h-[1200px] pt-[30px] px-4 lg:min-h-[1100px] lg:pt-[30px] relative"
    >
      <div className=" hero opacity-90 bg-base-200 w-11/12  lg:max-w-md absolute lg:right-[200px] rounded-xl">
        <div className="hero-content max-w-sm flex-col">
          <h1 className="text-3xl">Add Your Review</h1>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form className="card-body max-w-md mx-auto lg:max-w-6xl" onSubmit={handleFormSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered w-64"
                  defaultValue={user.displayName}
                  readOnly
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Game Title/ Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Game Title"
                  name="title"
                  className="input input-bordered w-64"
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
                  defaultValue={user.email}
                  readOnly
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Thumbnail</span>
                </label>
                <input
                  type="url"
                  placeholder="photo"
                  name="thumbnail"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating(e.g., 1-5 or 1-10) </span>
                </label>
                <input
                  type="number"
                  placeholder="Rating"
                  name="rating"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Publishing year: (Ex: 2021, 2024){" "}
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Publishing year"
                  name="publishing_year"
                  className="input input-bordered"
                  required
                />
              </div>



              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Game Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Game Description"
                  name="description"
                  className="input input-bordered w-64"
                  required
                />
              </div>

              <select name="genre" class="select select-primary w-full max-w-xs">
                <option disabled selected>
                
                </option>
                <option>Action</option>
                <option>RPG</option>
                <option>Adventure</option>
                
              </select>

              <div className="form-control mt-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>

             

              
            </form>
          </div>
          
        </div>
      </div>

      {
  loading ? (
    <div className="flex items-center justify-center h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : <></>
}
    </div>
  );
};

export default AddReview;
