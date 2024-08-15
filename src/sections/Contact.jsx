import React, { useEffect } from "react";
import { useDarkMode } from "../components/DarkModeContext";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const { darkMode } = useDarkMode();
  return (
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        id="contact"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[95%] w-full h-fit m-auto rounded-xl grid lg:grid-cols-2
grid-cols-1 justify-center items-center lg:px-36 px-6 py-20 gap-10`}
      >
        <div
          data-aos="zoom-in"
          className="bg-white dark:bg-black p-10 flex flex-col justify-center items-start gap-4 rounded-xl"
        >
          <h1 className="text-2xl text-black font-semibold dark:text-white">
            Send us a message
          </h1>
          <input
            type="text"
            placeholder="Enter your full name here"
            className="w-full px-6 py-3 border-2 border-gray-200 rouned-xl"
          />
          <input
            type="email"
            placeholder="Enter your valid email here"
            className="w-full px-6 py-3 border-2 border-gray-200 rouned-xl"
          />
          <input
            type="number"
            placeholder="Enter your valid number here"
            className="w-full px-6 py-3 border-2 border-gray-200 rouned-xl"
          />

          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Enter your mesage here"
            className="w-full px-6 py-3 border-2 border-gray-200 rouned-xl"
          ></textarea>
          <button className="bg-red-600 w-full text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">
            Send Email
          </button>
        </div>
        <div className="flex flex-col justify-center items-start gap-8 lg:p-20 p-6">
          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-red-500 dark:text-white"
          >
            Reach to Us
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-deley="400"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white"
          >
            Reach out through the form below, and we’ll be in touch soon{" "}
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-delay="600"
            className="text-xl text-gray-600 text-justify dark:text-white"
          >
            Thank you for reaching out! Please fill out the form below, and our
            team will get back to you shortly. We look forward to assisting you
          </p>
          <button className="bg-red-600 text-md px-8 py-3 text-white font-semibold rounded-xl hover:bg-black dark:hover:bg-red-700 cursor-pointer">
            Send Email
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
