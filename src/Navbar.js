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
            <div className="text-white">About Us</div>
            <div className="text-white">Menu</div>
            <div className="text-white">Catering</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
