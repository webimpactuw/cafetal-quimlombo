import Form from "../components/Form.js";
import { useEffect, useState } from "react";
import client from "../sanityClient.js";

function Catering() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    client.fetch(`*[_type == "cateringPage"][0]`).then(data => setContent(data));
  }, []);

  if (!content) return <div>Loading...</div>;
  
  return (
    <div className="pt-[82px]">
      {/* HERO */}
      <div className="h-[235px] bg-[url('/public/bg-images/catering-hero.png')] bg-center bg-cover border-b-[6px] border-red-dark">
        <div className="w-[980px] h-[186px] translate-y-[140px] mx-auto px-8 flex flex-col justify-center bg-beige border-red-dark border-[6px] rounded-2xl">
          <h1 className="mb-2 text-4xl font-bold text-center">Catering</h1>
          <p className="text-xl leading-6 text-center">
          {content.cateringText}
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto pt-48 pb-24">
        <Form />
      </div>
    </div>
  );
}

export default Catering;
