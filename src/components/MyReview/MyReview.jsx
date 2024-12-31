
import React, { useContext, useEffect, useState } from "react";
import "../AllReview/CustomerSection.css";
import { useLoaderData } from "react-router-dom";
import Card from "../Cards/Card";
import  { ContextProvider } from "../AuthProviders/AuthProvider";


const MyReview = () => {
  // const loaderData = useLoaderData(); 
  // const reviews = Array.isArray(loaderData) ? loaderData : loaderData.reviews || [];

  const { user,reviews, setReviews} = useContext(ContextProvider);
  // const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMyReviews = async () => {
      if (!user?.email) return;

      
      try {
        const response = await fetch(`https://game-server-woad.vercel.app/my-review?email=${user.email}`);
        console.log(user.email)
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMyReviews();
  }, [user]);
   
  return (
    <header className="header">
      <div className="container">
        <div className="container__left">
          <h1>Read what our customers love about us</h1>
          <p>
            Over 200 companies from diverse sectors consult us to enhance the
            user experience of their products and services.
          </p>
          <p>
            We have helped companies increase their customer base and generate
            multifold revenue with our service.
          </p>
          <button>Read our success stories</button>
        </div>

        <Card reviews={reviews}> </Card>
        
      </div>
    </header>
  );
};

export default MyReview;
