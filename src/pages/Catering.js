import Form from "../components/Form.js";
import { useEffect, useState } from "react";
import client from "../sanityClient.js";

function Catering() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "cateringPage"][0]`)
      .then((data) => setContent(data));
  }, []);

  if (!content) return <div>Loading...</div>;

  return (
    <div className="pt-19 lg:pt-20">
      {/* HERO */}
      <div className="h-371 bg-[url('/public/bg-images/catering-hero.png')] bg-center bg-cover border-b-[6px] border-red-dark"></div>
      <div className="flex flex-row justify-center w-full pt-4 px-8 md:p-0 md:absolute md:translate-x-1/8 md:translate-y-[-95px] xl:translate-y-[-110px]">
        <div
          className="flex flex-col items-center bg-beige text-gray-primary text-lg md:text-lg xl:text-xl font-medium text-center rounded-2xl border-[6px] border-red-dark leading-8 md:leading-[18.6px]
        p-4 md:px-8 md:w-[600px] xl:px-8 xl:w-786"
        >
          <h1 className="mb-2 text-3xl lg:text-4xl font-bold text-center">
            Catering
          </h1>
          <p>{content.cateringText}</p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto pt-12 md:pt-36 lg:pb-24 md:pb-2">
        <Form />
      </div>
    </div>
  );
}

export default Catering;
