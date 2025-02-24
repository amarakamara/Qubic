import React, { useState, useRef } from "react";

const formUrl = import.meta.env.VITE_URL2;

export default function ContactForm() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const body = {
      sheet1: {
        name,
        email,
        message,
      },
    };

    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.text();
        console.error("Response error:", errorData);
        setIsSuccess(false);
      }

      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      setIsSuccess(false);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="w-full h-auto">
        {showPopup && (
          <div
            className={`text-sm px-4 py-2 rounded text-center text-white ${
              isSuccess ? "bg-black" : "bg-red-500"
            }`}
          >
            {isSuccess
              ? "Message sent successfully!"
              : "Failed to send message"}
          </div>
        )}
        <input
          type="text"
          value={formData.name}
          name="name"
          className="w-full px-2 my-2 border-b-[0.5px] border-black text-[1rem]"
          id="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          className="w-full px-2 my-2 border-b-[0.5px] border-black text-[1rem]"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <textarea
          className="w-full px-2 my-2 h-40 border border-b-[0.5px] border-black text-[1rem]"
          id="message"
          name="message"
          value={formData.message}
          placeholder="What's up?"
          onChange={handleChange}
          required
        ></textarea>
        <button
          type="submit"
          value="Send"
          className="w-full text-xl bg-black text-white border py-2 px-6"
        >
          Get In Touch
        </button>
      </form>
    </div>
  );
}
