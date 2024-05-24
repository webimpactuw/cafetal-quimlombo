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
      <div className="flex flex-row justify-between">
        {/* NAME */}
        <div className="w-[345px] h-[43px] flex items-center border-gray-primary border-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mx-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
          </svg>
          <input
            type="text"
            placeholder="Name"
            value={name}
            id="userName"
            name="senderName"
            onChange={(e) => setName(e.target.value)}
            className="w-[100%] outline-none focus:outline-none ring-0"
          ></input>
        </div>

        {/* PHONE NUMBER */}
        <div className="w-[345px] h-[43px] flex items-center border-gray-primary border-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="mx-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
          </svg>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            id="userPhone"
            name="senderPhone"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-[100%] outline-none focus:outline-none ring-0"
          ></input>
        </div>

        {/* EMAIL */}
        <div className="w-[345px] h-[43px] flex items-center border-gray-primary border-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mx-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
          <input
            type="text"
            placeholder="Email"
            value={email}
            id="userEmail"
            name="senderEmail"
            onChange={(e) => setEmail(e.target.value)}
            className="w-[100%] outline-none focus:outline-none ring-0"
          ></input>
        </div>
      </div>

      {/* MESSAGE */}
      <div className="mt-12 mb-2 text-xl font-semibold">
        How can we help you?
      </div>
      <textarea
        placeholder="Include the kind of food, quantity, desired date, and time."
        className="w-[100%] h-[162px] px-2.5 py-1 border-2 border-gray-primary rounded-lg"
        value={message}
        id="userMessage"
        name="senderMessage"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <div className="flex justify-end">
        <button
          type="submit"
          className="pt-12 flex justify-end"
          disabled={!name || !email || !message}
        >
          <div className="w-[200px] h-[50px] flex flex-col justify-center text-lg font-semibold text-white bg-red-primary hover:bg-red-dark cursor-pointer transition rounded-xl ">
            Submit Request
          </div>
        </button>
      </div>
    </form>
  );
}

export default Form;
