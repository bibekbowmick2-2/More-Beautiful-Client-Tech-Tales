import React, { useContext } from "react";
import { ContextProvider } from "../AuthProviders/AuthProvider";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function GameWatchListData({ items }) {
  const { user, handleWishDelete } = useContext(ContextProvider);

  if (!items || items.length === 0) {
    return (
      <div className="min-h-lvh bg-[#9eb3e1]  flex justify-center items-center">
        <p className="text-orange-200 font-extrabold text-5xl ">
          No WatchList available
        </p>
      </div>
    );
  }
  return (
    <div className=" overflow-x-scroll overflow-y-scroll lg:overflow-auto  bg-[#080325] mt-6 min-h-screen lg:min-h-lvh text-white p-16">
      <table className="table table-xs ">
        <thead>
          <tr className="text-white">
            <th className="lg:font-extrabold lg:text-2xl">Serial No</th>
            <th className="lg:font-extrabold lg:text-2xl">Image</th>
            <th className="lg:font-extrabold lg:text-2xl">Name</th>
            <th className="lg:font-extrabold lg:text-2xl">Title</th>
            <th className="lg:font-extrabold lg:text-2xl">Email</th>
            <th className="lg:font-extrabold lg:text-2xl">Short Description</th>
            <th className="lg:font-extrabold lg:text-2xl">Category</th>
          </tr>
        </thead>
        <tbody>
          {items.map((review, index) => (
            <tr key={index}>
              <th className="lg:font-extrabold">{index + 1}</th>
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar">
                    <div class="mask mask-squircle h-12 w-12">
                     

                      <PhotoProvider>
                        <PhotoView src={review?.image}>
                          <img src={review?.image} alt="" />
                        </PhotoView>
                      </PhotoProvider>
                    </div>
                  </div>
                </div>
              </td>
              <td className="lg:font-extrabold">{user?.displayName}</td>
              <td className="lg:font-extrabold">{review?.title}</td>
              <td className="lg:font-extrabold">{review?.email}</td>
              <td className="lg:font-extrabold">{review?.shortDescription}</td>
              <td className="lg:font-extrabold">{review?.category}</td>

              <td>
                <Link to={`/product-details/${review.title}`}>
                  <button className="btn btn-outline btn-accent">Details</button>
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-error"
                  onClick={() => handleWishDelete(review?._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
