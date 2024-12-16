import { motion } from "framer-motion";
import React from "react";
const Contact = () => {
   
    
  return (
   
    <motion.div 
    initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden  text-white' id="Contact Us">
    <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 decoration-1 under font-light  text-green-500'>With Us</span></h1>
    <p className='text-center text-white mb-12 max-w-80 mx-auto'> Need Reliable Power Solutions? Reach Out to Us Today and Keep Your Operations Running Smoothly with Our Expert Generator Services.</p>
 <form  className='max-w-2xl mx-auto text-gray-600 pt-8'>
  <div className='flex flex-wrap'>
    <div className='w-full md:w-1/2 text-left text-white'>
     Your Name
     <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required/>

    </div>
    <div className='w-full md:w-1/2 text-left md:pl-4 text-white'>
    Your Email
    <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name='Email' placeholder='Your Email' required/>
    </div>
 </div>
 <div className='my-6 text-left text-white'>
    Message
    <textarea className='w-full border border-gray-300 text-black rounded py-3 px-4 mt-2 h-48 resize-none'
    name="Message" placeholder='Message' required></textarea>
 </div>
 <button
        className="bg-blue-600 text-white px-8 py-2 rounded transition-colors duration-200 hover:bg-green-500"
      >
       Submit
      </button>
</form> 
</motion.div>
)
}

export default Contact
