import React from "react";

const About = () => {
 
    return (
      
      <section className=" top-20  w-full bg-white py-16 px-4 md:px-10 lg:px-20" id="About" >
    
    
        <div className="flex flex-col lg:flex-row items-center gap-12">
       
          <div className="flex-1">
            <h4 className="text-blue-500 text-sm font-not-italic tracking-wider mb-2">
              WHO ARE WE
            </h4>
            <h2 className="text-gray-800 text-4xl font-bold mb-4 leading-snug">
              Assisting individuals in locating the appropriate real estate.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laudantium, corrupti molestiae atque fugit placeat?
            </p>
  
            
            <div className="space-y-6">
             
              <div className="flex items-center gap-4 bg-white shadow-md rounded-lg p-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                <i class='bx bx-wifi'></i>
                </div>
                <div>
                  <h3 className="text-blue-500 font-semibold text-lg">
                   Lorem ipsum dolor
                  </h3>
                  <p className="text-gray-500 text-sm">
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
  
            
              <div className="flex items-center gap-4 bg-white shadow-md rounded-lg p-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                <i class='bx bx-user'></i>
                </div>
                <div>
                  <h3 className="text-blue-500 font-semibold text-lg">
                   Lorem ipsum dolor sit amet.
                  </h3>
                  <p className="text-gray-500 text-sm">
                   Lorem ipsum, dolor sit amet consectetur adipisicing.
                  </p>
                </div>
              </div>
            </div>
          </div>
  
         
          <div className="flex-1 flex flex-row items-center gap-4">
            <div className="relative w-full">
             
              <img
                src="/images/about/temple.jpg"
               
                className="rounded-2xl w-full h-[500px]"
              />
            
              
            </div>
            <div className="grid grid-cols- gap-4 w-[300px]">
              <img
                src="/images/about/fort.jpg"
               
                className="rounded-2xl w-[300px] h-auto"
              />
              <img
                src="/images/about/tree.avif"
              
                
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  
  
    
     

export default About;





