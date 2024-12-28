import React from 'react';
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoCall, IoLocationSharp, IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <div
      className="overflow-hidden w-full bg-[#F7F7F7] mt-16 px-6 md:px-14 flex flex-col md:flex-row h-auto md:h-[350px] gap-10 md:gap-20 py-10"
      id="Footer"
    >
     
      <div className="w-full md:w-[30%]">
        <div className="w-[40%] md:w-[10vw] h-auto mb-6 md:mb-8 flex items-center">
          <img
            src="/images/navbar/logo.png"
            className="object-contain max-h-[80px] max-w-full"
            alt="Logo"
          />
        </div>
        <h5 className="text-left text-sm md:text-base">
          At Nexxus Power Systems, we specialize in delivering reliable
          generator rental solutions for industrial and domestic needs. Backed
          by world-class brands, we ensure uninterrupted power and exceptional
          service. Your power, our priority.
        </h5>
      </div>

      
      <div className="w-full md:w-[15%] flex flex-col items-start">
        <h5 className="text-xl md:text-2xl font-bold capitalize text-blue-700 nunito-family">
          Quick Links
        </h5>
        <div className="text-base md:text-lg nunito-family font-semibold flex flex-col gap-1 mt-3">
          <h6>Home</h6>
          <h6>Services</h6>
          <h6>Products</h6>
          <h6>About Us</h6>
        </div>
      </div>

     
      <div className="w-full md:w-[20%] flex flex-col items-start">
        <h5 className="text-xl md:text-2xl font-bold capitalize text-blue-700 nunito-family">
          Contact Info
        </h5>
        <div className="flex gap-2 items-start mt-3">
          <IoLocationSharp size={20} />
          <p className="text-sm md:text-base leading-[22px]">
            At. Rajwada, Ward No. 03,
            <br />
            Nr. Shiv Mandir, Sahebganj,
            <br />
            Dist. Muzaffarpur, Bihar-843125
          </p>
        </div>
        <div className="flex gap-2 items-center mt-3">
          <IoMail size={20} />
          <p className="text-sm md:text-base leading-none">
            Info@nexxus.org.in
          </p>
        </div>
        <div className="flex gap-2 items-center mt-3">
          <IoCall size={20} />
          <p className="text-sm md:text-base leading-none">
            +91-7982405600 
          </p>
        </div>
      </div>

     
      <div className="w-full md:w-[20%] flex flex-col items-start">
        <h5 className="text-xl md:text-2xl font-bold capitalize text-blue-700 nunito-family">
          Follow Us
        </h5>
        <div className="flex gap-6 mt-3">
          <FaInstagram size={28} />
          <FaFacebookSquare size={28} />
          <FaTwitter size={28} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
