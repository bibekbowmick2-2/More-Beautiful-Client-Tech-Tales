import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ContextProvider } from '../AuthProviders/AuthProvider';
import GameWatchListData from './GameWatchListData';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GameWatchList = () => {
    
  const navigate = useNavigate();
  const {user} = useContext(ContextProvider);
 
  const [error, setError] = useState("");

  const  products = useLoaderData();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyReviews = async () => {
      if (!user?.email) return;

      try {
        const timeoutId = setTimeout(async () => {
          const response = await fetch(`https://server-tech-tales.vercel.app/watchlist?email=${user.email}`);
          console.log(user.email);
          if (!response.ok) {
            throw new Error("Failed to fetch reviews");
          }
          const data = await response.json();
          console.log(data);
          setItems(data);

          if(data){
            setLoading(false);

          }
        }, 2000); // 1500 milliseconds delay

        return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
      } catch (err) {
        setError(err.message);
      }

      
      
    };

    fetchMyReviews();
  }, [ items]);
    return (
        <div>
           {
            loading ? <>
            <Skeleton height={100}  count={6}  baseColor="#d5e4e3" highlightColor="#00f7ec"  borderRadius={15}
              className='mt-4 max-w-[1800px] p-10 mx-auto'
            />
          
            </> : <GameWatchListData items={items}/>
           }
           
        </div>
    );
};

export default GameWatchList;