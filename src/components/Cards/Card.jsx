import React, { useContext } from "react";
import Card1 from "../../assets/Card-1 (2).png";
import { ContextProvider } from "../AuthProviders/AuthProvider";
import { Link } from "react-router-dom";
const Card = ({ reviews }) => {
  const { user, handleDelete } = useContext(ContextProvider);

  if (!reviews || reviews.length === 0) {
    return (
      <p className="text-orange-200 font-extrabold text-5xl">
        No reviews available
      </p>
    );
  }

  return (
    <div className="container__right">
      {reviews.map((review, index) => (
        <div key={index} className="card w-11/12 mx-auto">
          <div class="avatar">
            <div class="w-12">
              <img src={review?.thumbnail} alt="" />
            </div>
          </div>

          <p className="">{review?.publishing_year}</p>
          <div className="card__content ">
            <p>{review?.rating}</p>
            <p>{review?.genre}</p>

            <span>
              <i className="ri-double-quotes-l"></i>
            </span>
          </div>
          <div className="card__details">
            <p>{review?.description}</p>
            {user?.email === review?.email && (
              <div className="flex gap-3">
                <Link to={`/update/${review._id}`} className="btn btn-primary">
                  Update
                </Link>

                <button
                  className="btn btn-error"
                  onClick={() => handleDelete(review._id)}
                >
                  Delete
                </button>
              </div>
            )}
           
               <h4 className="ml-0">Written By:{review?.name}</h4>
           
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
