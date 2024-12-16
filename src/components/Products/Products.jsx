import { motion } from "framer-motion";
import React from 'react';
import { VscSettings } from 'react-icons/vsc';
import { Products as productData } from '../constant/data';

const Products = () => {
  return (
    <motion.section 
    initial={{ opacity: 0, x: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="max-padd-container pb-16 xl:pb-32 pt-14" id="Products">
      <div className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 full overflow-hidden text-white">
        <div className="flex items-center space-x-11">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Our{' '}
            <span className="underline underline-offset-4 decoration-1 font-light  text-green-500">
              Products
            </span>
          </h1>
          <a
            href="/"
            className="text-3xl bg-tertiary rounded-md h-10 w-10 p-2 text-white flex items-center justify-center"
          >
            <VscSettings />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productData.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-col items-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-40 object-cover mb-4"
              />
              <h4 className="text-lg font-bold">{product.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Products;

