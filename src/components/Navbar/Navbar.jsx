import React from "react";

function Navbar() {
  return (
    <div className="w-full h-[90px] py-4 flex justify-between  px-5 z-20 merri-family">
      <div className="nav-left h-[20vh] w-[15vw] -mt-10">
        <img
          src="/images/navbar/logo.svg"
          alt="Logo"
          className="w-full h-full"
        />
      </div>
      <div className="nav-right flex h-full px-4 py-2 rounded-full gap-16">
        {["About", "Services", "Products", "Contact Us"].map((links, index) => (
          <a
            href={`#${links}`}
            key={index}
            className="relative px-5 py-2 text-xl text-black rounded-full leading-none flex justify-center items-center transition-all duration-500 group"
          >
            {/* Background Effect */}
            <span className="absolute inset-0 bg-[#4361EE]/70 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></span>
            {/* Text Content */}
            <span className="relative z-10">{links}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
