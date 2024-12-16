import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 full overflow-hidden text-white"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mt-6 mb-2 ">
        About{' '}
        <span className="underline underline-offset-4 decoration-1 under font-light  text-green-500">
          Our Company
        </span>
      </h1>
      <p className="max-w-900 mt-2 text-center mb-8">
        <span className="font-bold">Nexus</span> is a company engaged with the Sales,
        Services, Installation, Commissioning and Maintenance Of Generator Set.
        Situated in a strategic area, we R.R. Generators are able to reach out most
        of the gen sets in the town. We are a team of mechanical engineers who have
        specialization in their respective field as sales, service, installation of
        diesel generator sets, etc.
      </p>
      <button
        className="bg-blue-600 text-white px-8 py-2 rounded transition-colors duration-200 hover:bg-green-500"
      >
        Learn More
      </button>
    </motion.div>
  );
};

export default About;





