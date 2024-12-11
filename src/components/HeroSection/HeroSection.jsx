import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function HeroSection() {
  const [index, setIndex] = useState(0);

  // Change the index every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);
  const images = [
    "/images/herosection/img1.jpg",
    "/images/herosection/img2.jpg",
    "/images/herosection/img3.jpg",
    "/images/herosection/img4.jpg",
  ];
  return (
    <div className="w-full h-screen absolute left-0 top-0 ovex">
      <motion.div
        key={index} // Make sure to animate the new element
        className="w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[index]})`,
        }}
        initial={{ opacity: 0 }} // Start with opacity 0 (invisible)
        animate={{ opacity: 1 }} // Animate to opacity 1 (visible)
        exit={{ opacity: 0 }} // Exit animation (optional)
        transition={{ duration: 1 }} // Set the fade-in duration
      />
    </div>
  );
}

export default HeroSection;
