import React from "react";

function About() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        {/* Our Story */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-red">Our Story</h2>
          <div className="flex flex-wrap items-center">
            <div className="w-[310px] h-[319px] rounded-[20px]">
              <img src={require("./quil.jpg")} />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-lg">
                Historically, a quilombo was a refuge in Brazil, offering
                shelter and safety. From this meaning, the owners decided to
                name their coffee shop after this. Cafetal Quilombo Café is
                meant to be a community open to everyone, a place to relax, be
                present, and enjoy some great coffee.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
