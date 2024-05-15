import { Link } from "react-router-dom";
import cafeLogo from "./Logo.png";

function Navbar() {
  return (
    <>
      <div className="bg-red text-xl w-screen fixed z-50">
        <div className="flex justify-between">
          <div className="px-[40px] py-[20px] flex space-x-7 items-center">
            <Link to="/" className="object-cover w-[42px] h-[42px]">
              <img src={cafeLogo} alt="logo"></img>
            </Link>
            <div className="text-3xl text-white">Cafetal Quilombo Cafe</div>
          </div>
          <div className="px-[40px] py-[20px] flex items-center space-x-10">
            <Link to="/about" className="text-white">
              About Us
            </Link>
            <Link to="/menu" className="text-white">
              Menu
            </Link>
            <Link to="/contact" className="text-white">
              Catering
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
