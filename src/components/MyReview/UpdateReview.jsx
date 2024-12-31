import React, { useContext } from "react";
import dragonbg from "../../assets/dragonbg.jpg";
import { ContextProvider } from "../AuthProviders/AuthProvider";
import { useNavigate, Link, useLoaderData, useParams } from "react-router-dom";

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
      className="min-h-[1150px] pt-[30px] px-4 lg:min-h-[1100px] lg:pt-[30px] relative"
    >
      <div className=" hero opacity-90 bg-base-200 w-11/12  lg:max-w-md absolute lg:right-[200px] rounded-xl">
        <div className="hero-content max-w-sm flex-col">
          <h1 className="text-3xl">Update Your Review</h1>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <form className="card-body max-w-md mx-auto lg:max-w-6xl" onSubmit={handleFormSubmit} >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered w-64"
                  defaultValue= {product.name}
                   readOnly
                  required
                />
              </div>

              <input type="hidden" name="id" value={product._id} />


              

              <div className="form-control">
                <label className="label">
                  <span className="label-text"> Game Title/ Name</span>
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
                  defaultValue={product.thumbnail}
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
                  defaultValue={product.rating}
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
                  defaultValue={product.publishing_year}
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
                  defaultValue={product.description}
                  className="input input-bordered w-64"
                  required
                />
              </div>

              <select name="genre" defaultValue={product.genre}   class="select select-primary w-full max-w-xs">

                <option disabled selected>

                Genres ?
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
