import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import BlackLogo from "../assets/blacklogo.png";

const pubKey = import.meta.env.VITE_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_VITE_ONBOARD_TEMPLATE_ID;

export default function QuoteForm(props) {
  const { setShowQuote } = props;
  const { setShowPopUp, setPopUpMessage } = props;

  const handleClick = () => {
    setShowQuote(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyname: "",
    projecttype: "",
    projectdescription: "",
    budgetExpectation: "",
    timelineExpectation: "",
    howDidYouFindUs: "",
    favoriteDrink: "",
    submitted: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name: formData.name,
      Email: formData.email,
      "Company Name": formData.companyname,
      "Service Type": formData.projecttype,
      "Project Description": formData.projectdescription,
      "Budget Expectation": formData.budgetExpectation,
      "Timeline Expectation": formData.timelineExpectation,
      "Lead Source": formData.howDidYouFindUs,
      "Favorite Drink": formData.favoriteDrink,
    };
    try {
      await fetch(
        "https://hook.eu2.make.com/ilkplorrb4jp9wropolmm3shii7deqwm",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      setPopUpMessage("Form Submitted");
      setShowPopUp(true);
    } catch (error) {
      console.error(error);
      setPopUpMessage("Failed");
      setShowPopUp(true);
    }
  };

  return (
    <div className="fixed w-screen lg:w-7/12 h-screen flex flex-col pt-4 bg-white text-black border shadow-sm z-50 px-4 right-0">
      <div className="text-right  border-b-[0.1px] mb-10 pb-2">
        <button onClick={handleClick}>close</button>
      </div>
      <div className=" overflow-y-scroll">
        <p className="my-3 text-sm">
          Let's get aligned! We want to make sure we're the right fit for your
          project. Please review the details below and submit our 'Getting
          Started' form so we can learn more about your vision and goals. We're
          looking forward to exploring how we can help you succeed!
        </p>
        <p className="my-3 text-sm">
          If you have questions or are unsure if we're a fit, please don't
          hesitate to reach out.
        </p>
        <form
          onSubmit={handleSubmit}
          className="onboard-form w-full h-full justify-center text-center my-8  pb-96"
        >
          <div className="flex w-full gap-2 my-3">
            <div className="w-1/2 text-left">
              <label htmlFor="name" className="block">
                Your name <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                value={formData.name}
                name="name"
                placeholder="Type here"
                className="w-full  px-1 py-2 bg-transparent border-b-[0.2px] border-black text-[1rem]"
                id="name"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2 text-left">
              <label htmlFor="email" className="block">
                Email: <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                placeholder="Type Here"
                className="w-full  px-1 py-2 bg-transparent border-b-[0.2px] border-black text-[1rem]"
                id="email"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="my-5 text-left">
            <label htmlFor="companyname" className="block">
              Company name: <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              value={formData.companyname}
              name="companyname"
              placeholder="Type Here"
              className="w-full  px-1 py-2 bg-transparent border-b-[0.2px] border-black text-[1rem]"
              id="companyname"
              onChange={handleChange}
            />
          </div>

          <div className="my-5 text-left flex flex-col gap-4 text-lg">
            <div>
              <label className="block">
                Service Type: <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="flex gap-4 items-center">
              <input
                className="w-4 h-4 text-black"
                type="radio"
                id="website"
                name="projecttype"
                value="website"
                checked={formData.projecttype === "website"}
                onChange={handleChange}
              />
              <label className="text-8xl" htmlFor="website">
                WEBSITE
              </label>
              <input
                className="w-4 h-4 text-black"
                type="radio"
                id="chatbot"
                name="projecttype"
                value="chatbot"
                checked={formData.projecttype === "chatbot"}
                onChange={handleChange}
              />
              <label className="text-8xl" htmlFor="chatbot">
                AI CHATBOT INTEGRATION
              </label>
            </div>
          </div>

          <div className="my-5 text-left">
            <label htmlFor="message" className="block">
              Project Description: <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              className="w-full  px-1 py-2 bg-transparent border-b-[0.2px] border-black text-[1rem]"
              id="projectdescription"
              name="projectdescription"
              placeholder="Type here"
              value={formData.projectdescriptiom}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex w-full gap-2 my-5">
            <div className="w-1/2 text-left flex flex-col">
              <label htmlFor="budgetExpectation">
                Budget Expectation <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full  px-1 py-2 bg-transparent border-b-[0.2px] border-black text-[1rem]"
                name="budgetExpectation"
                id="budgetExpectation"
                value={formData.projectExpectation}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select
                </option>
                <option value="<5k">Less than 5k</option>
                <option value=">5k">More than 5k</option>
                <option value=">10k">More than 10k</option>
                <option value=">20k">More than 20k</option>
              </select>
            </div>
            <div className="w-1/2 text-left flex flex-col">
              <label htmlFor="timelineExpectation">
                Timeline Expectation <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                value={formData.timelineExpectation}
                name="timelineExpectation"
                placeholder="Type here"
                className="w-full  px-1 py-2 bg-transparent border-b-[0.2px] border-black text-[1rem]"
                id="timelineExpectation"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex w-full gap-2 my-5">
            <div className="w-1/2 text-left">
              <label htmlFor="howDidYouFindUs" className="block">
                How did you find us? <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="text"
                value={formData.howDidYouFindUs}
                name="howDidYouFindUs"
                placeholder="Type here"
                className="w-full  px-1 py-2 bg-transparent border-b-[0.2px] border-black text-[1rem]"
                id="howDidYouFindUs"
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2 text-left">
              <label htmlFor="favoriteDrink" className="block">
                Favorite Drink
              </label>
              <input
                type="text"
                name="favoriteDrink"
                value={formData.favoriteDrink}
                placeholder="Type Here"
                className="w-full  px-1 py-2 bg-transparent border-b-[0.2px] border-black text-[1rem]"
                id="favoriteDrink"
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            value="Send"
            className="w-full text-xl bg-black text-white my-4 border py-2 px-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
