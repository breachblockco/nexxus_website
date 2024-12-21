import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className=" overflow-hidden w-full bg-[#F7F7F7] mt-16 px-14 flex h-[350px] gap-20"
      id="Footer"
    >
      <div className="w-[30%] h-full">
        <div className="w-[10vw] h-[20vh] -ml-5">
          <img
            src="/images/navbar/logo.svg"
            className="w-full h-full "
            alt=""
          />
        </div>
        <h5>
          At Nexxus Power Systems, we specialize in delivering reliable
          generator rental solutions for industrial and domestic needs. Backed
          by world-class brands, we ensure uninterrupted power and exceptional
          service. Your power, our priority
        </h5>
      </div>
      <div className="w-[15%] h-full flex flex-col mt-12 gap-5">
        <h5 className="text-2xl font-bold capitalize text-blue-700 nunito-family">
          Quick Links
        </h5>
        <div className="text-lg nunito-family font-semibold flex flex-col gap-1">
          <h6>Home</h6>
          <h6>Services</h6>
          <h6>Products</h6>
          <h6>About Us</h6>
        </div>
      </div>
      <div className="w-[20%] h-full flex flex-col mt-12 gap-5">
        <h5 className="text-2xl font-bold capitalize text-blue-700 nunito-family">
          Contact Info
        </h5>
        <div className="flex gap-1">
          <IoLocationSharp size={20} className="mt-1" />
          <p className="leading-[22px]">
            At. Rajwada, Ward No. 03,
            <br />
            Nr. Shiv Mandir, Sahebganj,
            <br />
            Dist. Muzaffarpur, Bihar-843125
          </p>
        </div>
        <div className="flex gap-1.5 mt-2">
          <IoMail size={20} />
          <p className="leading-none">Info@nexxus.org.in</p>
        </div>
      </div>
      <div className="w-[20%] h-full flex flex-col mt-12 gap-5">
        <h5 className="text-2xl font-bold capitalize text-blue-700 nunito-family">
          Follow Us
        </h5>
        <div className="flex w-full justify-start gap-8">
          <FaInstagram size={34} />
          <FaFacebookSquare size={34} />
          <FaTwitter size={34} />
        </div>
      </div>
    </div>
  );
}

export default Footer

