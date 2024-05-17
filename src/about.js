import React from "react";
import Hours from "./Hours.js";

function About() {
  return (
    <div className="pt-32 pb-3 bg-gray-100">
      {/* Our Story */}
      <section className="pb-12 mx-auto max-w-[1200px]">
        {/* Flex container for image and text */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          {/* Container for rounded image */}
          <div className="w-full md:w-1/4 rounded-xl overflow-hidden mb-4">
            {/* Image */}
            <img
              src={require("./quil.png")}
              alt="Quilombo Café"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          {/* Container for text */}
          <div className="w-full  md:w-3/4">
            <div className="rounded-xl bg-[#F9F6EE] border-4 border-[darkred] bg-white p-4">
              {/* Our Story title */}
              <h2 className="text-[28px] text-lg font-serif font-bold text-darkred mb-4 text-left">
                Our Story
              </h2>
              {/* Text with serif font */}
              <p className="text-lg font-serif">
                Historically, a quilombo was a refuge in Brazil, offering
                shelter and safety. From this meaning, the owners decided to
                name their coffee shop after this. Cafetal Quilombo Café is
                meant to be a community open to everyone, a place to relax, be
                present, and enjoy some great coffee.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-100 font-serif">
        {/* Red background section */}
        <section style={{ backgroundColor: "#C70000" }} className="w-screen ">
          <div className="pb-12 container mx-auto max-w-[1200px] py-8">
            <section className="text-white mx-auto max-w-[1400px] rounded-xl">
              <h2 className="text-[28px] text-[#FFFF] text-lg font-serif font-bold mb-4">
                Location and Hours
              </h2>
              {/* Divider with Google Map and Schedule */}
              <div className="flex flex-col md:flex-row text-[#FFFF] gap-12 items-stretch justify-between">
                {/* Google Map */}
                <div className="grow w-full md:w-1/2 rounded-xl overflow-hidden">
                  {/* You can embed your Google Map here */}
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.1899359858166!2d-122.31626922343985!3d47.56409279091152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041d9e9ab7363%3A0x4042c931a153902b!2sCafetal%20Quilombo%20Cafe!5e0!3m2!1sen!2sus!4v1715116586151!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-xl"
                  ></iframe>
                </div>
                {/* Schedule */}
                <Hours displayContact={false} />
              </div>
            </section>
          </div>
        </section>

        {/* Get in Touch */}
        <section className="mx-auto pb-12 mt-8 max-w-[1200px]">
          <h2 className="pt-8 text-[28px]  text-lg font-serif font-bold text-darkred mb-4">
            Get in Touch!
          </h2>
          {/* Social Media Links */}
          <div className="bg-white p-4 rounded-xl flex justify-between">
            {/* Phone */}
            <a
              href="tel:+12066026412"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl flex items-center"
            >
              <img
                src={require("./call.png")}
                alt="Call"
                className="w-8 h-8 object-cover rounded-xl"
              />
              <span className="ml-2 text-base font-semibold">
                (206) 602-6412
              </span>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/cafetalquilombocafe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl flex items-center"
            >
              <img
                src={require("./instagram.png")}
                alt="Instagram"
                className="w-8 h-8 object-cover rounded-xl"
              />
              <span className="ml-2 text-base font-semibold">
                @cafetalquilombocafe
              </span>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/cafetalquilombo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl flex items-center"
            >
              <img
                src={require("./facebook.png")}
                alt="Facebook"
                className="w-8 h-8 object-cover rounded-xl"
              />
              <span className="ml-2 text-base font-semibold">
                Cafetal Quilombo
              </span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
