/* eslint-disable no-unused-vars */


import React from "react";
import HeroPng from "../../assets/cup5.png";
import image1 from "../../assets/side3.jpg";  
 
import image3 from "../../assets/small3.jpg";

const Hero = () => {
  return (
    <>
      <div className="min-h-[550px] sm:max-h-[200px] flex justify-end items-center text-white relative">
        
        {/* Background Image for Desktop and Mobile */}
        <div className="absolute left-0 top-0 w-full h-full">
          {/* Mobile view */}
          <div
             className="hidden lg:flex"
            style={{
              backgroundImage: `url(${image1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "60% 83%",
              width: '600px', 
              height: '730px', 
              position: 'absolute',
              top: 0,
              left: 0,
              marginTop:"-9em"
            }}
          ></div>
          <div
             className="lg:hidden flex flex-col items-center justify-center"
            style={{
              backgroundImage: `url(${image1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              height: '100vh',
              position: 'relative',
              top: 0,
              left: 0,
              marginTop:"-9em"
            }}
          >
            {/* Content for Mobile */}
            <div className="text-center mt-12">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-4xl lg:text-5xl font-bold"
              >
                We serve the richest{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-transparent bg-gradient-to-b from-brandDark to-brandDark font-cursive"
                >
                  ቡና
                </span>{" "}
                in the city
              </h1>
              
              {/* Button for Mobile */}
              <div className="mt-8">
                <button 
                  className="bg-brandDark border-2 border-primary text-white text-sm py-3 px-8 rounded-2xl"
                  style={{
                    backgroundImage: `url(${image3})`,
                    backgroundSize: "cover", 
                    backgroundPosition: "center", 
                    boxShadow: "4px 8px 16px rgba(0, 0, 0, 0.3)", 
                  }}
                >
                  <span
                   style={{
                    fontFamily: "'Kadwa', serif",
                    WebkitTextStroke: "1px white", 
                    color: "#270c03",
                    textShadow: "1px 1px 10px rgba(0, 0, 0, 0.5)",
                  }}
                  >ፊት በሉ</span>
                </button>

                {/* starts here */}
                <div
              data-aos="zoom-in"
              data-aos-duration="300"
              // className=" flex justify-center items-center  order-1 sm:order-2"
            >
             
              <div
                  data-aos="fade-left"
                  className="bg-gradient-to-r from-brandDark to-secondary p-3 px-8 rounded-xl absolute top-14 left-12"
                  style={{
                    backgroundImage:  `url(${image3})`, 
                    backgroundSize: "cover", 
                    backgroundPosition: "center", 
                    boxShadow: "4px 8px 16px rgba(0, 0, 0, 0.3)", 
                  }}
                >
                  <h1 className="text-white">
                    <span 
                     style={{
                      fontFamily: "'Kadwa', serif",
                      WebkitTextStroke: "1px white", 
                      color: "#270c03",
                      textShadow: "1px 1px 10px rgba(0, 0, 0, 0.5)",
                    }}
                    >  ከ አቦል

                    </span>
                    </h1>
            </div>

              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-gradient-to-r from-primary to-secondary p-3 px-8 rounded-xl absolute top-24 right-4"
                style={{
                  backgroundImage:  `url(${image3})`, 
                  backgroundSize: "cover", 
                  backgroundPosition: "center", 
                  boxShadow: "4px 8px 16px rgba(0, 0, 0, 0.3)", 
                }}
              >
                <h1 className="text-white">
                  <span  
                     style={{
                      fontFamily: "'Kadwa', serif",
                      WebkitTextStroke: "1px white", 
                      color: "#270c03",
                      textShadow: "1px 1px 10px rgba(0, 0, 0, 0.5)",
                    }}>
                       እስከ በረካ
                    </span>
                 </h1>
              </div>
            </div>
              </div>
              
              {/* Spinning Image */}
              <div className="mt-6">
                <img
                  src={HeroPng}
                  alt="coffee img"
                  className="w-[250px] sm:w-[200px] mx-auto object-cover spin"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="container pb-14 sm:pt-0 z-10 ml-[350px] mb-[8em] hidden lg:block"> 
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-12 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-2xl sm:text-6xl lg:text-7xl font-bold"
              >
                We serve the richest{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-transparent bg-gradient-to-b from-brandDark to-brandDark font-cursive"
                >
                  ቡና
                </span>{" "}
                in the city
              </h1>
              <div>
                <button 
                className="bg-brandDark  border-2 border-primary hover:scale-105 duration-200 text-white  text-xl py-2 px-9 rounded-full"
                style={{
                  backgroundImage:  `url(${image3})`, 
                  backgroundSize: "cover", 
                  backgroundPosition: "center", 
                  boxShadow: "4px 8px 16px rgba(0, 0, 0, 0.3)", 
                }}
                >
                  <span
                   style={{
                    fontFamily: "'Kadwa', serif",
                    WebkitTextStroke: "1px white", 
                    color: "#270c03",
                    textShadow: "1px 1px 10px rgba(0, 0, 0, 0.5)",
                  }}
                  > ፊት በሉ
                  </span>
                </button>
              </div>
            </div>
            
            {/* Image and Overlays for Desktop */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2"
            >
              <img
                data-aos-once="true"
                src={HeroPng}
                alt="coffee img"
                className="w-[200px] sm:w-[350px] sm:scale-125 mx-auto object-cover spin "
              />
              <div
                  data-aos="fade-left"
                  className="bg-gradient-to-r from-brandDark to-secondary p-3 px-12 rounded-xl absolute top-12 left-12"
                  style={{
                    backgroundImage:  `url(${image3})`, 
                    backgroundSize: "cover", 
                    backgroundPosition: "center", 
                    boxShadow: "4px 8px 16px rgba(0, 0, 0, 0.3)", 
                  }}
                >
                  <h1 className="text-white">
                    <span 
                     style={{
                      fontFamily: "'Kadwa', serif",
                      WebkitTextStroke: "1px white", 
                      color: "#270c03",
                      textShadow: "1px 1px 10px rgba(0, 0, 0, 0.5)",
                    }}
                    >  ከ አቦል

                    </span>
                    </h1>
            </div>

              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-gradient-to-r from-primary to-secondary p-3 px-8 rounded-xl absolute bottom-11 right-12"
                style={{
                  backgroundImage:  `url(${image3})`, 
                  backgroundSize: "cover", 
                  backgroundPosition: "center", 
                  boxShadow: "4px 8px 16px rgba(0, 0, 0, 0.3)", 
                }}
              >
                <h1 className="text-white">
                  <span  
                     style={{
                      fontFamily: "'Kadwa', serif",
                      WebkitTextStroke: "1px white", 
                      color: "#270c03",
                      textShadow: "1px 1px 10px rgba(0, 0, 0, 0.5)",
                    }}>
                       እስከ በረካ
                    </span>
                 </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
