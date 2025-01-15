import React, { useState, useRef } from "react";

export default function ContactForm() {
  const form = useRef();

  const initialFormData = {
    name: "",
    email: "",
    message: "",
    phone: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [popUpMessage, setPopUpMessage] = useState("");
  const [popUpColor, setPopUpColor] = useState("black");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message, phone } = formData;

    if (!name || !email || !message || !phone) {
      setPopUpMessage("Please fill in all fields!");
      setPopUpColor("red");
      setSent(false);
      showPopUp();
      return;
    }

    try {
      await fetch(
        "https://hook.eu2.make.com/tmyhaqw8r5jv7rrx4r49wu1qzeuuydme",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      setPopUpMessage("Message sent");
      setPopUpColor("black");
      setSent(true);
      setFormData(initialFormData);
      showPopUp();
    } catch (error) {
      console.error(error);
      setPopUpMessage("Failed to send message");
      setPopUpColor("red");
      setSent(false);
      showPopUp();
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const showPopUp = () => {
    setTimeout(() => {
      setPopUpMessage("");
    }, 3000);
  };

  return (
    <div>
      {popUpMessage && (
        <div
          className="w-auto h-auto py-2 px-6 fixed top-20 right-10 z-50 rounded text-sm text-white"
          style={{ backgroundColor: popUpColor }}
        >
          <p className="font-thin whitespace-nowrap flex gap-1 justify-center items-center">
            {popUpMessage}{" "}
            {sent ? (
              <span className="material-icons text-green-500">
                check_circle
              </span>
            ) : (
              <span className="material-icons text-red-500">cancel</span>
            )}
          </p>
        </div>
      )}
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
          className="w-full px-2 my-2 border-b-[0.5px] border-black text-[1rem]"
          id="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          className="w-full px-2 my-2 border-b-[0.5px] border-black text-[1rem]"
          id="phone"
          placeholder="Phone Number"
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
          className="w-full text-xl bg-black text-white border py-2 px-6"
        >
          Get In Touch
        </button>
      </form>
    </div>
  );
}
