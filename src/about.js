import React from "react";

function About() {
  return (
    <div className="bg-gray-100 font-serif">
      <div className="container mx-auto py-8">
        {/* Our Story */}
        <section className="mb-8">
          {/* Flex container for image and text */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Container for rounded image */}
            <div className="w-full md:w-1/4 rounded-lg overflow-hidden border-4 border-red-600 mb-4">
              {/* Image */}
              <img src={require("./quil.jpg")} alt="Quilombo Café" className="w-full h-full object-cover" />
            </div>
            {/* Container for text */}
            <div className="w-full md:w-3/4">
              <div className="rounded-lg border-4 border-red-600 bg-white p-4">
                {/* Our Story title */}
                <h2 className="text-4xl text-lg font-serif font-bold text-darkred mb-4 text-left">Our Story</h2>
                {/* Text with serif font */}
                <p className="text-lg font-serif" style={{ fontFamily: 'serif' }}>
                  Historically, a quilombo was a refuge in Brazil, offering shelter and safety. From this meaning, the owners decided to name their coffee shop after this. Cafetal Quilombo Café is meant to be a community open to everyone, a place to relax, be present, and enjoy some great coffee.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full md:w-auto mb-4 md:mb-0">
            <h2 className="text-4xl text-lg font-serif font-bold text-white mb-4">Location and Hours</h2>
          </div>
        {/* Divider with Google Map and Schedule */}
        <section className="bg-red-600 p-4 rounded-lg flex flex-col md:flex-row items-center justify-between">
          
          {/* Location and Hours */}
          
          {/* Google Map */}
          <div className="w-full md:w-1/2 md:mb-4">
            {/* You can embed your Google Map here */}
            <iframe
              src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.1899359858166!2d-122.31626922343985!3d47.56409279091152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549041d9e9ab7363%3A0x4042c931a153902b!2sCafetal%20Quilombo%20Cafe!5e0!3m2!1sen!2sus!4v1715116586151!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          {/* Schedule */}
          <div className="w-full md:w-1/2 bg-white rounded-lg p-4">
            <h3 className="text-lg font-bold text-green-600 mb-4">Hours</h3>
            <ul className="text-sm">
              <li>Monday: 8:00 AM - 6:00 PM</li>
              <li>Tuesday: 8:00 AM - 6:00 PM</li>
              <li>Wednesday: 8:00 AM - 6:00 PM</li>
              <li>Thursday: 8:00 AM - 6:00 PM</li>
              <li>Friday: 8:00 AM - 6:00 PM</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </section>
         {/* Get in Touch */}
<section className="bg-white p-4 rounded-lg flex flex-col md:flex-row items-center justify-between">
  <div className="w-full md:w-auto mb-4 md:mb-0">
    <h2 className="text-4xl text-lg font-serif font-bold text-darkred mb-4">Get in Touch</h2>
  </div>
  {/* Social Media Links */}
  <section className="bg-white p-4 rounded-lg flex items-center justify-center">
    {/* Phone */}
    <a href="(206)602-6412" target="_blank" rel="noopener noreferrer" className="text-2xl mr-4">
            <img src={require("./call.png")} alt="fb" className="w-8 h-8  object-cover" />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/cafetalquilombocafe" target="_blank" rel="noopener noreferrer" className="text-2xl mr-4">
            <img src={require("./instagram.png")} alt="Instagram" className="w-8 h-8  object-cover" />
          </a>
          {/* Facebook */}
          <a href="https://www.facebook.com/cafetalquilombo/" target="_blank" rel="noopener noreferrer" className="text-2xl mr-4">
            <img src={require("./facebook.png")} alt="fb" className="w-8 h-8 object-cover" />
          </a>
          
        </section>
</section>
</div>
</div>
  );
}
export default About;
