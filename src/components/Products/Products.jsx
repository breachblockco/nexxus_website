import React from 'react';

import { Products as productData } from '../constant/data';

const Products = () => {
  return (
    <section  className="flex flex-col items-center justify-center container mx-20px   p-14 md:px-20 lg:px-32 full overflow-hidden text-black bg-[#D4D4D4]" id='Products'>
     <div className="flex-1">
            <h4 className="text-blue-500 text-sm font-not-italic tracking-wider mb-2">
              CHECKOUT OUR NEW
            </h4>
            <h2 className="text-gray-800 text-4xl font-bold mb-4 leading-snug">
             Latest Listed Products
            </h2>
            <p className="text-gray-500  text-xl leading-relaxed mb-8">
            Reliable Power Solutions for Every Need – Discover Our Range of High-Performance Generators!
            </p>
  
           </div>
       




      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productData.map((product) => (
          <div key={product.id} className="bg-white rounded-[30px] shadow-lg p-4 text-center hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col items-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-40 object-cover mb-4"
              />
              <h4 className="text-lg font-italic">{product.title}</h4>
              <h4 className="text-lg font-bold ">{product.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

