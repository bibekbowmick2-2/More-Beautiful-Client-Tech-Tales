import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const Cards = ({ games }) => {
  // const {name,description,picture,ratin} = games;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-2 py-10 bg-[#04020e] ">
      {games.map((game) => (
        <div className="mx-auto w-full pt-5">
          <div className="card bg-[#3f3a5b70] w-11/12 mx-auto shadow-xl rounded-none ">
            <div className="w-[100px] h-[100px]  mx-auto">
              <img class="w-full mx-auto " src={game.thumbnail} alt="Shoes" />
            </div>
            <div className="card-body">
              <h2 className="card-title">{game.title}</h2>
              <p>{game.description}</p>
              <p>Rating: 4.{game.rating}</p>
              <p>Publishing: {game.publishing_year}</p>
              <div className="card-actions justify-start">
                <Link to={`/product-details/${game._id}`}>
                  <button className="btn btn-accent">Explore Details</button>
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
