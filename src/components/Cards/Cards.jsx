import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { Link, useNavigate } from "react-router-dom";
import { ContextProvider } from "../AuthProviders/AuthProvider";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Cards = ({ games }) => {
  const navigate = useNavigate();
  const { handleAddToWatchList, user } = useContext(ContextProvider);

  // const {name,description,picture,ratin} = games;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 py-10 bg-[#04020e] ">
      {games.map((game) => (
        <div className="mx-auto w-full pt-5">
          <div className="card bg-[#3f3a5b70] w-11/12 mx-auto shadow-xl rounded-none ">
            <div className="w-[100px] h-[100px]  mx-auto">
              <PhotoProvider>
                <PhotoView src={game?.image}>
                <img class="w-full mx-auto " src={game?.image} alt="Shoes" />
                </PhotoView>
              </PhotoProvider>
             
            </div>
            <div className="card-body">
              <h2 className="card-title">{game?.title}</h2>
              <p>{game?.longDescription}</p>
              <p> {game?.category}</p>

              <div className="card-actions justify-start">
                <Link to={`/product-details/${game.title}`}>
                  <button className="btn btn-accent">Explore Details</button>
                </Link>
                <br />

                <Link to={`/gameWatchList`}>
                  <button
                    className="btn btn-accent"
                    onClick={() =>
                      handleAddToWatchList(game, navigate, user.email)
                    }
                  >
                    Add to WishList
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
