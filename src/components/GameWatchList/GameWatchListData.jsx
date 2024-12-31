import React from 'react'

export default function GameWatchListData({items}) {

    if (!items || items.length === 0) {
        return (
            <div className='min-h-lvh bg-[#9eb3e1]  flex justify-center items-center'>
                <p className="text-orange-200 font-extrabold text-5xl ">
            No WatchList available
          </p>
            </div>
          
        );
      }
  return (
    <div className=" overflow-x-scroll overflow-y-scroll lg:overflow-auto  bg-[#9eb3e1] mt-6 min-h-screen lg:min-h-lvh ">
    <table className="table table-xs ">
      <thead>
        <tr>
          <th className='lg:font-extrabold lg:text-2xl'>Serial No</th>
          <th className='lg:font-extrabold lg:text-2xl'>Thumbnail</th>
          <th className='lg:font-extrabold lg:text-2xl'>Name</th>
          <th className='lg:font-extrabold lg:text-2xl'>Title</th>
          <th className='lg:font-extrabold lg:text-2xl'>Email</th>
          <th className='lg:font-extrabold lg:text-2xl'>Rating</th>
          <th className='lg:font-extrabold lg:text-2xl'>Publishing_year</th>
          <th className='lg:font-extrabold lg:text-2xl'>Description</th>
          <th className='lg:font-extrabold lg:text-2xl'>genre</th>
          
        </tr>
      </thead>
      <tbody>
      {
        items.map((review, index) => (
          <tr key={index}>
            <th className='lg:font-extrabold'>{index + 1}</th>
            <td>
          <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle h-12 w-12">
                <img
                  src={review?.thumbnail}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td>
            <td className='lg:font-extrabold'>{review?.name}</td>
            <td className='lg:font-extrabold'>{review?.title}</td>
            <td className='lg:font-extrabold'>{review?.email}</td>
            <td className='lg:font-extrabold'>{review?.rating}</td>
            <td className='lg:font-extrabold'>{review?.publishing_year}</td>
            <td className='lg:font-extrabold'>{review?.description}</td>
            <td className='lg:font-extrabold'>{review?.genre}</td>
          </tr>
        ))
      }
        
        
      </tbody>
     
    </table>
  </div>
  )
}
