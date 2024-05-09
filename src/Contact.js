import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    console.log(name);
  };

  return (
    <>
      <div className="mx-auto font-serif">
        <div className="h-[235px] w-full bg-[url('./Images/contactImage.png')] bg-center bg-cover border-b-[6px] border-burgundy">
          <div className="mx-auto flex justify-center border-8 border-burgundy rounded-[16px] w-[980px] h-[146px] translate-y-[160px] bg-white">
            <div className="flex-col">
            <h1 className="text-[24px] py-2">Catering</h1>
            <p className="px-[48px] text-[18px] leading-5">
              Looking to serve a large group? We can cater large orders of your
              favorite dishes, complete with delicious sides. Our typical
              requests are for tamales, tacos, or enchiladas, but if there’s
              something else you’re interested in, we’re happy to accommodate!{" "}
            </p>
            </div>
          </div>
        </div>
        <div className="py-[10%] mx-auto w-[1100px]">
          <form>
            <div className="flex flex-row justify-between text-left">
              <input
                type="text"
                placeholder="Name"
                className="w-[345px] h-[43px] pl-2.5 border-2 rounded-[8px] flex items-center"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-[345px] h-[43px] pl-2.5 border-2 border-black rounded-[8px] flex items-center"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              ></input>
              <input
                type="text"
                placeholder="Email"
                className="w-[345px] h-[43px] pl-2.5 border-2 border-black rounded-[8px] flex items-center"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="pb-1 pt-12 text-left">How can we help you?</div>
            <textarea
              placeholder="Include the kind of food, quantity, and timing"
              className="w-[1100px] h-[162px] pl-2.5 pr-2.5 pb-1 pt-1 border-2 border-black rounded-[8px] text-left"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="flex justify-end">
              <button
                type="button"
                className="pt-12 flex justify-end pb-16"
                disabled={!name || !email || !message}
                onClick={sendEmail}
              >
                <div className="w-[202px] h-[51px] rounded-[6px] text-white bg-red text-white flex flex-col justify-center">
                  Submit Request
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
