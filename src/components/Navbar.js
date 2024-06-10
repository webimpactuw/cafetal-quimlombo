import { Link } from "react-router-dom";
import cafeLogo from "../images/logo.png";

function Navbar() {
  return (
    <div className="hidden fixed z-50 w-screen md:flex justify-between bg-red-primary text-xl text-white font-semibold">
      {/* LOGO */}
      <div className="px-[40px] py-[20px] flex gap-6 items-center">
        <Link to="/" className="w-[42px] h-[42px] object-cover">
          <img src={cafeLogo} alt="logo"></img>
        </Link>
        <Link to="/" className="text-3xl hover:text-beige transition">
          Cafetal Quilombo Café
        </Link>
      </div>

      {/* LINKS */}
      <div className="px-[40px] py-[20px] flex gap-10 items-center">
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
