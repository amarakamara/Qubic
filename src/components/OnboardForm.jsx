import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlackLogo from "../assets/blacklogo.png";

export default function OnboardForm(props) {
  const { setShowPopUp, setPopUpMessage } = props;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    companyname: "",
    email: "",
    message: "",
    phone: "",
    socials: "",
    website: "",
    customer: "",
    address: "",
    services: "",
    timezone: "",
    submitted: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...formData,
    };
    try {
      await fetch(
        "https://hook.eu2.make.com/bf7marzwsfn9rskcskx1kq6dwbyodw47",
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
        className="onboard-form w-full h-full justify-center text-center border px-6 py-10"
        onSubmit={handleSubmit}
      >
        <h1 className="font-black text-[2rem] my-3">Let's get started</h1>
        <p className="font-thin text-sm">
          This is the start of something exciting.
        </p>
        <p className="font-thin text-sm mb-6">
          Fill out the form below with as much detail as you can
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
            Your company or business name{" "}
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
            Best phone number for customers to reach you:{" "}
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
            Primary email of your business:{" "}
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
            Link to your social media pages (Available ones|separated by a
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
          <label htmlFor="website" className="block">
            Current website link (if you have one)
          </label>
          <input
            type="text"
            value={formData.website}
            name="website"
            placeholder="website"
            className="w-full px-1 border-b-[0.5px] border-black text-[1rem]"
            id="website"
            onChange={handleChange}
          />
        </div>

        <div className="my-3 text-left">
          <label htmlFor="customer" className="block">
            Who is your ideal customer? <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            value={formData.customer}
            name="customer"
            placeholder="customer"
            className="w-full px-1 border-b-[0.5px] border-black text-[1rem]"
            id="customer"
            onChange={handleChange}
          />
        </div>

        <div className="my-3 text-left">
          <label htmlFor="services" className="block">
            What services do you offer? <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            value={formData.services}
            name="services"
            placeholder="services"
            className="w-full px-1 border-b-[0.5px] border-black text-[1rem]"
            id="services"
            onChange={handleChange}
          />
        </div>

        <div className="my-3 text-left">
          <label htmlFor="timezone" className="block">
            Your time zone <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            value={formData.timezone}
            name="timezone"
            placeholder="timezone"
            className="w-full px-1 border-b-[0.5px] border-black text-[1rem]"
            id="timezone"
            onChange={handleChange}
          />
        </div>

        <div className="my-3 text-left">
          <label htmlFor="address" className="block">
            Your full business address <span className="text-red-500">*</span>
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

        <button type="button" className="bg-black my-3 py-2 text-white w-full">
          Google Drive Folder
        </button>
        <p className="font-thin text-xs my-3">
          Please use the Google Drive link above to upload all creative assets
          i.e photos, staff headshots, videos, or previous work you've done.
          Don't forget to include your logo.
        </p>

        <div className="flex w-full justify-start items-center my-3">
          <input
            required
            type="checkbox"
            checked={formData.submitted}
            name="submitted"
            className=""
            id="submitted"
            onChange={handleChange}
          />
          <label htmlFor="submitted" className="ml-2">
            I have submitted
          </label>
        </div>

        <div className="my-3 text-left">
          <label htmlFor="message" className="block">
            Anything else we should know?
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
    </div>
  );
}
