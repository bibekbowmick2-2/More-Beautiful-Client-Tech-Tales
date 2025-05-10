
import React, { useContext } from 'react';
import { ContextProvider } from '../AuthProviders/AuthProvider';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const GameWatchListData = ({ items }) => {
  const { user, handleWishDelete } = useContext(ContextProvider);

  if (!items || items.length === 0) {
    return (
      <div className="min-h-[60vh] flex justify-center items-center">
        <p className="text-3xl font-bold text-gray-500">No WatchList Available</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg mt-10">
      <table className="table-auto w-full text-left">
        <thead className="bg-[#0e0544] text-white">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Short Description</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-gray-700">
          {items.map((review, index) => (
            <tr key={index} className="hover:bg-gray-600">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">
                <PhotoProvider>
                  <PhotoView src={review?.image}>
                    <img src={review?.image} alt="" className="h-12 w-12 rounded-lg" />
                  </PhotoView>
                </PhotoProvider>
              </td>
              <td className="px-4 py-2">{user?.displayName}</td>
              <td className="px-4 py-2">{review?.title}</td>
              <td className="px-4 py-2">{review?.email}</td>
              <td className="px-4 py-2">{review?.shortDescription}</td>
              <td className="px-4 py-2">{review?.category}</td>
              <td className="px-4 py-2 flex gap-2">
                <Link to={`/product-details/${review.title}`} className="btn btn-sm btn-primary">Details</Link>
                <button className="btn btn-sm btn-error" onClick={() => handleWishDelete(review?._id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export  default GameWatchListData;