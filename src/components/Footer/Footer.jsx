import React from 'react'

const Footer = () => {
  return (
    <div className=" overflow-hidden w-full bg-white py-16" id="Footer">
      <div className="w-[30%] h-[500px] bg-red-300">
        <div className="w-[10vw] h-[20vh] ">
          <img
            src="/images/navbar/logo.svg"
            className="w-full h-full "
            alt=""
          />
        </div>
        <h5 className=''>
          At Nexxus Power Systems, we specialize in delivering reliable
          generator rental solutions for industrial and domestic needs. Backed
          by world-class brands, we ensure uninterrupted power and exceptional
          service. Your power, our priority
        </h5>
      </div>
    </div>
  );
}

export default Footer

