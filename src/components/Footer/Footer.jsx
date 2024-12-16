import React from 'react'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32  w-full overflow-hidden ' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start flex gap-4'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
            <img src="/images/navbar/logo.jpg" alt=""  className="w-10 h-10 object-contain " />
            <p className='text-gray-400 mt-4 hover:text-white'>In the present scenario the ‘power’ is the most frequently discussed issue. The power has become the most essential part of the life. Due to changing industrial needs, working and production pressure, the power has become an utmost necessity.</p>

        </div>
        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
            <h3 className='text-white text-lg font-bold mb-4 '>Company</h3>
            <ul className='flex flex-col gap-2 text-gray-400'>
                <a href="#About" className='hover:text-white'>About</a>
                <a href="#Services" className='hover:text-white'>Services</a>
                <a href="#Contact Us" className='hover:text-white'>Contact us</a>
                <a href="#Products" className='hover:text-white'>Products</a>
            </ul>
        </div>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
        <h3 className='text-white text-lg font-bold mb-4 '>Contact Info</h3>
            <p className='text-gray-400 mt-4 hover:text-white'>At. Rajwada, Ward No. 03, Nr. Shiv Mandir, Sahebganj, Dist. Muzaffarpur, Bihar-843125</p>
        </div>
        <div className='w-full md:w-1/3'>
        <h3 className='text-white text-lg font-bold mb-4 hover:text-white'>Get In Touch</h3>
        <div className='text-3xl text-white flex gap-4 '>
        <i class='bx bxl-facebook-square hover:text-white'></i>
        <i class='bx bxl-twitter hover:text-white'></i>
        <i class='bx bxl-linkedin-square hover:text-white'></i>
        <i class='bx bxl-google-plus-circle hover:text-white'></i>
        </div>
        </div>
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500 hover:text-white'>
        @Nexus All Right Reserved.
      </div>
    </div>
  )
}

export default Footer

