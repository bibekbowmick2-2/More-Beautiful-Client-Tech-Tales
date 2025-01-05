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
  const [reviews, setReviews] = React.useState(loaderData);
  const [error, setError] = useState("");





  useEffect(() => {
    const fetchMyReviews = async () => {
      // if (!user?.email) return;
      

      try {
        const timeoutId = setTimeout(async () => {
          const response = await fetch(`https://server-tech-tales.vercel.app/blogs`);
          // console.log(user.email);
          if (!response.ok) {
            throw new Error("Failed to fetch reviews");
          }
          const data = await response.json();
          console.log(typeof(data));
          setReviews(data);

          if(data){
            setLoading(false);

          }
        }, 1000); // 1500 milliseconds delay

        return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
      } catch (err) {
        setError(err.message);
      }

      
      
    };

    fetchMyReviews();
  },[]);




  const genres = [...new Set(loaderData.map((review) => review.category))];

  const handleFilterByGenre = (genre) => {
    console.log(loaderData);
    const filteredByGenre = loaderData.filter((review) => review.category === genre);
    console.log(filteredByGenre);
   

    setReviews(filteredByGenre);
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
        


<div className="dropdown mt-4">
            <div tabIndex="0" role="button" className="btn m-1">
              Filter by Category
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
