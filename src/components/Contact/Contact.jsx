import React from "react";
const Contact = () => {
   
 
  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden   bg-[#F7F7F7] text-black"
      id="Contact Us"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center ">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light  text-[#4361EE]">
          With Us
        </span>
      </h1>
      <p className="text-center text-black mb-12 max-w-80 mx-auto ">
        {" "}
        Need Reliable Power Solutions? Reach Out to Us Today and Keep Your
        Operations Running Smoothly with Our Expert Generator Services.
      </p>
      <form className="max-w-2xl mx-auto text-gray-600 pt-8  bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left text-[#000000]">
            Your Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              name="Name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4 text-[#000000]">
            Your Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="my-6 text-left text-[#000000]">
          Message
          <textarea
            className="w-full border border-gray-300 text-black rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white px-8 py-2 rounded transition-colors duration-200 hover:bg-black">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact
