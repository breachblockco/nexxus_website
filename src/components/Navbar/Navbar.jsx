// import React from "react";

// function Navbar() {
//   return (
//     <div className="w-full h-[90px] py-4 flex justify-between">
//       <div className="nav-left w-[10vw]">
//         <img src="/images/navbar/logo.svg" alt="" className="w-full h-full" />
//       </div>
//       <div className="nav-right flex bg-[#F8F5EE] h-full px-4 py-2 rounded-full gap-16">
//         {["Services", "About Us", "Products", "Contact Us"].map(
//           (links, index) => (
//             <h4 key={index} className="px-4 py-2 text-xl text-black rounded-full leading-none flex justify-center items-center">
//               {links}
//             </h4>
//           )
//         )}
//       </div>
//     </div>
//   );
// }

// export default Navbar;


import React from "react";

function Navbar() {
  return (
    <div className="w-full h-[90px] py-4 flex justify-between  px-20 z-20">
      <div className="nav-left w-[10vw]">
        <img
          src="/images/navbar/logo.jpg"
          alt="Logo"
          className="w-full h-full"
        />
      </div>
      <div className="nav-right flex bg-[#F8F5EE] h-full px-4 py-2 rounded-full gap-16">
        {["About", "Services", "Products", "Contact Us"].map(
          (links, index) => (
            <a
            href={`#${links}`}
              key={index}
              className="relative px-5 py-2 text-xl text-black rounded-full leading-none flex justify-center items-center transition-all duration-500 group"
            >
              {/* Background Effect */}
              <span className="absolute inset-0 bg-[#E3E0DA] rounded-full scale-0 group-hover:scale-100 transition-transform duration-500"></span>
              {/* Text Content */}
              <span className="relative z-10">{links}</span>
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;

