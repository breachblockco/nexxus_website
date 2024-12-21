import React from "react";

const Services = () => {
  const services = [
    {
      icon: "bxs-wrench",
      title: "Generator Repairing",
      description:
        "We provide a Generator repairing solutions, which are mostly valued for their reliability and durability. Our customers can expect these...",
    },
    {
      icon: "bxs-cog",
      title: "Generator on Hire",
      description:
        "If you want to hire generators for a week, or book the whole fleet out on a l basis...",
    },
    {
      icon: "bxs-edit",
      title: "Annual Maintenance Contract",
      description:
        "We offer DG set maintenance for different types of generators. Our vast experience in the field of generators has provided...",
    },
    {
      icon: "bxs-extension",
      title: "DG Set Hiring",
      description:
        "We are a prominent organization engaged in offering DG sets that are widely used in houses, offices and...",
    },
    {
      icon: "bxs-bolt",
      title: "Emergency Power",
      description:
        "If you have lost your electricity supply and need power fast then you’ve come to the right place. Whether you...",
    },
    {
      icon: "bx-equalizer",
      title: "Silent Diesel Generators",
      description:
        "Eco-friendly power: The silent diesel gen set is CPCB Certified for emission norms as well as permissible noise limit...",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-10 md:px-20 lg:px-20 full overflow-hidden text-black"
      id="Services"
    >
      <h1 className="text-lg sm:text-5xl font-non-italic my-2 merri-family text-blue-700 font-semibold">
        Our Services
      </h1>
      <h1 className="text-lg sm:text-3xl font-bold mt-3 mb-5 nunito-family">
        Seamless Rental Experience for Prime and Standby Power
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-[30px] shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300 group"
          >
            <i
              className={`bx ${service.icon} text-[#4361EE] brightness-50 text-5xl group-hover:brightness-125 transition duration-300`}
            ></i>
            <h2 className="text-2xl font-semibold mt-4 brightness-50 group-hover:brightness-125 text-[#4361EE]">
              {service.title}
            </h2>
            <p className="text-gray-500 mt-4">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
