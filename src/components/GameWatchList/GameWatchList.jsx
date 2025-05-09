import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ContextProvider } from '../AuthProviders/AuthProvider';
import GameWatchListData from './GameWatchListData';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const GameWatchList = () => {
  const navigate = useNavigate();
  const { user } = useContext(ContextProvider);
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyReviews = async () => {
      if (!user?.email) return;
      try {
        const response = await fetch(
          `https://server-tech-tales.vercel.app/watchlist?email=${user.email}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        const data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMyReviews();
  }, [user.email]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10 ">
      {loading ? (
        <Skeleton height={100} count={6} baseColor="#1f2937" highlightColor="#374151" borderRadius={10} className='mb-4' />
      ) : error ? (
        <div className="text-center text-red-500 font-bold">{error}</div>
      ) : (
        <GameWatchListData items={items} />
      )}
    </div>
  );
};

export default GameWatchList;

