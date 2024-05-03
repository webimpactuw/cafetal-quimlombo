import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <div className="bg-red font-serif">
        <div className="flex justify-between">
          <div className="px-[40px] py-[20px] flex space-x-7 items-center">
            <div className="w-[42px] h-[42px] rounded-full border-4 border-black"></div>
            <div className="text-3xl text-white">Cafetal Quilombo Cafe</div>
          </div>
          <div className="px-[40px] py-[20px] flex items-center space-x-10">
            <Link to="/Test" className="text-white">Test</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
