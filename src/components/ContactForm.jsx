import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const pubKey = import.meta.env.VITE_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_CONTACT_TEMPLATE_ID;

export default function ContactForm(props) {
  const { setShowPopUp, setPopUpMessage } = props;

  const form = useRef();

  const initialFormData = {
    name: "",
    email: "",
    message: "",
    phone: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
    };
    try {
      await fetch(
        "https://hook.eu2.make.com/tmyhaqw8r5jv7rrx4r49wu1qzeuuydme",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      setPopUpMessage("Message Sent");
      setShowPopUp(true);
    } catch (error) {
      console.error(error);
      setPopUpMessage("Failed");
      setShowPopUp(true);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;

    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  return (
    <form onSubmit={handleSubmit} className="w-full h-auto">
      <input
        type="text"
        value={formData.name}
        name="name"
        className="w-full px-2 my-2 border-b-[0.5px] border-black text-[1rem]"
        id="name"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        className="w-full px-2 my-2  border-b-[0.5px] border-black text-[1rem]"
        id="email"
        placeholder="Email:"
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        className="w-full px-2 my-2   border-b-[0.5px] border-black text-[1rem]"
        id="phone"
        placeholder="Phone Number:"
        onChange={handleChange}
      />
      <textarea
        className="w-full px-2 my-2 h-40 border border-b-[0.5px] border-black text-[1rem]"
        id="message"
        name="message"
        value={formData.message}
        placeholder="What's up?"
        onChange={handleChange}
      ></textarea>
      <button
        type="submit"
        value="Send"
        className="w-full text-xl bg-black text-white border  py-2 px-6"
      >
        Get In Touch
      </button>
    </form>
  );
}
