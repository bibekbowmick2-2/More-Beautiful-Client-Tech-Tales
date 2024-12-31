import React, { useContext } from "react";
import "./ProductDetailsPage.css";
import dragonbg from '../../assets/shoe_1.jpg'
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { ContextProvider } from "../AuthProviders/AuthProvider";

const ProductDetailsPage = () => {

  const navigate = useNavigate();
  const {handleAddToWatchList,user} = useContext(ContextProvider);

  const  games = useLoaderData();

  const { id } = useParams(); 
  console.log(id);

  // Find the specific product based on the ID
  const product = games.find((game) => game._id === id);

  if (!product) {
    return (
      <div className="container mx-auto py-10 text-center text-red-500">
        <h1>Product Not Found</h1>
      </div>
    );
  }



  return (
    <div className="card1-wrapper">
      <div className="card1 card2">
        {/* Card Left */}
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase ">
              <img className="rounded-full" src={product.thumbnail} alt="Shoe 1" />
              {/* <img src="/shoes_images/shoe_2.jpg" alt="Shoe 2" />
              <img src="/shoes_images/shoe_3.jpg" alt="Shoe 3" />
              <img src="/shoes_images/shoe_4.jpg" alt="Shoe 4" /> */}
            </div>
          </div>
          <div className="img-select">
            {/* <div className="img-item">
              <a href="#" data-id="1">
                <img src={dragonbg} alt="Shoe 1" />
              </a>
            </div> */}
            
          </div>
        </div>

        {/* Card Right */}
        <div className="product-content">
          <h2 className="product-title text-color">{product.title}</h2>
          {/* <a href="#" className="product-link">
            Visit Nike Store
          </a> */}
          <div className="product-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span className="bg-white p-2 rounded-full ">4.{product.rating}</span>
          </div>

          <div className="product-price">
            {/* <p className="last-price text-color">
              Old Price: <span>$257.00</span>
            </p>
            <p className="new-price text-color">
              New Price: <span>$249.00 (5%)</span>
            </p> */}
          </div>

          <div className="product-detail">
            <h2 className="text-slate-100">About this item:</h2>
            <p className="text-color">
              {product.description}
            </p>
            
            <ul className="text-color">
              <li>
                Publishing year: <span>{product.publishing_year}</span>
              </li>
              <li>
                Available: <span>In Stock</span>
              </li>
              <li>
               Genre : <span>{product.genre}</span>
              </li>
              
            </ul>
          </div>

          <div className="purchase-info">
            <input type="number" min="0" value="1" />
            <button type="button" className="btn" onClick={() => handleAddToWatchList(product,navigate,user.email)}>
              Add to WatchList <i className="fas fa-shopping-cart"></i>
            </button>
            {/* <button type="button" className="btn">Compare</button> */}
          </div>

          <div className="social-links">
            <p className="text-color">Share At: </p>
            <a href="#">
              <i className="fab fa-facebook-f  text-green-400 "></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter text-green-400"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram text-green-400"></i>
            </a>
            <a href="#">
              <i className="fab fa-whatsapp text-green-400"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest text-green-400"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
