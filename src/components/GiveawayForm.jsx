import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import BlackLogo from "../assets/blacklogo.png";
import { MoveLeft } from "lucide-react";

const pubKey = import.meta.env.VITE_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_ONBOARD_TEMPLATE_ID;

export default function GiveawayForm() {
  const form = useRef();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    companyname: "",
    email: "",
    message: "",
    phone: "",
    socials: "",
    website: "",
    address: "",
    services: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: pubKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setFormData({ ...formData, submitted: true });
          navigate("/submitted", { replace: true });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="w-full px-2 md:w-5/6 md:px-0 lg:px-0 lg:w-1/2 h-auto flex flex-col rounded py-10">
      <div className="w-full flex justify-center mb-10">
        <img className="w-40" src={BlackLogo} alt="logo" />
      </div>
      <form
        ref={form}
        className="onboard-form w-full h-full justify-center text-center border px-6 py-10"
        onSubmit={sendEmail}
      >
        <h1 className="font-black text-[2rem] my-3">Welcome</h1>
        <p className="font-thin text-sm">
          This could the beginning of something exciting.
        </p>
        <p className="font-thin text-sm my-6">
          Fill out the form below with as much detail as you can to determine if
          you are the best fit, congratulations in advance.
        </p>

        <div className="my-3 text-left">
          <label htmlFor="name" className="block">
            Your name <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            value={formData.name}
            name="name"
            placeholder="name"
            className="w-full px-1 border-b-[0.5px] border-black text-[1rem]"
            id="name"
            onChange={handleChange}
          />
        </div>

        <div className="my-3 text-left">
          <label htmlFor="companyname" className="block">
            Your company, business or organization name{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            value={formData.companyname}
            name="companyname"
            placeholder="company name"
            className="w-full px-1 border-b-[0.5px] border-black text-[1rem]"
            id="companyname"
            onChange={handleChange}
          />
        </div>

        <div className="my-3 text-left">
          <label htmlFor="phone" className="block">
            Best phone number for us to reach you:{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder="phone number"
            className="w-full px-1 border-b-[0.5px] border-black text-[1rem]"
            id="phone"
            onChange={handleChange}
          />
        </div>

        <div className="my-3 text-left">
          <label htmlFor="email" className="block">
            Primary email of your business, company, or organization:{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            placeholder="email"
            className="w-full px-1 border-b-[0.5px] border-black text-[1rem]"
            id="email"
            onChange={handleChange}
          />
        </div>

        <div className="my-3 text-left">
          <label htmlFor="socials" className="block">
            Link to your facebook or instagram (Available ones|separated by a
            comma) <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            value={formData.socials}
            name="socials"
            placeholder="socials"
            className="w-full px-1 border-b-[0.5px] border-black text-[1rem]"
            id="socials"
            onChange={handleChange}
          />
        </div>
        <div className="my-3 text-left">
          <label htmlFor="socials" className="block">
            Do you have an existing website?(If yes provide the link please)
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.socials}
            name="website"
            placeholder="website"
            className="w-full px-1 border-b-[0.5px] border-black text-[1rem]"
            id="website"
            onChange={handleChange}
          />
        </div>
        <div className="my-3 text-left">
          <label htmlFor="services" className="block">
            What is your organization into?{" "}
            <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            value={formData.services}
            name="services"
            placeholder="your focus"
            className="w-full px-1 border-b-[0.5px] border-black text-[1rem]"
            id="services"
            onChange={handleChange}
          />
        </div>

        <div className="my-3 text-left">
          <label htmlFor="address" className="block">
            Where are you guys located? <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            value={formData.address}
            name="address"
            placeholder="address"
            className="w-full px-1 border-b-[0.5px] border-black text-[1rem]"
            id="address"
            onChange={handleChange}
          />
        </div>

        <div className="my-3 text-left">
          <label htmlFor="message" className="block">
            Anything else we wanna let us know?
          </label>
          <textarea
            className="w-full p-1 h-40 border border-b-[0.5px] border-black text-[1rem]"
            id="message"
            name="message"
            placeholder="Anything else?"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          value="Send"
          className="w-full text-xl bg-black text-white border py-2 px-6"
        >
          Submit
        </button>
      </form>
      <a className="flex justify-center text-center my-10" href="/">
        <MoveLeft />
        Home
      </a>
    </div>
  );
}
