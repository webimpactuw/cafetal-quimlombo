import { Link } from "react-router-dom";
import React, { useState } from "react";
import cafeLogo from "./Logo.png";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <>
      <div className="bg-red text-xl w-screen fixed z-50">
        <div className="flex justify-between">
          <div className=" pl-3 py-[20px] flex space-x-4 items-center">
            <Link to="/" className="object-cover w-[42px] h-[42px]" onClick={(isOpen ? toggleMenu : "")}>
              <img src={cafeLogo} alt="logo"></img>
            </Link>
            <Link to="/" className="text-2xl text-white" onClick={(isOpen ? toggleMenu : "")}>Cafetal Quilombo Cafe</Link>
          </div>
          <div
            className="pr-[20px] py-[20px]"
            onClick={toggleMenu}
          ><svg  xmlns="http://www.w3.org/2000/svg"  width="48"  height="48"  viewBox="0 0 24 24"  fill="none"  stroke="#ffffff"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg></div>
        </div>
        <div
          className={
            (isOpen ? "h-screen" : "h-[0]") +
            " flex justify-center " +
            (isOpen ? "" : "invisible")
          }
        >
          <div className="flex flex-col space-y-10 pt-11">
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
