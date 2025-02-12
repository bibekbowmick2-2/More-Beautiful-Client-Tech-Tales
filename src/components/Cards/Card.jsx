import React, { useContext, useEffect, useState } from "react";
import Card1 from "../../assets/Card-1 (2).png";
import { ContextProvider } from "../AuthProviders/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
const Card = ({ reviews }) => {
  
  const { user, handleDelete,handleAddToWatchList } = useContext(ContextProvider);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [results, setResults] = useState(reviews);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  console.log(typeof(reviews));


 useEffect(() => {
  setResults(reviews);

 },[reviews]);


// useEffect(() => {
//   if (Array.isArray(reviews)) {
//     setResults(reviews);
//   } else {
//     alert("Invalid data format: Reviews should be an array.");
//     console.error("Invalid data format: Reviews should be an array.");
//   }


//  },[reviews]);
  

  if (!results || results.length === 0) {
    return (
      <p className="text-orange-200 font-extrabold text-5xl">
        No blogs available
      </p>
    );
  }


 


  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) {
      setError('Please enter a search query.');
      return;
    }

  

    setError('');
    setLoading(true);
    try {
      const response = await axios.get(`https://server-tech-tales.vercel.app/search?q=${query}`,{
        timeout: 8000,
      });
      setResults(response.data);
      console.log(response.data);
    } catch (err) {
      setError('Error fetching data. Please try again.');
    } finally {
      setLoading(false);
    }

  }

  return (
    <div className="container__right">


    
<form class="flex items-center w-[330px] mx-auto" onSubmit={handleSearch}>   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg>
        </div>
        <input onChange={(e) => setQuery(e.target.value)} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Category" required />
    </div>
    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
    </button>
</form>

{loading? <div role="status">
    <svg aria-hidden="true" class="-mt-80 ml-80 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>:
<>
{results.map((review, index) => (
        <div key={index} className="card w-11/12 mx-auto">
          <div class="avatar">
            <div class="w-12">
              <img src={review?.image} alt="BKB" />
            </div>
          </div>

          <p className="">{review?.title}</p>
          <div className="card__content ">
          <p>{review?.shortDescription || "Short description not available"}</p>
           

            <span>
              <i className="ri-double-quotes-l"></i>
            </span>
          </div>
          <div className="card__details">
          <p>{review?.longDescription || "Long description not available"}</p>
          <p>{review?.category || "Category not specified"}</p>


            <div className="flex gap-2 ">
            <Link to={`/product-details/${review.title}`}>
                  <button className="btn btn-accent">Explore Details</button>
                </Link>


                <Link to={`/gameWatchList`}>
                  <button
                    className="btn btn-accent"
                    onClick={() =>
                      handleAddToWatchList(review, navigate, user.email)
                    }
                  >
                    Add to WishList
                  </button>
                </Link>
                </div>

                
            {user?.email === review?.email && (
              <div className="flex gap-14">
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
           
               <h4 className="ml-0 text-black">Written By:{user?.displayName}</h4>
           
           
          </div>
        </div>
      ))}
</>

}
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}





    


      
    </div>
  );
};

export default Card;
