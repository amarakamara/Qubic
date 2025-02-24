import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import BlackLogo from "../assets/blacklogo.png";

const formUrl = import.meta.env.VITE_URL1;

export default function QuoteForm(props) {
  const { setShowQuote } = props;

  const handleClick = () => {
    setShowQuote(false);
  };

  const initialFormState = {
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

  const [showPopup, setShowPopup] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      sheet1: {
        name: formData.name,
        email: formData.email,
        company: formData.companyname,
        service: formData.projecttype,
        project: formData.projectdescription,
        budget: formData.budgetExpectation,
        timeline: formData.timelineExpectation,
        source: formData.howDidYouFindUs,
        drink: formData.favoriteDrink,
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
        setFormData(initialFormState);
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
      console.error(error);
      setIsSuccess(false);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  const isFormValid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.companyname &&
      formData.projecttype &&
      formData.projectdescription &&
      formData.budgetExpectation &&
      formData.timelineExpectation &&
      formData.howDidYouFindUs
    );
  };

  return (
    <div className="fixed w-screen lg:w-7/12 h-screen flex flex-col pt-4 bg-white text-black border shadow-sm z-50 px-4 right-0">
      {showPopup && (
        <div
          className={`text-sm px-4 py-2 rounded text-center text-white ${
            isSuccess ? "bg-black" : "bg-red-500"
          }`}
        >
          {isSuccess ? "Message sent successfully!" : "Failed to send message"}
        </div>
      )}
      <div className="text-right border-b-[0.1px] mb-10 pb-2">
        <button onClick={handleClick}>Close</button>
      </div>
      <div className="overflow-y-scroll">
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
          className="onboard-form w-full h-full justify-center text-center my-8 pb-96"
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
                className="w-full px-1 py-2 bg-transparent border-b-[0.2px] border-black text-[1rem]"
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
                className="w-full px-1 py-2 bg-transparent border-b-[0.2px] border-black text-[1rem]"
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
              className="w-full px-1 py-2 bg-transparent border-b-[0.2px] border-black text-[1rem]"
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
                id="voice-agent"
                name="projecttype"
                value="voice-agent"
                checked={formData.projecttype === "voice-agent"}
                onChange={handleChange}
              />
              <label className="text-8xl" htmlFor="voice-agent">
                AI VOICE AGENTS
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
                AI CHATBOTS
              </label>
              <input
                className="w-4 h-4 text-black"
                type="radio"
                id="consultation"
                name="projecttype"
                value="consultation"
                checked={formData.projecttype === "consultation"}
                onChange={handleChange}
              />
              <label className="text-8xl" htmlFor="consultation">
                CONSULTATION
              </label>
            </div>
          </div>

          <div className="my-5 text-left">
            <label htmlFor="projectdescription" className="block">
              Project Description: <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              className="w-full px-1 py-2 bg-transparent border-b-[0.2px] border-black text-[1rem]"
              id="projectdescription"
              name="projectdescription"
              placeholder="Type here"
              value={formData.projectdescription}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="flex w-full gap-2 my-5">
            <div className="w-1/2 text-left flex flex-col">
              <label htmlFor="budgetExpectation">
                Budget Expectation <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-1 py-2 bg-transparent border-b-[0.2px] border-black text-[1rem]"
                name="budgetExpectation"
                id="budgetExpectation"
                value={formData.budgetExpectation}
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
                className="w-full px-1 py-2 bg-transparent border-b-[0.2px] border-black text-[1rem]"
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
                className="w-full px-1 py-2 bg-transparent border-b-[0.2px] border-black text-[1rem]"
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
                className="w-full px-1 py-2 bg-transparent border-b-[0.2px] border-black text-[1rem]"
                id="favoriteDrink"
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            value="Send"
            className="w-full text-xl bg-black text-white mt-4 mb-24 border py-2 px-6"
            disabled={!isFormValid()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
