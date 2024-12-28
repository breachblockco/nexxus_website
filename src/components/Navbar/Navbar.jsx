
import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[90px] py-4 flex justify-between px-5 z-30 merri-family fixed top-0 left-0 bg-white">
      {/* Logo Section */}
      <div className="nav-left flex items-center h-full w-[15vw]">
        <img
          src="/images/navbar/logo.png"
          alt="Logo"
          className="object-contain max-h-[70px] max-w-full"
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-2xl text-black focus:outline-none"
        >
          <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}></i>
        </button>
      </div>

     
      <div className="nav-right hidden lg:flex h-full px-4 py-2 rounded-full gap-16">
        {["About", "Services", "Products", "Enquiry", "Contact Us"].map(
          (link, index) => (
            <a
              href={
                link === "Enquiry"
                  ? "https://forms.gle/ySx62ixVLbsvMTpV8"
                  : `#${link}`
              }
              key={index}
              className="relative px-5 py-2 text-xl text-black rounded-full leading-none flex justify-center items-center transition-all duration-500 group"
              target={link === "Enquiry" ? "_blank" : "_self"}
              rel={link === "Enquiry" ? "noopener noreferrer" : ""}
            >
              <span className="absolute inset-0 bg-[#4361EE]/70 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></span>
              <span className="relative z-10">{link}</span>
            </a>
          )
        )}
      </div>

      
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
        onClick={toggleMenu}
      >
        <div className="flex justify-center items-center h-full">
          <div className="bg-white p-6 rounded-lg space-y-6">
            {["About", "Services", "Products", "Enquiry", "Contact Us"].map(
              (link, index) => (
                <a
                  href={
                    link === "Enquiry"
                      ? "https://forms.gle/ySx62ixVLbsvMTpV8"
                      : `#${link}`
                  }
                  key={index}
                  className="block text-2xl text-black text-center"
                  target={link === "Enquiry" ? "_blank" : "_self"}
                  rel={link === "Enquiry" ? "noopener noreferrer" : ""}
                  onClick={toggleMenu}
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
