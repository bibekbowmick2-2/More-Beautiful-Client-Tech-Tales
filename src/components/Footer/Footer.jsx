import React from 'react';
import dragonbg from '../../assets/footerbg.jpg';

const Foooter = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${dragonbg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="text-white"
    >
      <footer className="footer footer-center   text-base-content p-4 rounded-t-xl mt-2">
        
        <nav className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <a className="link link-hover text-lg hover:underline hover:text-orange-400 text-white transition duration-300">About Us</a>
          <a className="link link-hover text-lg hover:underline hover:text-orange-400 text-white transition duration-300">Contact</a>
          <a className="link link-hover text-lg hover:underline hover:text-orange-400 text-white transition duration-300">Jobs</a>
          <a className="link link-hover text-lg hover:underline hover:text-orange-400 text-white transition duration-300">Press Kit</a>
        </nav>

        
        

        <nav>
  <div className="flex justify-center items-center gap-10 mt-6">
    
    <a className="bg-[#1DA1F2] p-4 rounded-full hover:bg-white transition duration-300 group">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        className="fill-white group-hover:fill-[#1DA1F2]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.86 9.86 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.723 0-4.932 2.208-4.932 4.932 0 .386.044.763.127 1.124C7.728 8.882 4.1 6.89 1.671 3.914a4.902 4.902 0 0 0-.666 2.478c0 1.71.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.23-.616v.063c0 2.385 1.693 4.374 3.946 4.827a4.935 4.935 0 0 1-2.224.084c.626 1.956 2.444 3.379 4.6 3.419a9.875 9.875 0 0 1-6.102 2.105c-.396 0-.787-.023-1.17-.069a13.945 13.945 0 0 0 7.557 2.212c9.054 0 14-7.496 14-13.986 0-.213-.005-.425-.014-.637A9.936 9.936 0 0 0 24 4.557z" />
      </svg>
    </a>

    
    <a className="bg-[#FF0000] p-4 rounded-full hover:bg-white transition duration-300 group">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        className="fill-white group-hover:fill-[#FF0000]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.03 5.804 0 12c.03 6.185.488 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.267 4.356-2.62 4.385-8.816-.029-6.185-.488-8.549-4.385-8.816zM9 15.516v-7.032l6.6 3.516L9 15.516z" />
      </svg>
    </a>


    <a className="bg-[#1877F2] p-4 rounded-full hover:bg-white transition duration-300 group">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        className="fill-white group-hover:fill-[#1877F2]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24h-1.919c-1.505 0-1.796.716-1.796 1.763v2.314h3.587l-.467 3.696h-3.12V24h6.116C23.406 24 24 23.406 24 22.676V1.325C24 .593 23.406 0 22.675 0z" />
      </svg>
    </a>
  </div>
</nav>


      </footer>

    
      <div className=" backdrop-blur-md text-center py-4">
        <p className="text-md md:text-lg text-white">
          © {new Date().getFullYear()} — All rights reserved by <span className="font-semibold text-orange-400">ACME Industries Ltd.</span>
        </p>
      </div>
    </div>
  );
};

export default Foooter;
