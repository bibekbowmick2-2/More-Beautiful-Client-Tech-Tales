import React, { useState, useEffect } from "react";
import caro1 from "../../assets/premium_photo-1666264877258-7699094695e4.avif";
import caro2 from "../../assets/photo-1549189189-c26639dfc999.avif";
import caro3 from "../../assets/premium_photo-1671485867703-3a9057260f4b.avif";
import caro4 from "../../assets/photo-1670965247544-faebfc2bf09c.avif";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [caro1, caro2, caro3, caro4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative mx-auto w-full h-[400px] md:h-[400px] lg:h-[600px] lg:max-w-11/12 overflow-hidden">
      <div
        className="h-full flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          width: `${slides.length * 25}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative ">
            <img src={slide} alt={`Slide ${index}`} className="w-1/2 lg:w-auto h-full object-center object-cover " />
            <div className="absolute top-[50%] left-[75%] lg:left-[60%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-1/2">
              <h1 className="text-2xl lg:text-5xl font-bold">
              Tech-Tales: A Bloging Application{" "}
                {index>=0 && (
                  <span style={{ color: "red", fontWeight: "bold" }}>
                    <Typewriter
                      words={["Play", "Build", "Enjoy", "Repeat"]}
                      loop={true}
                      cursor
                      cursorStyle="!!!!"
                      typeSpeed={140}
                      deleteSpeed={70}
                      delaySpeed={1000}
                    />
                  </span>
                )}
              </h1>
              <p className="py-6 text-xl">
                "Are you ready to level up your bloging experience? 
              
              </p>
              <button className="btn bg-lime-400">Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
