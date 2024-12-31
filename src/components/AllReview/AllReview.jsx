import React, { useEffect, useState } from "react";
import "./CustomerSection.css";
import { useLoaderData } from "react-router-dom";
import Card from "../Cards/Card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import caro4 from '../../assets/caro-2 (3).jpg'


const AllReview = () => {
  const [loading, setLoading] = useState(true);
    
  const loaderData = useLoaderData(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loaderData) {
        setLoading(false);
      }
     
    }, 1500);
    return () => clearTimeout(timer);
  }, []);




 
  const reviewm = Array.isArray(loaderData) ? loaderData : loaderData.reviews || [];
  const [reviews, setReviews] = React.useState(reviewm);


  const genres = [...new Set(reviewm.map((review) => review.genre))];

  const handleFilterByGenre = (genre) => {
    const filteredByGenre = reviewm.filter((review) => review.genre === genre);
    setReviews(filteredByGenre);
  };



  const handleSortByRating = () => {
    const sortedByRating = [...reviews].sort((a, b) => b.rating - a.rating);
    setReviews(sortedByRating);
  };

  const handleSortByYear = () => {
    const sortedByYear = [...reviews].sort((a, b) => new Date(b.publishing_year) - new Date(a.publishing_year));
    setReviews(sortedByYear);
  };
   
  return (
    <header className="header">
      <div className="container">
        <div className="container__left ">
        {
          loading ? (
            <>
            <Skeleton height={100}  baseColor="#bab4b2"  borderRadius={15}/>
            <Skeleton height={200}   baseColor="#bab4b2" borderRadius={15}/>
            <Skeleton height={100}  baseColor="#bab4b2"  borderRadius={15}/>
            </>
          
          ) : (

            <>
            <h1>Read what our customers love about us</h1>
          <p>
            Over 200 companies from diverse sectors consult us to enhance the
            user experience of their products and services.
          </p>
          <p>
            We have helped companies increase their customer base and generate
            multifold revenue with our service.
          </p>
          <button>Read our success stories</button><br/><br/>
          <div class="dropdown">
  <div tabindex="0" role="button" class="btn m-1">Sort by Rating and Publishing Year</div>
  <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><button onClick={handleSortByRating}>Sort By Rating</button></li><br/>
    <li><button onClick={handleSortByYear}>Sort By Year</button></li>
  </ul>
</div>


<div className="dropdown mt-4">
            <div tabIndex="0" role="button" className="btn m-1">
              Filter by Genre
            </div>
            <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              {genres.map((genre) => (
                <li key={genre}>
                  <button onClick={() => handleFilterByGenre(genre)}>{genre}</button>
                </li>
              ))}
            </ul>
          </div>
            </>
          )
        }
       
         
        
        </div>

        {loading ? (
         
          <Skeleton count={reviews.length} height={300} width={600}  borderRadius={15}  baseColor="#bab4b2" className="w-full mb-4" />
          
        ) : (
          <Card reviews={reviews} />
        )}
        
      </div>
    </header>
  );
};

export default AllReview;
