import { Link } from "react-router-dom";
import cafeLogo from "../images/logo.png";

function Navbar() {
  return (
    <div className="fixed z-50 w-full flex justify-between bg-red-primary text-xl text-white font-semibold">
      {/* LOGO */}
      <div className="px-10 py-5 flex gap-2 lg:gap-4 items-center">
        <Link to="/" className="w-8 h-8 lg:w-10 lg:h-10 object-cover">
          <img src={cafeLogo} alt="logo"></img>
        </Link>
        <Link
          to="/"
          className="text-2xl lg:text-3xl hover:text-beige transition"
        >
          Cafetal Quilombo Café
        </Link>
      </div>

      {/* LINKS */}
      <div className="px-10 py-5 flex gap-10 items-center text-sm md:text-base lg:text-lg xl:text-xl">
        <Link to="/about" className="hover:text-beige transition">
          About Us
        </Link>
        <Link to="/menu" className="hover:text-beige transition">
          Menu
        </Link>
        <Link to="/catering" className="hover:text-beige transition">
          Catering
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
