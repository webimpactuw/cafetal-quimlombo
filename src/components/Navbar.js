import { Link } from "react-router-dom";
import cafeLogo from "../images/logo.png";

function Navbar() {
  return (
    <div className="fixed z-50 w-screen flex justify-between bg-red-primary text-xl text-white font-semibold">
      {/* LOGO */}
      <div className="px-[40px] py-[20px] flex gap-6 items-center">
        <Link to="/" className="w-[42px] h-[42px] object-cover">
          <img src={cafeLogo} alt="logo"></img>
        </Link>
        <Link to="/" className="text-3xl ">
          Cafetal Quilombo Café
        </Link>
      </div>

      {/* LINKS */}
      <div className="px-[40px] py-[20px] flex gap-10 items-center">
        <Link to="/about">About Us</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Catering</Link>
      </div>
    </div>
  );
}

export default Navbar;
