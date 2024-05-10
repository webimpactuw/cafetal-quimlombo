import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Form() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_b7ilofc", "template_r8c75gq", form.current, {
        publicKey: "k9C-CL7rMTM_jR-lI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          document.getElementById("userName").value = "";
          document.getElementById("userPhone").value = "";
          document.getElementById("userEmail").value = "";
          document.getElementById("userMessage").value = "";
          alert("Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-row justify-between text-left">
        <input
          type="text"
          placeholder="Name"
          className="w-[345px] h-[43px] pl-2.5 border-2 rounded-[8px] flex items-center"
          value={name}
          id="userName"
          name="senderName"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Phone Number"
          className="w-[345px] h-[43px] pl-2.5 border-2 border-black rounded-[8px] flex items-center"
          value={phoneNumber}
          id="userPhone"
          name="senderPhone"
          onChange={(e) => setPhoneNumber(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Email"
          className="w-[345px] h-[43px] pl-2.5 border-2 border-black rounded-[8px] flex items-center"
          value={email}
          id="userEmail"
          name="senderEmail"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <div className="pb-1 pt-12 text-left">How can we help you?</div>
      <textarea
        placeholder="Include the kind of food, quantity, and timing"
        className="w-[1100px] h-[162px] pl-2.5 pr-2.5 pb-1 pt-1 border-2 border-black rounded-[8px] text-left"
        value={message}
        id="userMessage"
        name="senderMessage"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <div className="flex justify-end">
        <button
          type="submit"
          className="pt-12 flex justify-end pb-16"
          disabled={!name || !email || !message}
        >
          <div className="w-[202px] h-[51px] rounded-[6px] text-white bg-red text-white flex flex-col justify-center">
            Submit Request
          </div>
        </button>
      </div>
    </form>
  );
}

export default Form;
