import { Link } from "react-router-dom";
import React, { useState } from "react";
import cafeLogo from "../images/logo.png";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <>
      <div className="fixed z-50 w-full bg-red-primary text-xl text-white font-semibold">
        {/* LOGO */}
        <div className="flex justify-between">
          <div className="px-4 py-4 flex items-center">
            <Link
              to="/"
              className="w-8 h-8 object-cover"
              onClick={isOpen ? toggleMenu : ""}
            >
              <img src={cafeLogo} alt="logo"></img>
            </Link>
            <Link
              to="/"
              className="text-lg md:text-2xl lg:text-3xl hover:text-beige transition"
              onClick={isOpen ? toggleMenu : ""}
            >
              Cafetal Quilombo Cafe
            </Link>
          </div>

          {/* ICON */}
          <div className="flex items-center pr-4" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-10 h-10"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </div>
        </div>

        {/* LINKS */}
        <div
          className={
            (isOpen ? "h-screen" : "h-[0]") +
            " flex justify-center text-center " +
            (isOpen ? "" : "invisible")
          }
        >
          <div className="flex flex-col gap-10 pt-12">
            <Link to="/about" className="text-white" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/menu" className="text-white" onClick={toggleMenu}>
              Menu
            </Link>
            <Link to="/contact" className="text-white" onClick={toggleMenu}>
              Catering
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
