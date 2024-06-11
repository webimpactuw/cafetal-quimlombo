import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import cafeEntrance from "../images/cafe-entrance.png";
import cafeOwners from "../images/cafe-owners.jpg";
import flowerBorderLeft from "../images/flower-border-left.png";
import flowerBorderRight from "../images/flower-border-right.png";
import client from "../sanityClient.js";
import Hours from "../components/Hours.js";

function Home() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "homePage"][0]{
      textBox,
      image1{asset->{url}},
      image2{asset->{url}},
      image3{asset->{url}},
      image4{asset->{url}},
      image5{asset->{url}}
    }`
      )
      .then((data) => setContent(data))
      .catch((err) => console.error("Sanity fetch error: ", err));
  }, []);

  if (!content) return <div>Loading...</div>;

  return (
    <div className="pt-19 lg:pt-20">
      {/* HERO */}
      <div className="h-371 bg-[url('/public/bg-images/home-hero.jpeg')] bg-center bg-cover border-b-[6px] border-red-dark"></div>
      <div className="flex flex-row justify-center w-full pt-4 px-16 md:p-0 md:absolute md:translate-x-1/8 md:translate-y-[-60px] xl:translate-y-[-49px]">
        <p
          className="flex items-center bg-beige text-gray-primary text-xl md:text-lg xl:text-xl font-medium text-center rounded-2xl border-[6px] border-red-dark leading-8 md:leading-[18.6px]
        p-4 md:px-8 md:h-[120px] md:w-[600px] xl:px-8 xl:h-94 xl:w-786"
        >
          Located in South Seattle, Cafetal Quilombo Café is a unique restaurant
          offering authentic Mexican tacos in combination with Seattle’s iconic
          coffee.
        </p>
      </div>

      {/* FOOD */}
      <div className=" mx-auto pt-16 md:pt-32 flex flex-col justify-center items-center max-w-[1280px] px-8 md:px-16">
        <h1 className="text-4xl font-bold">Food</h1>
        <div className="flex flex-col items-center gap-16 w-full py-2.5 xl:flex-row shrink">
          <div className="group h-[120px] w-full md:h-[160px] bg-[url('/public/bg-images/menu-tamales.webp')] bg-center bg-cover hover:bg-opacity-60 rounded-3xl cursor-pointer xl:w-80 xl:h-64">
            <Link
              to="/menu"
              className="h-[120px] w-full md:h-[160px] rounded-3xl bg-[black] bg-opacity-40 xl:bg-opacity-0 xl:hover:bg-opacity-60 flex flex-row justify-center items-center duration-500 xl:w-80 xl:h-64"
            >
              <p className="xl:invisible xl:group-hover:visible text-[white] xl:duration-100 text-3xl">
                Tamales
              </p>
            </Link>
          </div>
          <div className="group h-[120px] w-full md:h-[160px] bg-[url('/public/bg-images/menu-tacos.png')] bg-center bg-cover hover:bg-opacity-60 rounded-3xl cursor-pointer xl:w-80 xl:h-64">
            <Link
              to="/menu"
              className="h-[120px] w-full md:h-[160px] rounded-3xl bg-[black] bg-opacity-40 xl:bg-opacity-0 xl:hover:bg-opacity-60 flex flex-row justify-center items-center duration-500 xl:w-80 xl:h-64"
            >
              <p className="xl:invisible xl:group-hover:visible text-[white] xl:duration-100 text-3xl">
                Tacos
              </p>
            </Link>
          </div>
          <div className="group h-[120px] w-full md:h-[160px] bg-[url('/public/bg-images/menu-enchiladas.webp')] bg-center bg-cover hover:bg-opacity-60 rounded-3xl cursor-pointer xl:w-80 xl:h-64">
            <Link
              to="/menu"
              className="h-[120px] :w-full md:h-[160px] rounded-3xl bg-[black] bg-opacity-40 xl:bg-opacity-0 xl:hover:bg-opacity-60 flex flex-row justify-center items-center duration-500 xl:w-80 xl:h-64"
            >
              <p className="xl:invisible xl:group-hover:visible text-[white] xl:duration-100 text-3xl">
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* FLOWERS */}
      <div className="mx-auto xl:px-8 xl:py-20 xl:flex xl:justify-between justify-center bg-white pt-[40px] max-w-[1300px]">
        <img
          className="w-0 h-0 xl:h-147 xl:w-562"
          src={flowerBorderLeft}
          alt=""
        />
        <img
          className="w-0 h-0 xl:h-147 xl:w-562"
          src={flowerBorderRight}
          alt=""
        />
      </div>

      {/* HOURS */}
      <div className="mx-auto md:max-w-[1000px] xl:max-w-[1280px] pb-20 flex flex-col justify-center items-center xl:flex-row xl:items-stretch gap-16 md:gap-16 bg-white">
        <Hours />
        <img
          className="h-[396px] w-[326px] md:h-430 md:w-[400px] md:h-[500px] md:w-[500px] xl:h-430 xl:w-[366px] object-cover rounded-2xl shadow-xl"
          src={cafeOwners}
          alt="Restaurant owners"
        />
        <img
          className="h-[396px] w-[326px] md:h-430 md:w-[400px] md:h-[500px] md:w-[500px] xl:h-430 xl:w-[366px] object-cover rounded-2xl shadow-xl"
          src={cafeEntrance}
          alt="Restaurant entrance"
        />
      </div>
    </div>
  );
}

export default Home;
