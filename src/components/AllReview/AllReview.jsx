import React from "react";
import "./CustomerSection.css";
import { useLoaderData } from "react-router-dom";
import Card from "../Cards/Card";
// import caro4 from '../../assets/caro-2 (3).jpg'


const AllReview = () => {
  const loaderData = useLoaderData(); 

 
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
        
        </div>

        <Card reviews={reviews}> </Card>
        
      </div>
    </header>
  );
};

export default AllReview;
