import React, { useState, useRef } from "react";
import { Products as productData } from "../constant/data";

const Products = () => {
  const itemsPerPage = 3; // Number of items visible at a time
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current index
  const productRefs = useRef([]); // Ref to store product elements

  const handleNext = () => {
    if (currentIndex + itemsPerPage < productData.length) {
      const nextIndex = currentIndex + itemsPerPage;
      setCurrentIndex(nextIndex);

      // Scroll the 4th product in the new group into view (nextIndex + 3)
      if (productRefs.current[nextIndex + 3]) {
        productRefs.current[nextIndex + 3].scrollIntoView({
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

      // Scroll the 4th product in the previous group into view (prevIndex + 3)
      if (productRefs.current[prevIndex + 3]) {
        productRefs.current[prevIndex + 3].scrollIntoView({
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
      className="flex flex-col items-start justify-between px-10 w-full overflow-hidden text-black my-4"
      id="Products"
    >
      <h2 className="text-lg sm:text-5xl font-non-italic w-full my-2 merri-family text-blue-700 font-semibold text-center">
        Our Products
      </h2>
      <p className="text-lg sm:text-3xl font-bold mt-3 mb-5 nunito-family w-full text-center">
        Explore Our Wide Range of Power Generators
      </p>

      <div className="relative w-full py-10">
        {/* Previous Button */}
        <div
          className={`w-10 h-10 bg-[#4361EE] rounded-full absolute top-[50%] -translate-y-[50%] left-5 flex justify-center items-center shadow-xl z-10 cursor-pointer ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handlePrev}
        >
          <i className="bx bx-chevron-left text-3xl text-white"></i>
        </div>

        {/* Carousel Container */}
        <div className="flex gap-10 w-full justify-center">
          {visibleProducts.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (productRefs.current[currentIndex + index] = el)} // Assign ref to each product
              className="bg-white rounded-[30px] shadow-lg p-4 text-center hover:shadow-2xl transition-shadow duration-300 w-[370px] h-[420px]"
            >
              <div className="flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 w-48 object-cover mb-4"
                />
                <h4 className="text-2xl font-bold text-blue-700 nunito-family">{product.title}</h4>
                <p className="mt-5">
                  {product?.desc?.slice(0,200) || "Description not available"}...
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div
          className={`w-10 h-10 bg-[#4361EE] rounded-full absolute top-[50%] -translate-y-[50%] right-5 flex justify-center items-center shadow-xl z-10 cursor-pointer ${
            currentIndex + itemsPerPage >= productData.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={handleNext}
        >
          <i className="bx bx-chevron-right text-3xl text-white"></i>
        </div>
      </div>
    </section>
  );
};

export default Products;
