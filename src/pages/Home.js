import { Link } from "react-router-dom";

import flowerBorderLeft from "../images/flower-border-left.png";
import flowerBorderRight from "../images/flower-border-right.png";
import cafeOwners from "../images/cafe-owners.jpg";
import cafeEntrance from "../images/cafe-entrance.png";

import Hours from "../components/Hours.js";

function Home() {
  return (
    <div className="pt-[82px]">
      {/* HERO */}
      <div className="h-371 bg-[url('/public/bg-images/home-hero.jpeg')] bg-center bg-cover border-b-[6px] border-red-dark"></div>
      <div className="absolute translate-x-1/8 translate-y-[-49px] w-full flex flex-row justify-center">
        <p className="px-8 h-94 w-786 flex items-center bg-beige text-xl text-gray-primary font-medium text-center rounded-2xl border-[6px] border-red-dark">
          Located in South Seattle, Cafetal Quilombo Café is a unique restaurant
          offering authentic Mexican tacos in combination with Seattle’s iconic
          coffee.
        </p>
      </div>

      {/* FOOD */}
      <div className="pt-32 flex flex-col justify-center items-center mx-auto">
        <h1 className="text-4xl font-bold">Food</h1>
        <div className="flex flex-row items-center gap-16 px-10 py-2.5">
          <div className="group w-80 h-64 bg-[url('/public/bg-images/menu-tamales.webp')] bg-center bg-cover hover:bg-opacity-60 rounded-3xl cursor-pointer">
            <Link
              to="/menu"
              className="w-80 h-64 rounded-3xl bg-[black] bg-opacity-0 hover:bg-opacity-60 flex flex-row justify-center items-center duration-500"
            >
              <p className="invisible group-hover:visible text-[white] duration-100 text-3xl">
                Tamales
              </p>
            </Link>
          </div>
          <div className="group w-80 h-64 bg-[url('/public/bg-images/menu-tacos.png')] bg-center bg-cover hover:bg-opacity-60 rounded-3xl cursor-pointer">
            <Link
              to="/menu"
              className="w-80 h-64 rounded-3xl bg-[black] bg-opacity-0 hover:bg-opacity-60 flex flex-row justify-center items-center duration-500"
            >
              <p className="invisible group-hover:visible text-[white] duration-100 text-3xl">
                Tacos
              </p>
            </Link>
          </div>
          <div className="group w-80 h-64 bg-[url('/public/bg-images/menu-enchiladas.webp')] bg-center bg-cover hover:bg-opacity-60 rounded-3xl cursor-pointer">
            <Link
              to="/menu"
              className="w-80 h-64 rounded-3xl bg-[black] bg-opacity-0 hover:bg-opacity-60 flex flex-row justify-center items-center duration-500"
            >
              <p className="invisible group-hover:visible text-[white] duration-100 text-3xl">
                Enchilatas
              </p>
            </Link>
          </div>
          <Link
            to="/menu"
            className="flex flex-row gap-2 items-center text-2xl font-semibold transition hover:text-red-primary"
          >
            <span>Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* FLOWERS */}
      <div className="px-8 py-20 flex justify-between bg-white">
        <img className="h-147 w-562" src={flowerBorderLeft} alt="" />
        <img className="h-147 w-562" src={flowerBorderRight} alt="" />
      </div>

      {/* HOURS */}
      <div className="max-w-[1300px] mx-auto pb-20 flex justify-center items-stretch gap-16 bg-white">
        <Hours />
        <img
          className="h-430 w-366 object-cover rounded-2xl shadow-xl"
          src={cafeOwners}
          alt="Restaurant owners"
        />
        <img
          className="h-430 w-366 object-cover rounded-2xl shadow-xl"
          src={cafeEntrance}
          alt="Restaurant entrance"
        />
      </div>
    </div>
  );
}

export default Home;
