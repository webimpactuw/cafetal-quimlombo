function Contact() {
  return (
    <>
      <div className="mx-auto w-[1100px]">
        <div className="flex flex-row justify-between py-16">
          <div className="w-[399px] h-[254px] border-4 rounded-[16px] border-black"></div>
          <div className="w-[651px] h-[189px] border-4 rounded-[16px] border-black flex flex-col">
            <div className="text-2xl py-2 px-2 text-left">Contact</div>
            <div className="text-left px-2 text-l">
              Looking to serve a large group? We can cater large orders of your
              favorite dishes, complete with delicious sides. Our typical
              requests are for tamales, tacos, or enchiladas, but if there's
              something else you're interested in, we're happy to accommodate!
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between text-left">
          <div className="w-[345px] h-[43px] border-4 border-black rounded-[8px]">
            Name
          </div>
          <div className="w-[345px] h-[43px] border-4 border-black rounded-[8px]">
            Phone Number
          </div>
          <div className="w-[345px] h-[43px] border-4 border-black rounded-[8px]">
            Email
          </div>
        </div>
        <div className="pt-12 text-left">How can we help you?</div>
        <div className="w-[1100px] h-[162px] border-4 border-black rounded-[8px] text-left">
          Include the kind of food, quantity, and timing
        </div>
        <div className="pt-12 flex justify-end">
          <div className="w-[202px] h-[51px] border-4 border-black rounded-[6px] text-white bg-red text-white flex flex-col justify-center">
            Submit Request
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
