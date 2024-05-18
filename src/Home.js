import { Link } from "react-router-dom";

import flowersLeft from "./components/FlowersOnTheLeft.png";
import flowersRight from "./components/flowersOnTheRight.png";
import staffPhoto from "./components/staffPhoto.jpg";
import cafePhoto from "./components/cafePhoto.png";

import Hours from "./components/Hours.js";

function Home() {
  return (
    <div className="pt-[82px]">
      {/* HERO */}
      <div className="h-371 bg-[url('/public/pictures/topFoodPic.jpeg')] bg-center bg-cover border-b-[6px] border-red-dark"></div>
      <div className="absolute translate-x-1/8 translate-y-[-49px] w-full flex flex-row justify-center">
        <p className="px-2 h-94 w-786 flex items-center bg-beige text-xl text-gray-primary font-medium text-center rounded-2xl border-[6px] border-red-dark">
          Located in South Seattle, Cafetal Quilombo Café is a unique restaurant
          offering authentic Mexican tacos in combination with Seattle’s iconic
          coffee.
        </p>
      </div>
      <div className="bg-[white] py-16 flex flex-col justify-center items-center mx-auto">
        <h1 className="text-[32px] font-bold pt-24 pb-3">Food</h1>
        <div className="flex flex-row items-center gap-16 px-10 py-2.5">
          <div className="group w-80 h-64 bg-[url('/public/pictures/tamales.webp')] bg-center bg-cover hover:bg-opacity-60 rounded-3xl">
            <Link
              to="/menu"
              className="w-80 h-64 rounded-3xl bg-[black] bg-opacity-0 hover:bg-opacity-60 flex flex-row justify-center items-center duration-500"
            >
              <Link
                to="/menu"
                className="invisible group-hover:visible text-[white] duration-100 text-3xl"
              >
                Tamales
              </Link>
            </Link>
          </div>
          <div className="group w-80 h-64 bg-[url('/public/pictures/tacoPics.png')] bg-center bg-cover hover:bg-opacity-60 rounded-3xl">
            <div className="w-80 h-64 rounded-3xl bg-[black] bg-opacity-0 hover:bg-opacity-60 flex flex-row justify-center items-center duration-500">
              <Link
                to="/menu"
                className="invisible group-hover:visible text-[white] duration-100 text-3xl"
              >
                Tacos
              </Link>
            </div>
          </div>
          <div className="group w-80 h-64 bg-[url('/public/pictures/enchi.webp')] bg-center bg-cover hover:bg-opacity-60 rounded-3xl">
            <div className="w-80 h-64 rounded-3xl bg-[black] bg-opacity-0 hover:bg-opacity-60 flex flex-row justify-center items-center duration-500">
              <Link
                to="/menu"
                className="invisible group-hover:visible text-[white] duration-100 text-3xl"
              >
                Enchilatas
              </Link>
            </div>
          </div>
          <div className="text-[24px] group px-8 py-2.5">
            <Link to="/menu">Menu&gt;</Link>
          </div>
        </div>
      </div>
      <div className="flex mx-auto max-w-[1300px] justify-between px-8 pt-8 pb-24 bg-[white]">
        <img className="h-147 w-562" src={flowersLeft} alt="" />
        <img className="h-147 w-562" src={flowersRight} alt="" />
      </div>
      <div className="bg-[white] mx-auto max-w-[1300px] flex items-center justify-center gap-16 pb-16">
        <Hours />
        <div>
          <img
            className="h-430 w-366 object-cover rounded-2xl shadow-lg"
            src={staffPhoto}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-430 w-366 object-cover rounded-2xl shadow-lgg"
            src={cafePhoto}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
