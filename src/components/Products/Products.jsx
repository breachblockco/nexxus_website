
import React, { useEffect, useRef, useState } from "react";
import { Products as productData } from "../constant/data";

const Products = () => {
  const [itemsPerPage, setItemsPerPage] = useState(3); // Items visible at a time
  const [currentIndex, setCurrentIndex] = useState(0); // Current index of the slider
  const productRefs = useRef([]); // References for each product card

  // Adjust itemsPerPage based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const handleNext = () => {
    if (currentIndex + itemsPerPage < productData.length) {
      const nextIndex = currentIndex + itemsPerPage;
      setCurrentIndex(nextIndex);

      if (productRefs.current[nextIndex]) {
        productRefs.current[nextIndex].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerPage >= 0) {
      const prevIndex = currentIndex - itemsPerPage;
      setCurrentIndex(prevIndex);

      if (productRefs.current[prevIndex]) {
        productRefs.current[prevIndex].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  };

  const visibleProducts = productData.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section
      className="flex flex-col items-start justify-between pt-6 w-full overflow-hidden text-black my-4"
      id="Products"
    >
      <h2 className="text-lg sm:text-3xl lg:text-5xl font-non-italic w-full my-2 merri-family text-blue-700 font-semibold text-center">
        Our Products
      </h2>
      <p className="text-sm sm:text-xl lg:text-3xl font-bold mt-3 mb-5 nunito-family w-full text-center">
        Explore Our Wide Range of Power Generators
      </p>

      <div className="relative w-full py-10 overflow-hidden">
        {/* Previous Button */}
        <button
          className={`w-10 h-10 bg-[#4361EE] rounded-full absolute top-[50%] -translate-y-[50%] left-5 flex justify-center items-center shadow-xl z-10 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <i className="bx bx-chevron-left text-3xl text-white"></i>
        </button>

        {/* Carousel Container */}
        <div className="flex gap-6 sm:gap-10 w-full py-6 justify-center overflow-hidden">
          {visibleProducts.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (productRefs.current[currentIndex + index] = el)}
              className="bg-white rounded-[10px] sm:rounded-[10px] shadow-lg p-4 sm:p-6 text-center hover:shadow-2xl transition-shadow duration-300 w-[300px] sm:w-[370px] h-[360px] sm:h-[450px]"
            >
              <div className="flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 sm:h-48 w-40 sm:w-48 object-cover mb-4"
                />
                <h4 className="text-lg sm:text-2xl font-bold text-blue-700 nunito-family">
                  {product.title}
                </h4>
                <p className="text-sm sm:text-base mt-3">
                  {product?.desc?.slice(0, 200) || "Description not available"}...
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          className={`w-10 h-10 bg-[#4361EE] rounded-full absolute top-[50%] -translate-y-[50%] right-5 flex justify-center items-center shadow-xl z-10 ${
            currentIndex + itemsPerPage >= productData.length
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={handleNext}
          disabled={currentIndex + itemsPerPage >= productData.length}
        >
          <i className="bx bx-chevron-right text-3xl text-white"></i>
        </button>
      </div>
    </section>
  );
};

export default Products;

