import React from 'react'

const Footer = () => {
  return (
    <div className=' overflow-hidden w-full bg-white py-16 px-4 md:px-10 lg:px-20 ' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start bg-white  text-black gap-12'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src="/images/navbar/logo.png" alt=""  className="w-20 h-20 object-contain " />
            <p className='text-black mt-4 hover:text-gray-500'>In the present scenario the ‘power’ is the most frequently discussed issue. The power has become the most essential part of the life. Due to changing industrial needs, working and production pressure, the power has become an utmost necessity.</p>

        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-black text-lg font-bold mb-4 '>Company</h3>
            <ul className='flex flex-col gap-2 text-black'>
                <a href="#About" className='hover:text-gray-500'>About</a>
                <a href="#Services" className='hover:text-gray-500'>Services</a>
                <a href="#Contact Us" className='hover:text-gray-500'>Contact us</a>
                <a href="#Products" className='hover:text-gray-500'>Products</a>
            </ul>
        </div>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
        <h3 className='text-black text-lg font-bold mb-4 '>Contact Info</h3>
            <p className='text-black mt-4 hover:text-gray-500'>At. Rajwada, Ward No. 03, Nr. Shiv Mandir, Sahebganj, Dist. Muzaffarpur, Bihar-843125</p>
        </div>
        <div className='w-full md:w-1/3'>
        <h3 className='text-black text-lg font-bold mb-4'>Get In Touch</h3>
        <div className='text-3xl text-blue-500 flex gap-4 '>
        <i class='bx bxl-facebook-square hover:text-gray-500'></i>
        <i class='bx bxl-twitter hover:text-gray-500'></i>
        <i class='bx bxl-linkedin-square hover:text-gray-500'></i>
        <i class='bx bxl-google-plus-circle hover:text-gray-500'></i>
        </div>
        <br></br>
        <h3 className='text-black text-lg font-bold mb-4 '>Subscribe to our Newsletter!</h3>
        <div className="max-w-lg mx-auto">
        <div className="relative">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-full border border-gray-300 py-3 pl-6 pr-16 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-blue-500">
            <i className="bx bx-right-arrow-alt text-xl"></i>
          </button>
        </div>
      </div>
        </div>
      </div>
      <div className=' bg-blue-600 top-2 py-4 mt-200 w-full text-center text-white hover:text-white '>
        @Nexus All Right Reserved.
      </div>
    </div>
  )
}

export default Footer

