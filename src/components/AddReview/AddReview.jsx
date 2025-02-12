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
      <div className=" hero opacity-90  w-11/12  lg:max-w-md absolute lg:right-[200px] rounded-xl mt-14 ">
        <div className="hero-content max-w-sm flex-col">
          <h1 className="text-3xl ">Add Blog</h1>
          {/* <div className="card  w-full  border-4 border-[#406677]"> */}
            <form className="card-body bg-[#406677] opacity-50 max-w-md mx-auto lg:max-w-6xl rounded-xl p-16 " onSubmit={handleFormSubmit}>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text ">User Name</span>
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
              </div> */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-extrabold"> Blog Title/ Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Blog Title"
                  name="title"
                  className="input input-bordered w-64"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-extrabold">Email</span>
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
                  <span className="label-text text-white font-extrabold">Thumbnail</span>
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
                  <span className="label-text text-white font-extrabold"> Description(L)</span>
                </label>

                <textarea
                  type="text"
                  placeholder="Long Description"
                  name="longdescription"
                  className="input input-bordered w-64 h-16"
                  required
                />
              </div>



              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-extrabold"> Description(S)</span>
                </label>
                <input
                  type="text"
                  placeholder="Short Description"
                  name="shortdescription"
                  className="input input-bordered w-64"
                  required
                />
              </div>

              <select name="genre" class="select select-primary w-full max-w-xs">
            
                <option disabled selected>
                Select a Category
                </option>
                <option>Technology</option>
                <option>Lifestyle</option>
                <option>Travel</option>
                <option>Food</option>
                <option>Health</option>
                
              </select>

              <div className="form-control mt-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>

             

              
            </form>
          {/* </div> */}
          
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
