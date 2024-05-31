import Form from "../components/Form.js";

function Catering() {
  return (
    <div className="pt-[82px]">
      {/* HERO */}
      <div className="h-[235px] bg-[url('/public/bg-images/catering-hero.png')] bg-center bg-cover border-b-[6px] border-red-dark">
        <div className="mx-8">
        <div className="max-w-[980px] h-[245px] md:h-[195px] translate-y-[140px] mx-auto px-8 flex flex-col justify-center bg-beige border-red-dark border-[6px] rounded-2xl">
          <h1 className="mb-2 text-3xl lg:text-4xl font-bold text-center">Catering</h1>
          <p className="text-sm md:text-base lg:text-xl leading-4 lg:leading-6 text-center">
            Looking to serve a large group? We can cater large orders of your
            favorite dishes, complete with delicious sides. Our typical requests
            are for tamales, tacos, or enchiladas, but if there's something else
            you're interested in, we're happy to accommodate!{" "}
          </p>
        </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto pt-48 lg:pb-24 md:pb-2">
        <Form />
      </div>
    </div>
  );
}

export default Catering;
