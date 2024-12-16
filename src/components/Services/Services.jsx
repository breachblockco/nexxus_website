import { motion } from "framer-motion";
import React from 'react';
const Services = () => {
  return (
    
     <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 full overflow-hidden text-white' id='Services'>
      <h1 className='text-2xl sm:text-4xl font-bold mt-6 mb-6 '>
        Our <span className='underline underline-offset-4 decoration-1 under font-light  text-green-500'>Services</span>
      </h1>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='w-full text-center'>
          <i className='bx bxs-wrench  text-green-500 text-4xl'></i>
          <h1 className='text-xl font-bold mt-4'>Generator Repairing</h1>
          <p className='text-gray-400 mt-4'>
          We provide a Generator repairing solutions, which are mostly valued for their reliability and durability. Our customers can expect these...
          </p>
        </div>
        <div className='w-full text-center'>
          <i className='bx bxs-cog  text-green-500 text-4xl'></i>
          <h1 className='text-xl font-bold mt-4'>Generator on Hire</h1>
          <p className='text-gray-400 mt-4'>
          If you want to hire generators for a week, or book the whole fleet out on a l basis...
          </p>
        </div>
        <div className='w-full text-center'>
          <i className='bx bxs-edit text-green-500 text-4xl'></i>
          <h1 className='text-xl font-bold mt-4'>Annual Maintenance Contract</h1>
          <p className='text-gray-400 mt-4'>
          We offer DG set maintenance for different type of generators. Our vast experience in the field of generators has provided...
          </p>
        </div>
        <div className='w-full text-center'>
          <i className='bx bxs-extension text-green-500 text-4xl'></i>
          <h1 className='text-xl font-bold mt-4'>DG Set Hiring</h1>
          <p className='text-gray-400 mt-4'>
          We are a prominent organization engaged in offering DG sets that are widely used in houses, offices and...
          </p>
        </div>
        <div className='w-full text-center'>
          <i className='bx bxs-bolt  text-green-500 text-4xl'></i>
          <h1 className='text-xl font-bold mt-4'>Emergency Power</h1>
          <p className='text-gray-400 mt-4'>
          If you have lost your electricity supply and need power fast then you’ve come to the right place. Whether you...
          </p>
        </div>
        <div className='w-full text-center'>
          <i className='bx bx-equalizer  text-green-500 text-4xl'></i>
          <h1 className='text-xl font-bold mt-4'>Silent Diesel Generators</h1>
          <p className='text-gray-400 mt-4'>
          Eco friendly power : The silent diesel gen set is CPCB Certified for emission norms as well as permissible noise limit....
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Services

