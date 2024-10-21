// eslint-disable-next-line no-unused-vars
import React from "react";
import Img2 from "../../assets/beans3.png";
import Img3 from "../../assets/beans3.png";
import Img4 from "../../assets/beans3.png";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "የ ጅማ ቡና",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img3,
    name: "የ ይርጋጨፌ ቡና",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img4,
    name: "የ ሲዳሞ ቡና",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-smoke">
            ለእርስዎ በጣም ምርጡን
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              // eslint-disable-next-line react/jsx-key
              <div
              data-aos="fade-up"
              data-aos-delay={service.aosDelay}
              className="rounded-2xl relative shadow-xl duration-high group max-w-[300px] bg-brandDark"
              
            >
              <div className="h-[122px]">
                <img
                  src={service.img}
                  alt=""
                  className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 "
                />
              </div>
              <div
                className="p-4 text-center bg-white bg-opacity-70 group-hover:bg-opacity-90 duration-300"
                style={{ borderRadius: '0 0 1rem 1rem' }} // Rounds the bottom corners
              >
                <h1 className="text-xl font-bold">{service.name}</h1>
                <p className="text-gray-900 group-hover:text-brandDark duration-high text-sm line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>
            
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
