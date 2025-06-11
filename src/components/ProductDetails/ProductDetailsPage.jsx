import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ContextProvider } from "../AuthProviders/AuthProvider";

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const { handleAddToWatchList, user, handleComment } = useContext(ContextProvider);
  const [comments, setComments] = useState([]);
  const games = useLoaderData();
  const { title } = useParams();

  const product = games.find((game) => game.title === title);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://server-tech-tales.vercel.app/comment/${product?._id}`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (product?._id) {
      fetchComments();
    }
  }, [product?._id]);

  if (!product) {
    return (
      <div className="container mx-auto py-10 text-center text-red-500">
        <h1>Product Not Found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-full mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#080325]">
      {/* Left Section - Image */}
      <div className="flex justify-center items-center gap-y-0 lg:gap-y-3">
        <img className="rounded-2xl shadow-lg w-full max-w-md mt-20 lg:mt-0" src={product.image} alt={product.title} />
      </div>

      {/* Right Section - Content */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-indigo-600 dark:text-white mt-20">{product.title}</h1>
        <div className="flex items-center space-x-1 text-yellow-400">
          {[...Array(4)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
          <i className="fas fa-star-half-alt"></i>
        </div>

        <div className="text-white dark:text-gray-300">
          <h2 className="text-xl font-semibold">About this item:</h2>
          <p>{product.longDescription}</p>
          <ul className="mt-4 space-y-2">
            <li><strong>Category:</strong> {product.category}</li>
            <li><strong>Description:</strong> {product.shortDescription}</li>
            <li><strong>Status:</strong> In Stock</li>
          </ul>
        </div>

        {user?.email === product?.email && (
          <div className="flex gap-4">
            <Link to={`/update/${product._id}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Update</Link>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input type="number" min="1" defaultValue="1" className="border rounded px-4 py-2 w-24" />
          <button
            onClick={() => handleAddToWatchList(product, navigate, user.email)}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Add to WatchList
          </button>
        </div>

        <form onSubmit={(e) => handleComment(e, navigate, product._id)} className="mt-6">
          <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-700 dark:text-white">Your Comment</label>
          <textarea
            id="comment"
            name="comment"
            rows="4"
            disabled={user?.email === product?.email}
            placeholder={user?.email === product?.email ? "You cannot comment on your own product" : "Write a comment..."}
            className="w-full p-4 border rounded-lg dark:bg-gray-700 dark:text-white"
            required
          ></textarea>
          <button
            type="submit"
            disabled={user?.email === product?.email}
            className={`mt-2 px-4 py-2 rounded-lg text-white transition ${user?.email === product?.email ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          >
            {user?.email === product?.email ? "Cannot Post Comment" : "Post Comment"}
          </button>
        </form>

        <div className="mt-10 bg-white dark:bg-gray-800 border rounded-lg p-6 shadow">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">Latest Comments</h2>
          <ul className="space-y-4">
            {comments.map((comment) => (
              <li key={comment._id} className="flex items-start space-x-4">
                <img className="w-10 h-10 rounded-full" src={comment?.photoURL} alt="User avatar" />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">{comment?.email}</p>
                  <p className="text-gray-600 dark:text-gray-300">Comment: {comment?.comment}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 text-gray-500 text-sm">
          Remember, contributions to this topic should follow our
          <a href="#" className="text-blue-600 hover:underline ml-1">Community Guidelines</a>.
        </div>

        <div className="mt-6 flex space-x-4 text-green-500">
          <span className="text-white dark:text-white">Share at:</span>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
          <a href="#"><i className="fab fa-pinterest"></i></a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
