import React, { useState } from "react";

const HeroSection = () => {
   const images = [
     "/images/herosection/h1.jpg",
     "/images/herosection/h2.jpg",
     "/images/herosection/h3.jpg",
   ];
   const [currentIndex, setCurrentIndex] = useState(0);

   // Handlers for next and previous buttons
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
    <div className="w-full h-[400px] px-10 flex justify-between">
      <div className="hero-left mt-4 w-[48%] flex flex-col justify-center">
        <h5 className="nunito-family text-2xl font-bold text-blue-700">
          Power Your Projects with Ease
        </h5>
        <h3 className="text-6xl font-semibold merri-family mt-6">
          Reliable Generators, Anytime, Anywhere
        </h3>
        <h6 className="text-xl font-semibold nunito-family mt-12">
          Whether it's for construction, events, or emergencies, our top-quality
          generators ensure uninterrupted power supply. Choose from a wide range
          of options tailored to your needs.
        </h6>
      </div>
      <div className="hero-right flex justify-center items-center w-[48%] relative">
        {/* Previous Button */}
        <div
          className="w-10 h-10 bg-[#4361EE] rounded-full absolute top-[50%] -translate-y-[50%] left-10 flex justify-center items-center shadow-xl z-10 cursor-pointer"
          onClick={handlePrev}
        >
          <i className="bx bx-chevron-left text-3xl text-white"></i>
        </div>
        {/* Next Button */}
        <div
          className="w-10 h-10 bg-[#4361EE] rounded-full absolute top-[50%] -translate-y-[50%] right-10 flex justify-center items-center shadow-xl cursor-pointer z-10"
          onClick={handleNext}
        >
          <i className="bx bx-chevron-right text-3xl text-white"></i>
        </div>
        <div className="image-carousel w-[540px] h-[340px] overflow-hidden rounded-xl relative">
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
                className="w-[540px] h-[340px] flex-shrink-0 rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
