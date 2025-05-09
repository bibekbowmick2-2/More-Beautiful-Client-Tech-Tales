import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextProvider } from "../AuthProviders/AuthProvider";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Cards = ({ games }) => {
  const navigate = useNavigate();
  const { handleAddToWatchList, user } = useContext(ContextProvider);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12 py-10 bg-[#080325]">
      {games.map((game, idx) => (
        <div
          key={idx}
          className="bg-[#ffffff0a] backdrop-blur-md border border-[#ffffff1a] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 mx-auto w-full max-w-sm"
        >
          <div className="w-full h-48 overflow-hidden flex justify-center items-center bg-black/10">
            <PhotoProvider>
              <PhotoView src={game?.image}>
                <img
                  src={game?.image}
                  alt={game?.title}
                  className="w-auto h-full object-cover hover:scale-105 transition duration-300 rounded-full"
                />
              </PhotoView>
            </PhotoProvider>
          </div>

          <div className="p-5 flex flex-col justify-between h-[350px]">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-white mb-2">{game?.title}</h2>
              <p className="text-sm text-gray-300 line-clamp-4">{game?.longDescription}</p>
              <p className="mt-2 text-sm text-indigo-400 font-medium">{game?.category}</p>
            </div>

            <div className="flex flex-wrap gap-3 mt-auto">
              <Link to={`/product-details/${game.title}`}>
                <button className="px-4 py-2 rounded-md border border-indigo-400 text-indigo-400 hover:bg-indigo-600 hover:text-white transition duration-200">
                  See More
                </button>
              </Link>

              <button
                className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition duration-200"
                onClick={() => handleAddToWatchList(game, navigate, user.email)}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
