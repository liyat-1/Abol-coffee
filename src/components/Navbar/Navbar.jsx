

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import BackgroundImage from "../../assets/photo.png"; 
import Order from "../../assets/order.png";
import Abol from "../../assets/ab1.png";
const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log("Menu toggled: ", isMenuOpen); // Log to check menu state
  };

  return (
    <>
      <div
        className="fixed sm:w-full z-50 bg-brandDark shadow-[0_6px_20px_rgba(0,0,0,0.8)] text-white backdrop-blur-md rounded-b-[50px] rounded-t-[50px] px-1 max-w-6xl sm:mx-4 sm:left-12 "
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "40% 200%",
          backgroundPosition: "30% center",
          backgroundRepeat: "no-repeat",
          top: "20px", 
          height: "70px", 
          width: "100%", 
        }}
      >
        <div className="container py-1">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="font-bold text-xl sm:text-xl flex justify-center items-center gap-0 tracking-wider"
                style={{
                  fontFamily: "'Kadwa', serif",
                  WebkitTextStroke: "1px white",
                  color: "#270c03",
                  textShadow: "1px 1px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                <img src={Logo} alt="Logo" className="w-14 rounded-full" />
                <span style={{ paddingTop: "20px" }}>አቦል</span>
              </a>
            </div>

            {/* Link section - Desktop */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="hidden sm:flex justify-between items-center gap-4"
            >
              <ul className="flex items-center font-cursive2 font-bold">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-sm py-3 px-8 text-smoke hover:text-white transition-colors duration-300"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                className="bg-b3 hover:bg-b1 text-smoke px-5 py-2 rounded-full flex items-center gap-3 shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-200 font-cursive2"
              >
                Order
                <img src={Order} alt="order" className="w-6 drop-shadow-md" />
              </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="sm:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
    
        <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:hidden bg-brandDark text-white backdrop-blur-md p-4 absolute top-[70px] left-[10%] right-[10%] z-40 rounded-b-[30px] shadow-[0_6px_20px_rgba(0,0,0,0.8)]`}
        style={{ maxWidth: "90%", margin: "0 auto" }} // centers and narrows the menu
        >
        <div className="flex justify-start items-center gap-4 mb-4">
          {/* Insert the image on the left side */}
          <img
            src={Abol} // Replace with your image source
            alt="Logo"
            className="w-10 h-10 object-cover rounded-full drop-shadow-lg" // Rounded image
          />
          <h3 className="text-lg font-bold">አቦል</h3>
        </div>

        <ul className="flex flex-col gap-4">
          {Menu.map((menu) => (
            <li key={menu.id}>
              <a
                href={menu.link}
                className="block text-sm py-2 px-4 text-center hover:bg-b1 hover:text-brandDark transition-colors duration-300 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="w-full bg-b3 hover:bg-b1 text-smoke px-5 py-3 rounded-full mt-4 flex justify-center items-center gap-3 shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform duration-200 font-cursive2"
          onClick={() => setMenuOpen(false)}
        >
          Order
          <img src={Order} alt="order" className="w-6 drop-shadow-md" />
        </button>
        </div>
        </div>
        <div style={{ paddingTop: "120px" }}>
          <h1>Scroll down to see the rest of the content</h1>
        </div>      
    </>
  );
};

export default Navbar;
