/*
import React from "react";

const Services = () => {
  const services = [
    {
      icon: "bxs-wrench",
      title: "Generator Repairing",
      description:
        "Keep your generators running smoothly with our expert repair services. Our skilled technicians diagnose and repair all makes and models of generators, ensuring optimal performance and longevity.",
    },
    {
      icon: "bxs-cog",
      title: "Generator on Hire",
      description:
        "Experience uninterrupted power with our reliable generator rental services. Whether it's for construction sites, events, or emergency back-up, we offer a wide range of generators to suit your specific needs and budget",
    },
    {
      icon: "bxs-edit",
      title: "Annual Maintenance Contract",
      description:
        "Our expert technicians will conduct regular inspections, preventative maintenance, and timely repairs, ensuring optimal performance and minimizing unexpected breakdowns.",
    },
    {
      icon: "bxs-extension",
      title: "DG Set Hiring",
      description:
        "Power your projects seamlessly with our reliable DG Set hiring services.Whether you need temporary power for construction sites, events, or emergency situations, we offer a wide range of diesel generators to meet your specific requirements.",
    },
    {
      icon: "bxs-bolt",
      title: "Emergency Power",
      description:
        "Be prepared for unexpected power outages with our reliable emergency power solutions.We offer a range of customized solutions, including standby generators and UPS systems, to ensure continuous operations during power interruptions.",
    },
    {
      icon: "bx-equalizer",
      title: "Silent Diesel Generators",
      description:
        "Experience uninterrupted power in noise-sensitive environments with our range of silent diesel generators.Designed for minimal noise and vibration.Designed for minimal noise and vibration, these generators provide reliable power.",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-6 md:p-10 lg:px-20 full overflow-hidden text-black mt-12 sm:mt-16 lg:mt-24"
      id="Services"
    >
      <h1 className="text-base sm:text-3xl lg:text-5xl font-non-italic my-2 merri-family text-blue-700 font-semibold text-center">
        Our Services
      </h1>
      <h2 className="text-sm sm:text-xl lg:text-3xl font-bold mt-3 mb-5 nunito-family text-center">
        Seamless Rental Experience for Prime and Standby Power
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 my-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-[20px] sm:rounded-[30px] shadow-lg p-6 sm:p-8 text-center hover:shadow-2xl transition-shadow duration-300 group"
          >
            <i
              className={`bx ${service.icon} text-[#4361EE] brightness-50 text-4xl sm:text-5xl group-hover:brightness-125 transition duration-300`}
            ></i>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-4 brightness-50 group-hover:brightness-125 text-[#4361EE]">
              {service.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mt-4">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;


*/
import React from "react";

const Services = () => {
  const services = [
    {
      icon: "bxs-wrench",
      title: "Generator Repairing",
      description:
        "Keep your generators running smoothly with our expert repair services. Our skilled technicians diagnose and repair all makes and models of generators, ensuring optimal performance and longevity.",
    },
    {
      icon: "bxs-cog",
      title: "Generator on Hire",
      description:
        "Experience uninterrupted power with our reliable generator rental services. Whether it's for construction sites, events, or emergency back-up, we offer a wide range of generators to suit your specific needs and budget",
    },
    {
      icon: "bxs-edit",
      title: "Annual Maintenance Contract",
      description:
        "Our expert technicians will conduct regular inspections, preventative maintenance, and timely repairs, ensuring optimal performance and minimizing unexpected breakdowns.",
    },
    {
      icon: "bxs-extension",
      title: "DG Set Hiring",
      description:
        "Power your projects seamlessly with our reliable DG Set hiring services.Whether you need temporary power for construction sites, events, or emergency situations, we offer a wide range of diesel generators to meet your specific requirements.",
    },
    {
      icon: "bxs-bolt",
      title: "Emergency Power",
      description:
        "Be prepared for unexpected power outages with our reliable emergency power solutions.We offer a range of customized solutions, including standby generators and UPS systems, to ensure continuous operations during power interruptions.",
    },
    {
      icon: "bx-equalizer",
      title: "Silent Diesel Generators",
      description:
        "Experience uninterrupted power in noise-sensitive environments with our range of silent diesel generators.Designed for minimal noise and vibration.Designed for minimal noise and vibration, these generators provide reliable power.",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center  mx-auto  pt-6 overflow-hidden text-black  "
      id="Services"
    >
      <h1 className="text-base sm:text-3xl lg:text-5xl font-non-italic my-2 merri-family text-blue-700 font-semibold text-center">
        Our Services
      </h1>
      <h2 className="text-sm sm:text-xl lg:text-3xl font-bold mt-3 mb-5 nunito-family text-center">
        Seamless Rental Experience for Prime and Standby Power
      </h2>

    
      <div className="flex flex-row sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 my-2 overflow-x-auto sm:overflow-visible scrollbar-hide">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-[15px] sm:rounded-[20px] shadow-lg p-4 sm:p-6 text-center min-w-[70%] sm:min-w-0 hover:shadow-2xl transition-shadow duration-300 group"
          >
            <i
              className={`bx ${service.icon} text-[#4361EE] brightness-50 text-3xl sm:text-4xl group-hover:brightness-125 transition duration-300`}
            ></i>
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold mt-3 brightness-50 group-hover:brightness-125 text-[#4361EE]">
              {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
