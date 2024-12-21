import React from "react";

const About = () => {
  return (
    <section
      className="w-full bg-white py-10 px-4 md:px-10 lg:px-10"
      id="About"
    >
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="flex flex-col justify-start gap-4 h-[500px] flex-shrink-0 w-[45%]">
          <h5 className="nunito-family text-2xl font-bold text-blue-700 capitalize">
            Who we are
          </h5>
          <h2 className="text-gray-800 text-4xl font-bold leading-[45px] merri-family">
            Nexxus: Powering Homes and Industries with Excellence
          </h2>

          <div className="space-y-6">
            <div className="flex items-center gap-3 bg-white shadow-md rounded-lg p-4">
              <div className="w-28 h-16">
                <img
                  src="/images/about/gif1.gif"
                  className="w-full h-full"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-blue-500 font-semibold text-lg">
                  Extensive Range of Diesel Generators
                </h3>
                <p className="text-gray-500 text-sm">
                  Nexxus Power Systems offers new diesel generators for
                  industrial and domestic use, sourced from top manufacturers
                  like Cummins, Kirloskar, CAT, Perkins, Volvo Penta, and more.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white shadow-md rounded-lg p-4">
              <div className="w-32 h-16">
                <img
                  src="/images/about/gif2.gif"
                  className="w-full h-full"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-blue-500 font-semibold text-lg">
                  Versatile Power Solutions
                </h3>
                <p className="text-gray-500 text-sm">
                  Nexxus provides power products for high-end industrial
                  applications, domestic backup needs, and both prime and
                  standby power requirements, featuring high-quality diesel
                  engines with worldwide parts support.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white shadow-md rounded-lg p-4">
              <div className="w-28 h-16">
                <img
                  src="/images/about/gif3.gif"
                  className="w-full h-full"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-blue-500 font-semibold text-lg">
                  Expert Guidance and Quick Delivery
                </h3>
                <p className="text-gray-500 text-sm">
                  Nexxus stocks a large selection of diesel generators in Europe
                  and the UK, ensuring fast delivery. The team is available to
                  help customers select the perfect generator set for their
                  needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-4 flex-shrink-0 w-[53%]">
          <div className="relative w-full">
            <img
              src="/images/about/s1.jpg"
              className="rounded-2xl w-full h-[600px]"
            />
          </div>
          <div className="flex flex-col justify-between h-full gap-4 w-[300px]">
            <img
              src="/images/about/s2.jpg"
              className="rounded-2xl w-[300px] h-[200px]"
            />
            <img
              src="/images/about/s3.jpg"
              className="rounded-2xl w-full h-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
