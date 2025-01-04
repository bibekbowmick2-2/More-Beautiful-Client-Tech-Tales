import React, { useContext } from "react";
import dragonbg from "../../assets/dragonbg.jpg";
import { ContextProvider } from "../AuthProviders/AuthProvider";
import { useNavigate, Link, useLoaderData, useParams } from "react-router-dom";
import Animation from "./Animation.json";
import Lottie from "lottie-react";

const UpdateReview = () => {
   const { handleUpdateReview,loading} = useContext(ContextProvider);
   const navigate = useNavigate();
  const handleFormSubmit = (e) => {
    handleUpdateReview(e, navigate); // Pass navigate to the context's method
  };





 
const reviews = useLoaderData();
console.log(reviews);
const { id } = useParams();
const product = reviews.find((review) => review._id == id);
console.log(product);
 
// console.log(id);
// const {name,thumbnail,email,title,genre,rating,publishing_year,description} = review;


if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div
    //   style={{
    //     backgroundImage: `url(${dragonbg})`,
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     backgroundPosition: "bottom center",
        
    //   }}

    style={{
         backgroundColor: '#080325',
       
    }}
      className="grid grid-cols-1 md:grid-cols-2 justify-center items-center   lg:grid-cols-2 py-10    min-h-[1150px] pt-[30px] px-4 lg:min-h-[1100px] lg:pt-[30px]  "
    >
<div className="sticky top-0">
<Lottie   animationData={Animation} loop={true} className="max-w-[800px] " />
</div>

      <div className=" hero opacity-90 bg-base-200 max-w-[400px]  lg:max-w-md lg:right-[200px] rounded-xl mt-10">
        <div className="hero-content max-w-sm flex-col">
          <h1 className="text-3xl">Update Your Review</h1>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl ">
            <form className="card-body max-w-md mx-auto lg:max-w-6xl" onSubmit={handleFormSubmit} >
              

              <input type="hidden" name="id" value={product._id} />


              

              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Blog Title/ Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Game Title"
                  name="title"
                  defaultValue={product.title}
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
                  defaultValue={product.email}
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
                  defaultValue={product.image}
                  className="input input-bordered"
                  required
                />
              </div>

              

              


              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Description(L)</span>
                </label>

                <textarea
                  type="text"
                  placeholder="Long Description"
                  name="longdescription"
                  className="input input-bordered w-64 h-16"
                  defaultValue={product.longDescription}
                  required
                />
              </div>



              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Description(S)</span>
                </label>
                <input
                  type="text"
                  placeholder="Short Description"
                  name="shortdescription"
                  className="input input-bordered w-64"
                  defaultValue={product.shortDescription}
                  required
                />
              </div>

              <select name="genre" defaultValue={product.category}   class="select select-primary w-full max-w-xs">

                <option disabled selected>

                Category
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
          </div>
          
        </div>
      </div>

      {/* {
  loading ? (
    <div className="flex items-center justify-center h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  ) : <></>
} */}
    </div>
  );
};

export default UpdateReview;
