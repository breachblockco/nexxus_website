import React, { useState } from "react";

const HeroSection = () => {
  const images = [
    "/images/herosection/h1.jpg",
    "/images/herosection/h2.jpeg",
    "/images/herosection/h3.jpeg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full  py-6 flex flex-col lg:flex-row items-center justify-between gap-8 mt-20 sm:mt-24 lg:mt-28">
     
      <div className="hero-left w-full lg:w-[48%] flex flex-col justify-center text-center lg:text-left">
        <h5 className="nunito-family text-sm sm:text-lg md:text-xl font-bold text-blue-700">
          Power Your Projects with Ease
        </h5>
        <h3 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold merri-family mt-4 lg:mt-6 leading-tight">
         Maximize Productivity with Our Generator Services.
        </h3>
        <h6 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold nunito-family mt-4 lg:mt-8">
        Powering Your World. Construction, events, emergencies – our generators provide reliable power whenever you need it. Choose from a wide selection to find the perfect fit for your project.
        </h6>
      </div>

     
      <div className="hero-right w-full lg:w-[48%] flex justify-center items-center relative">
       
        <div
          className="w-8 h-8 sm:w-10 sm:h-10 bg-[#4361EE] rounded-full absolute top-[50%] -translate-y-[50%] left-4 sm:left-10 flex justify-center items-center shadow-xl z-10 cursor-pointer"
          onClick={handlePrev}
        >
          <i className="bx bx-chevron-left text-sm sm:text-2xl text-white"></i>
        </div>
       
        <div
          className="w-8 h-8 sm:w-10 sm:h-10 bg-[#4361EE] rounded-full absolute top-[50%] -translate-y-[50%] right-4 sm:right-10 flex justify-center items-center shadow-xl z-10 cursor-pointer"
          onClick={handleNext}
        >
          <i className="bx bx-chevron-right text-sm sm:text-2xl text-white"></i>
        </div>
       
        <div className="image-carousel w-full sm:w-[540px] h-[240px] sm:h-[340px] overflow-hidden rounded-xl relative">
          <div
            className="w-full h-full flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0 rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

